import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../../styles/product-card.css";
import { Col } from "reactstrap";
import "../../styles/product-card.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/slice/cartSlice";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ProductCard = ({ item }) => {
  const appState = useSelector((state) => state);
  console.log(appState.cartSlice.cartItems);
  const mapData = appState.cartSlice.cartItems;
  // console.log(mapData[0].quantity)
  // const data  = mapData.quantity
  // console.log(data)
  // console.log(mapData , "cart quantity")
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
    // alert('PRODUCT ADDED TO THE CART')
    toast.success("Product added succesfully");
  };

  const handleDecrement = () => {
    dispatch(
      cartActions.decrementItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
    // alert('PRODUCT ADDED TO THE CART')
    toast.success("Product updated succesfully");
  };
  // console.log(item , "chair")

  
  useEffect(() => {
    const fetchProduct = async () => {
      appState.cartSlice.cartItems.map((cart, i) => {
        if (cart.id == item.id) {
          setQuantity(cart.quantity);
        }
      });
    };
    fetchProduct();
  }, [appState.cartSlice.cartItems]);

  console.log(quantity);
  const handleIncrement = (e) => {
    e.preventDefault();
    if (quantity >= parseFloat(item.quantity)) {
      // consolelog(item.quantity, "quantity");
      return;
    }
    setQuantity(quantity + 1);
  };

  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product__item">
        <div className="product__img">
          <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} />
        </div>
      </div>

      <div className="p-2 product__info">
        <h3 className="product__name">
          <Link to={`/shop/${item.id}`}>{item.productName}</Link>
        </h3>
        <span>{item.category}</span>
      </div>
      <div className="product__card-bottom d-flex align-item-center justify-content-between p-2">
        <span className="price">${item.price}</span>
        {quantity <= 0 ? (
          <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
            <motion.i
              whileTap={{ scale: 1.2 }}
              className="ri-add-line"
              style={{ cursor: "pointer" }}
            ></motion.i>
          </motion.span>
        ) : (
          <>
            <span onClick={handleDecrement}>
              <motion.i className="ri-close-fill" whileTap={{ scale: 1.2 }} style={{ cursor: "pointer" }}></motion.i>
            </span>
            {quantity}
            <span onClick={addToCart}>
              <motion.i
                whileTap={{ scale: 1.2 }}
                className="ri-add-line"
                style={{ cursor: "pointer" }}
              ></motion.i>
            </span>
          </>
        )}
      </div>
    </Col>

    //  <div class="card col-md-3">
    //     <motion.img src={item.imgUrl}   whileHover={{ scale: 0.9 }}  class="card-img-top" alt="..." style={{  height: "15vw" ,     objectFit : "cover" ,  marginTop:"40px"}}/>
    //     <div class="card-body" style={{marginTop:"20px"}}>
    //               <h5 className="product__name"><Link to={`/shop/${item.id}`}>{item.productName}</Link></h5>
    //           <span>{item.category}</span>
    //     </div>
    //     <div className="card-footer p-2 product__info">
    //     <span className="price" style={{fontWeight:"60px"}}>${item.price}</span>
    //     <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
    //          <motion.i whileTap={{ scale: 1.2 }} className="ri-add-line" style={{cursor:"pointer"}}></motion.i>
    //        </motion.span>
    //     </div>
    //   </div>
  );
};

export default ProductCard;
