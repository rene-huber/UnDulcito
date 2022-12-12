import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'


const ProductCarousel = () => {
  const dispatch = useDispatch()

  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel id='carusel' fade>
    <Carousel.Item id='bk1' className='bk'>
    
      <div className='captioon' id='bkText1'>
     
      <h1>First slide label<br />First slide label</h1>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
      
    </Carousel.Item>
    
    <Carousel.Item id='bk2' className='bk'>
    
   
    <div className='captioon' id='bkText2'>
        <h1>First slide label<br />First slide label</h1>
        <p>Lorem Ipsum is simply dummy text of the </p>
      </div>
      
    </Carousel.Item>
  </Carousel>
  )
}

export default ProductCarousel
