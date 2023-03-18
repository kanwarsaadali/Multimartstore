import React, { useEffect, useRef } from "react";
import "./header.css";
import logo from "../../assets/images/eco-logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import userIcon from "../../assets/images/user-icon.png";
import { motion } from "framer-motion";
// import tota
import { Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../config/Firebase";
import { toast } from "react-toastify";

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];
const Header = () => {
 
 const profileActionsRef =  useRef(null)
  const totalQuantity = useSelector((state) => state.cartSlice.totalQuantity);
  // console.log(totalQuantity)

  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("logged out");
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const navigate = useNavigate();
  const stickyHeadersFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeadersFunc();

    return () => window.removeEventListener("scroll", stickyHeadersFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  // console.log(menuToggle)

  const navigateToCart = () => {
    navigate("/cart");
  };

  const { currentUser } = useAuth();
  console.log(currentUser , "currentuser");

  const toggleProfileActions = () => profileActionsRef.current.classList.
  toggle("show__profileActions")



  return(
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} />
            <Link to='/home'> 
              <h1>Multimart</h1>
              </Link>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__icons">
              {/* <span className="fav__icon">
                <i className="ri-heart-line" ></i>
                <span className="badge"></span>
              </span> */}
              <span className="cart__icon" onClick={navigateToCart}>
                <i className="ri-shopping-bag-line"> </i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <div className="profile">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser.photoURL : userIcon}
                  onClick={toggleProfileActions}
         
                />
                <div className="profile__actions" ref={profileActionsRef}
                  onClick={toggleProfileActions}
                
                >
                  {currentUser ? (
                    <span onClick={logout}>Logout</span>
                  ) : (
                    <div className="d-flex align-item-center justify-content-center flex-column">
                      <Link to="signup">SignUp</Link>
                      <Link to="/login">Login</Link>
                    </div>
                  )}
                </div>
              </div>

              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
 
//  <div className="container">
//  <nav class="navbar navbar-expand-lg navbar-light bg-ligh">
//   <a class="navbar-brand" href="#">Navbar</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>

//   <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
//     <ul class="navbar-nav mr-auto mt-3 mt-lg-0">
//       <li class="nav-item active ">
//         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Link</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link disabled" href="#">Disabled</a>
//       </li>
//     </ul>
//     <form class="form-inline my-2 my-lg-0">
//       <input class="form-control mr-sm-2" type="search" placeholder="Search"/>
//       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form>
//   </div>
// </nav>
// </div>

    
 
 );
};

export default Header;
