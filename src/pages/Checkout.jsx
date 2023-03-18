import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/checkout.css";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from "./Modal";

const Checkout = () => {

const [showModal  , setShowModal] = useState(false)

  const navigate = useNavigate()
const totalQty = useSelector(state=> state.cartSlice.totalQuantity)
const totalAmount = useSelector(state=> state.cartSlice.totalAmount)
const appState = useSelector((state) => state);
const mapData = appState.cartSlice.cartItems;
console.log(mapData[0].quantity)
  
// console.log(totalQty)
// console.log(totalAmount)

//  charging between             communication process bet fron and back

const handleToken = async(token)=>{
  // console.log(token)
  const cart = {name : "All Products" , totalAmount}
  
  const response = await axios.post("http://localhost:8080/check"  , {
    token,
    cart
  })
  console.log(response)   
  let {status} = response.data
  if(response.data.status==="success"){
    // code here
    localStorage.clear();
    totalQty = 0
    console.log("khatam")
  navigate("/home")
  toast.success("Your order has been placed succesfully" ,{
    position:"top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true ,
    pauseOnHover:false,
    draggable:false,
    progress:undefined
  })
 
  }
  else{
    alert("wrong")
  }
}

const triggerModal = () =>{
  setShowModal(true)
}

return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout"/>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              {/* <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter Your Name" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="email" placeholder="Enter Your Email" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="number" placeholder="Enter Your Number" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Street adderss" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Postal code" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Country" />
                </FormGroup>
              </Form> */}
            </Col>
            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Total Qty : <span>{totalQty}</span>
                </h6>
                <h6>
                  Subtotal : <span>${totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Shipping : <br />
                    free shipping
                  </span>
                  <span>$0</span>
                </h6>
                <h4>
                  Total Cost : <span>${totalAmount}</span>
                </h4>
                {/* <button className="shop__btn auth__btn w-100" style={{backgroundColor : "white" , color:"var(--primary-color)" , fontWeight:"200%" , fontSize:"17px"}}> */}
                     {/* <StripeCheckout
                      stripeKey="pk_test_51MKV52SJGXa2liWvLlI3JJn6y4Um6iBCKHd9bYlNzJVBDFL3NgZECaEfNxQ2ep8p0Iln0unvOO9VgMCKnxiVcyXx00kb2anHdr"
                      token={handleToken}
                      billingAddress
                      shippingAddress
                      name="Payment"
                      amount={totalAmount * 100}
                      className="shop__btn auth__btn w-100"
                      style={{backgroundColor : "white" , color:"var(--primary-color)" , fontWeight:"200%" , fontSize:"17px"}}
                     >
                     </StripeCheckout> */}
              {/* </button> */}
              <p style={{textAlign:"center" , backgroundColor:"white" , color:"var(--primary-color)" , fontSize:"15px" , fontWeight:"100px"}} className="shop__btn" onClick={()=>triggerModal()}>Cash On Delivery</p>
              </div>

              {
                showModal===true&&(
                  <Modal/>
                )
              }

            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
