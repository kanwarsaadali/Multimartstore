import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { useSelector } from "react-redux";
import "../styles/product-Details.css";
import { motion } from "framer-motion";
import ProductList from "../components/UI/ProductList";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/slice/cartSlice";
import{ toast} from "react-toastify"

const ProductDetails = () => {
  const State = useSelector((state) => state);
  const Data = State.getDataReducer.adsdata;
  console.log(Data, " mera Data");
  const { id } = useParams();
  const product = Data.find((item) => item.id == id);

 const dispatch = useDispatch()

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    review,
    description,
    shortDesc,
    category,
  } = product;
  // console.log(produc)
  console.log(imgUrl);

  const relatedProducts = Data.filter((item) => item.category === category);

const addToCart = () =>{
  dispatch(cartActions.addItem({
    id,
    image: imgUrl,
    productName,
    price
  })
  )
  toast.success("Product added successfully")
}
 
useEffect(()=>{
 window.scrollTo(0,0)
},[product])

return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className="pt0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} />
            </Col>
            <Col lg="6">
              <div className="product_-details">
                <h2>{productName}</h2>
                <div className="product__rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-half-fill"></i>
                    </span>
                  </div>
                  <p>
                    ( <span> 4.5 </span>ratings)
                  </p>
                </div>
                <div className="d-flex align-items-center gap-5">
                  <span className="prduct-price">${price}</span>
                  <span>Category : {category}</span>
                </div>
                <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis maiores est quia aperiam commodi </p>
                <motion.button whileTap={{ scale: 1.2 }} className="shop__btn" onClick={addToCart}>
                  Add to cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tap_-wrapper d-flex align-items-center gap-5">
                <h6>Description</h6>
                <h6>Reviews</h6>
              </div>
              <div className="tab_-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tenetur impedit dignissimos explicabo iste unde dolore rerum suscipit sapiente recusandae exercitationem, esse cupiditate fugit? Earum distinctio dignissimos reprehenderit unde aperiam!</p>
              </div>
            </Col>
            <Col lg="12" className="mt-2">
              <h2 className="related__title">You might also like</h2>
            </Col>
            <ProductList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
