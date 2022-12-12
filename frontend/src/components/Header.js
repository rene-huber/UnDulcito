import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown, Form, Button } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'
import logo from '../img/logo.png'

import { faHome, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons"


import '../index.css'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }


  return (
    <header>
      <Navbar className='clsk' expand="xl" variant='dark'>
      <Container>

      <LinkContainer to='/'>
            <Navbar.Brand>
            <img src={logo} height="57px" alt="algo" />
            </Navbar.Brand>
          </LinkContainer>


   
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
          >
          
           <LinkContainer to='/'>
                <Nav.Link>
                  Home
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/about'>
            <Nav.Link>How to Order</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">


            <LinkContainer to="/">
              <NavDropdown.Item>Cakes</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />

              <LinkContainer to="/">
              <NavDropdown.Item>Shapes</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              </NavDropdown>
          </Nav>
         
    
         


          <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i>  
                  <FontAwesomeIcon icon="fa-regular fa-cart-arrow-down" /> Cart
                </Nav.Link>
              </LinkContainer>


              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                
                <LinkContainer to='/register'>
                  <Nav.Link pr-30>
                    <i className='fas fa-user'></i> Login / Register
                  </Nav.Link>
                </LinkContainer>  
          
               
              )}
              <LinkContainer to='/'>
                <Nav.Link>
                <FontAwesomeIcon icon={faFacebook} />
                
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/'>
                <Nav.Link>
                <FontAwesomeIcon icon={faInstagram} />
                
                </Nav.Link>
              </LinkContainer>


              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header
