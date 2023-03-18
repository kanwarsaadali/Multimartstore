import React from 'react'
import { Link } from 'react-router-dom';
import { Container , Row , Col, ListGroup, ListGroupItem } from 'reactstrap'
import logo from "../../assets/images/eco-logo.png";
import './footer.css'


const Footer = () => {
const year = new Date().getFullYear()
  return (
          <footer className="footer">
            <Container>
              <Row>
                <Col lg="4" className='mb-4' md="6">
            <div className="logo">
              {/* <img src={logo}  /> */}
              <div>
              <h1 className='text-white'>Multimart</h1>
              </div>
            </div>
            <p className='footer__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nostuatur fuga porro magnam cupiditate eligendi enim molestias, facere exercitationem harum incidunt facilis. Sint id ducimus doloribus?</p>
                </Col>
                <Col lg="3" md="3" className='mb-4'>
                  <div className="footer__quick-links">
                    <h4 className="footer__links-title">
                      Top Categories  
                    </h4>
                    <ListGroup className='mb-3'>
                      <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                        <Link to='#'>Mobile Phone</Link>
                      </ListGroupItem>
                      <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                        <Link to='#'> Sofa</Link>
                      </ListGroupItem>
                      <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                        <Link to='#'> Chair</Link>
                      </ListGroupItem>
                      <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                        <Link to='#'> Watches</Link>
                      </ListGroupItem>
                    </ListGroup>
                  </div>
                </Col>
                <Col lg="2" md="3" className='mb-4'>
                <div className="footer__quick-links">
                    <h4 className="footer__links-title">
                      Useful Links
                    </h4>
                    <ListGroup className='mb-3'>
                      <ListGroupItem className='ps-0 border-0'>
                        <Link to='/shop'>Shop</Link>
                      </ListGroupItem>
                      <ListGroupItem className='ps-0 border-0'>
                        <Link to='/cart'>Cart</Link>
                      </ListGroupItem>
                      <ListGroupItem className='ps-0 border-0'>
                        <Link to='/login'>Login</Link>
                      </ListGroupItem>
                      <ListGroupItem className='ps-0 border-0'>
                        <Link to='#'>Privacy Policy</Link>
                      </ListGroupItem>
                    </ListGroup>
                  </div>
                </Col>
                <Col lg="3" md="4" className='mb-4' >
                <div className="footer__quick-links">
                    <h4 className="footer__links-title">
                      Contact
                    </h4>
                    <ListGroup className='footer__contact'>
                      <ListGroupItem className='ps-0 border-0'>
                       <div style={{display:"flex"}}> <span><i className="ri-map-pin-line"></i></span>
                        <p>sadar,karachi,Pakistan</p>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem className='ps-0 border-0'>
                    <div style={{display:"flex"}}>  <span><i className="ri-phone-line"></i></span>
                      <p>0340464321</p>
                      </div>
                      </ListGroupItem>
                      <ListGroupItem className='ps-0 border-0'>
                     <div style={{display:"flex"}}> <span><i className="ri-mail-line"></i></span>
                      <p>example123@gmail.com</p>
                      </div>
                      </ListGroupItem>
                    </ListGroup>
                  </div>
                </Col>
                <Col>
                <Col lg='12'>
                  <p className='footer__copyright'>Copyright {year}
                  developed by Kanwar Saad
                  </p>
                </Col>
                </Col>
              </Row>
            </Container>
          </footer>
    )
}

export default Footer