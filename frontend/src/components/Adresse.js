import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Adresse() {
  return (
    <Container className='adresse' >
  
    
   
   <h2>#Undulcito</h2> <br />
Follow on Instagram<br /><br />
You can order 5 days in advance at<br />
Tel.+1321-7329403 <br />and we will gladly
attend you.
<br />
undulcito2015@gmail.com
<div class="d-inline-flex p-2">I'm an inline flexbox container!</div>
<Row>
        <FontAwesomeIcon icon={faInstagram} />
        </Row>
    </Container>
  )
}
