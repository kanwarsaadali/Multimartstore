import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";
import products from "../assets/data/products";
import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/UI/Clock";
import { fetchAdsData } from "../store/slice/getDataSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const appState = useSelector((state) => state);
  const mapData = appState.getDataReducer.adsdata;
  // console.log("mapdata", mapData);

  const callApi = async () => {
    dispatch(fetchAdsData());
    //  setDataList(fetchdata)
  };
  useEffect(() => {
    callApi();
  }, []);

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const [trendingProducts2 , setTrendingProducts2] = useState([])

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts =  mapData.filter(
      (item) => item.category === "chair"
    );
    const filteredBestSalesProducts =  mapData.filter(
      (item) => item.category === "sofa"
    );
    const filteredMobileProducts =  mapData.filter(
      (item) => item.category === "mobile"
    );
    const filteredWirelessProducts =  mapData.filter(
      (item) => item.category === "wireless"
    );
    const filteredPopularProducts =  mapData.filter(
      (item) => item.category === "watch"
    );
     const filteredTrendingProducts2 = mapData.filter(
      (item)  => item.category === "Double sofa"
     )
     

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
    setTrendingProducts2(filteredTrendingProducts2)
   }, []);
  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle" style={{ fontSize: "12px" }}>


                  
                  Trending Product in {year}
                </p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p style={{ fontSize: "12px" }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Animi, esse cumque nihil cum sed, quos quae quas minima earum
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="shop__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts} />
            </Row>
        </Container>
      </section>
      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">BestSales</h2>
            </Col>
            <ProductList data={bestSalesProducts} />
            <ProductList data={trendingProducts2}/>

          </Row>
        </Container>
      </section>
      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality ArmChair</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn   "
                style={{ marginTop: "20px" }}
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="
      new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center  mb-5">
              <h1 className="section__title">New Arrivals</h1>
            </Col>
            <ProductList data={mobileProducts} />
            <ProductList data={wirelessProducts} />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h1 className="section__title">New Arrivals</h1>
            </Col>
            <ProductList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
