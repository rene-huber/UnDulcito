import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { NavLink } from "react-router-dom";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }


  return (

    <Form onSubmit={submitHandler}>
<Row><Col xs={7}> <h1>Latest Products</h1>
      <Form.Control
        className="buscar"
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="What flavor?..."
      ></Form.Control>

<Button type='submit' variant="primary">
        Search
        <NavLink to="/cart" />
      </Button></Col>
      </Row>
    </Form>
  );
}

export default SearchBox
