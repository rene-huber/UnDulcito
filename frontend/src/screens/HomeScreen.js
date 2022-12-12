import React, { useEffect } from 'react'
import { Route, Link, Navigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Toldo from '../components/Toldo'
import { Container, Form, Button } from 'react-bootstrap'
import SearchBox from '../components/SearchBox'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'
import Papelillos from '../components/Papelillos'
import Adresse from '../components/Adresse'
import Bannerlicor from '../components/Bannerlicor'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Meta />
      <ProductCarousel />
      <Toldo />
      <Container>
       
  <p><Route render={({ history }) => <SearchBox history={history} />} /></p>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            <Row>
              {products.slice(0, 8).map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>

            <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ""}
            />
          </>
        )}
      </Container>
      <Papelillos />
    <Bannerlicor />
      <Adresse />
    </>
  );
}

export default HomeScreen
