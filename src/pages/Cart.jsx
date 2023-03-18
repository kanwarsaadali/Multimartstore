import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import tdImg from "../assets/images/arm-chair-01.jpg";
import { motion } from "framer-motion";
import cartActions from "../store/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartSlice.cartItems);
  console.log(cartItems, "cartItems");
  const totalAmount = useSelector((state) => state.cartSlice.totalAmount);
  const dispatch = useDispatch();

  const removeAll = () =>{
    dispatch(cartActions.deleteAll())
  }

  // const deleteProduct = ()=>{
  //   dispatch(cartActions.deleteItem(item.id))
  // }
  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />

      <section>
        <Row>
          <Col lg="9">
            {cartItems.length === 0 ? (
              <h2>No item added to the cart</h2>
            ) : (
              <table className="table bordered">
                <thead>
                  <tr style={{ textAlign: "center" }}>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    {/* <th>Delete</th> */}
                  </tr>
                </thead>

                <tbody>
                  {cartItems.map((item, index) =>( 
                   <Tr item={item}/>
                 ) )}
                </tbody>
                  <th style={{cursor:"pointer"}} onClick={removeAll}>Clear All</th>

              </table>
            )}
          </Col>
          <Col lg="3">
            <div>
              <h6 className="d-flex align-items-center justify-content-between">
                Subtotal
                <span className="fs-4 fw-bold" style={{ marginRight: "40px" }}>
                  ${totalAmount}
                </span>
              </h6>{" "}
            </div>
            <p className="fs-6 mt-2">
              taxes and shipping will calculate in checkout
            </p>
            <div>
              <button className="shop__btn w-100 ">
                <Link to="/checkout">Checkout</Link>
              </button>
            </div>
            <button className="shop__btn w-100 mt-2">
              <Link to="/shop">Continue Shopping</Link>
            </button>
          </Col>
        </Row>
      </section>
    </Helmet>
  );
};



const Tr = ({item}) =>{

  // const dispatch = useDispatch()
  // const deleteProduct = (cartItem) =>{
  //   dispatch( cartActions.deleteItem(cartItem))
  // }

return    <tr style={{textAlign:"center"}}>
  <td>
    <img src={item.imgUrl} />
  </td>
  <td>{item.productName}</td>
  <td>${item.totalPrice}</td>
  <td>{item.quantity}</td>
  <td >
    {/* <motion.i
    onClick={deleteProduct(item)}
      whileTap={{ scale: 1.2 }}
      className="ri-delete-bin-line"
    ></motion.i> */}
  </td>
</tr>

}
export default Cart;
