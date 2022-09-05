import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAction } from "../redux/action/auth.action";
import Notification from "./Notification";

function Header(props) {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutAction());
    handleClose()
  };
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const auth = useSelector((state) => state.auth);

  return (
    <header>
      {/* Start Top Header Bar */}
      <section className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-12 col-sm-4">
              <div className="contact-number">
                <i className="tf-ion-ios-telephone" />
                <span>0129- 12323-123123</span>
              </div>
            </div>
            <div className="col-md-4 col-xs-12 col-sm-4">
              {/* Site Logo */}
              <div className="logo text-center">
                {/* <a href="index.html"> */}
                <Link to="/">
                  {/* replace logo here */}
                  <svg
                    width="135px"
                    height="29px"
                    viewBox="0 0 155 29"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                      fontSize={40}
                      fontFamily="AustinBold, Austin"
                      fontWeight="bold"
                    >
                      <g
                        id="Group"
                        transform="translate(-108.000000, -297.000000)"
                        fill="#000000"
                      >
                        <text id="AVIATO">
                          <tspan x="108.94" y={325}>
                            AVIATO
                          </tspan>
                        </text>
                      </g>
                    </g>
                  </svg>
                </Link>
                {/* </a> */}
              </div>
            </div>
            <div className="col-md-4 col-xs-12 col-sm-4">
              {/* Cart */}
              <ul className="top-menu text-right list-inline">
                <li className="dropdown cart-nav dropdown-slide">
                  <a
                    href="#!"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                  >
                    <i className="tf-ion-android-cart" />
                    Cart
                  </a>
                  <div className="dropdown-menu cart-dropdown">
                    {/* Cart Item */}
                    <div className="media">
                      <a className="pull-left" href="#!">
                        <img
                          className="media-object"
                          src="source/images/shop/cart/cart-1.jpg"
                          alt="image"
                        />
                      </a>
                      <div className="media-body">
                        <h4 className="media-heading">
                          <a href="#!">Ladies Bag</a>
                        </h4>
                        <div className="cart-price">
                          <span>1 x</span>
                          <span>1250.00</span>
                        </div>
                        <h5>
                          <strong>$1200</strong>
                        </h5>
                      </div>
                      <a href="#!" className="remove">
                        <i className="tf-ion-close" />
                      </a>
                    </div>
                    {/* / Cart Item */}
                    {/* Cart Item */}
                    <div className="media">
                      <a className="pull-left" href="#!">
                        <img
                          className="media-object"
                          src="source/images/shop/cart/cart-2.jpg"
                          alt="image"
                        />
                      </a>
                      <div className="media-body">
                        <h4 className="media-heading">
                          <a href="#!">Ladies Bag</a>
                        </h4>
                        <div className="cart-price">
                          <span>1 x</span>
                          <span>1250.00</span>
                        </div>
                        <h5>
                          <strong>$1200</strong>
                        </h5>
                      </div>
                      <a href="#!" className="remove">
                        <i className="tf-ion-close" />
                      </a>
                    </div>
                    {/* / Cart Item */}
                    <div className="cart-summary">
                      <span>Total</span>
                      <span className="total-price">$1799.00</span>
                    </div>
                    <ul className="text-center cart-buttons">
                      <li>
                        {/* <a href="theme/cart.html" className="btn btn-small">View Cart</a> */}
                        <Link to="/cart" className="btn btn-small">
                          Cart
                        </Link>
                      </li>
                      <li>
                        {/* <a href="theme/checkout.html" className="btn btn-small btn-solid-border">Checkout</a> */}
                        <Link
                          to="/checkout"
                          className="btn btn-small btn-solid-border"
                        >
                          Checkout
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* / Cart */}
                {/* Search */}
                <li className="dropdown search dropdown-slide">
                  <a
                    href="#!"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                  >
                    <i className="tf-ion-ios-search-strong" /> Search
                  </a>
                  <ul className="dropdown-menu search-dropdown">
                    <li>
                      <form action="post">
                        <input
                          type="search"
                          className="form-control"
                          placeholder="Search..."
                        />
                      </form>
                    </li>
                  </ul>
                </li>
                {/* / Search */}
                {/* Languages */}
                <li className="commonSelect">
                  <select className="form-control">
                    <option>EN</option>
                    <option>DE</option>
                    <option>FR</option>
                    <option>ES</option>
                  </select>
                </li>
                {auth.data === null ? (
                  <Link
                    to="/login"
                    className="btn btn-main btn-small ms-5 login-btn"
                    onClick={handleLogout}
                  >
                    Log In
                  </Link>
                ) : (
                  <button
                    className="btn btn-main btn-small ms-5 login-btn"
                    // onClick={handleLogout}
                    onClick={handleClickOpen}
                  >
                    Log Out
                  </button>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* End Top Header Bar */}
      {/* Main Menu Section */}
      <section className="menu">
        <nav className="navbar navigation">
          <div className="container">
            <div className="navbar-header">
              <h2 className="menu-title">Main Menu</h2>
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>
            {/* / .navbar-header */}
            {/* Navbar Links */}
            <div id="navbar" className="navbar-collapse collapse text-center">
              <ul className="nav navbar-nav">
                {/* Home */}
                <li className="dropdown ">
                  {/* <a href="index.html">Home</a> */}
                  <Link to="/">Home</Link>
                </li>
                {/* / Home */}
                {/* Elements */}
                <li className="dropdown dropdown-slide">
                  <a
                    href="#!"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    data-delay={350}
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Shop <span className="tf-ion-ios-arrow-down" />
                  </a>
                  <div className="dropdown-menu">
                    <div className="row">
                      {/* Basic */}
                      <div className="col-lg-6 col-md-6 mb-sm-3">
                        <ul>
                          <li className="dropdown-header">Pages</li>
                          <li role="separator" className="divider" />
                          <li>
                            {/* <a href="theme/shop.html">Shop</a> */}
                            <Link to="/shop">Shop</Link>
                          </li>
                          <li>
                            {/* <a href="theme/checkout.html">Checkout</a> */}
                            <Link to="/checkout">Checkout</Link>
                          </li>
                          <li>
                            {/* <a href="theme/cart.html">Cart</a> */}
                            <Link to="/cart">Cart</Link>
                          </li>
                          <li>
                            {/* <a href="theme/pricing.html">Pricing</a> */}
                            <Link to="/pricing">Pricing</Link>
                          </li>
                          <li>
                            {/* <a href="theme/confirmation.html">Confirmation</a> */}
                            <Link to="confirmation">Confirmation</Link>
                          </li>
                        </ul>
                      </div>
                      {/* Layout */}
                      <div className="col-lg-6 col-md-6 mb-sm-3">
                        <ul>
                          <li className="dropdown-header">Layout</li>
                          <li role="separator" className="divider" />
                          <li>
                            {/* <a href="theme/product-single.html">Product Details</a> */}
                            <Link to="/product_single">Product Details</Link>
                          </li>
                          <li>
                            {/* <a href="theme/shop-sidebar.html">Shop With Sidebar</a> */}
                            <Link to="/ShopSide">Shop With Sidebar</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* / .row */}
                  </div>
                  {/* / .dropdown-menu */}
                </li>
                {/* / Elements */}
                {/* Pages */}
                <li className="dropdown full-width dropdown-slide">
                  <a
                    href="#!"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    data-delay={350}
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages <span className="tf-ion-ios-arrow-down" />
                  </a>
                  <div className="dropdown-menu">
                    <div className="row">
                      {/* Introduction */}
                      <div className="col-sm-3 col-xs-12">
                        <ul>
                          <li className="dropdown-header">Introduction</li>
                          <li role="separator" className="divider" />
                          <li>
                            {/* <a href="theme/contact.html">Contact Us</a> */}
                            <Link to="/contact">Contact Us</Link>
                          </li>
                          <li>
                            {/* <a href="theme/about.html">About Us</a> */}
                            <Link to="/about">About us</Link>
                          </li>
                          <li>
                            {/* <a href="theme/404.html">404 Page</a> */}
                            <Link to="/404">404 Page</Link>
                          </li>
                          <li>
                            {/* <a href="theme/faq.html">FAQ</a> */}
                            <Link to="/FAQ">FAQ</Link>
                          </li>
                        </ul>
                      </div>
                      {/* Contact */}
                      <div className="col-sm-3 col-xs-12">
                        <ul>
                          <li className="dropdown-header">Dashboard</li>
                          <li role="separator" className="divider" />
                          <li>
                            {/* <a href="theme/dashboard.html">User Interface</a> */}
                            <Link to="/dashboard">User Interface</Link>
                          </li>
                          <li>
                            {/* <a href="theme/order.html">Orders</a> */}
                            <Link to="/order">Orders</Link>
                          </li>
                          <li>
                            {/* <a href="theme/address.html">Address</a> */}
                            <Link to="/address">Address</Link>
                          </li>
                          <li>
                            {/* <a href="theme/profile-details.html">Profile Details</a> */}
                            <Link to="/profile">Profile Details</Link>
                          </li>
                        </ul>
                      </div>
                      {/* Utility */}
                      <div className="col-sm-3 col-xs-12">
                        <ul>
                          <li className="dropdown-header">Utility</li>
                          <li role="separator" className="divider" />
                          <li>
                            {/* <a href="theme/login.html">Login Page</a> */}
                            <Link to="/login">Login</Link>
                          </li>
                        </ul>
                      </div>
                      {/* Mega Menu */}
                      <div className="col-sm-3 col-xs-12">
                        <a href="theme/shop.html">
                          <img
                            className="img-responsive"
                            src="source/images/shop/header-img.jpg"
                            alt="menu image"
                          />
                        </a>
                      </div>
                    </div>
                    {/* / .row */}
                  </div>
                  {/* / .dropdown-menu */}
                </li>
                {/* / Pages */}
                {/* Blog */}
                <li className="dropdown dropdown-slide">
                  {/* <a href="theme/blog-right-sidebar.html">Blog </a> */}
                  <Link to="/blog">Blog</Link>
                  {/* <ul class="dropdown-menu">
								<li><a href="theme/blog-left-sidebar.html">Blog Left Sidebar</a></li>
								<li><a href="theme/blog-right-sidebar.html">Blog Right Sidebar</a></li>
								<li><a href="theme/blog-full-width.html">Blog Full Width</a></li>
								<li><a href="theme/blog-grid.html">Blog 2 Columns</a></li>
								<li><a href="theme/blog-single.html">Blog Single</a></li>
							</ul> */}
                </li>

                <li className="dropdown dropdown-slide">
                  <a
                    href="#!"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    data-delay={350}
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Elements <span className="tf-ion-ios-arrow-down" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="theme/typography.html">Typography</a>
                    </li>
                    <li>
                      <a href="theme/buttons.html">Buttons</a>
                    </li>
                    <li>
                      <Link to="/alerts">Alerts</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      {/* logout dialogue / popup */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" fontSize={22}>
          {"Are you sure want to logout?"}
        </DialogTitle>
        <DialogActions> 
          <Button style={{ fontSize: "14px" }}  onClick={handleClose}>cancel</Button>
          <Button style={{ fontSize: "14px" }} onClick={handleLogout} autoFocus>
            confirm
          </Button>
        </DialogActions>
      </Dialog>
              <Notification/>
    </header>
  );
}

export default Header;
