import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useFormik, Form, Formik } from "formik";

function Checkout(props) {
  const [data, setData] =  useState()
  let schema = yup.object().shape({
    name: yup.string().required("Plese enter name"),
    address: yup
      .string()
      .required("Plese enter address")
      .min(20, "please enter detailed adress"),
    zip: yup
      .string()
      .length(6)
      .matches(/^[0-9]{6}/)
      .required()
      .label("zip code"),
    city: yup.string().required("Plese enter city"),
    country: yup.string().required("Plese enter country"),
  });
  const formik = useFormik({
    validationSchema: schema,
    initialValues: {
      name: "",
      address: "",
      zip: "",
      city: "",
      country: "",
    },
    onSubmit: (values) => {
      toLocalStorage(values);
      loadData();
      // alert(JSON.stringify(values, null, 2));
    },
  });

  const { handleSubmit, handleBlur, handleChange, errors, touched } = formik;

  const toLocalStorage = (values) => {
    let localdata = JSON.parse(localStorage.getItem("adrs"));

    let id = Math.floor(Math.random() * 1000);
    const data = {
      id: id,
      ...values,
    };

    if (localdata === null) {
      localStorage.setItem("adrs", JSON.stringify([data]));
    } else {
      localdata.push(data);
      localStorage.setItem("adrs", JSON.stringify(localdata));
    }
  };

  const loadData = () =>{
    let localdata = JSON.parse(localStorage.getItem("adrs"));

    if(localdata !== null){
      setData(localdata);
    }
  }
  useEffect(() =>{
    loadData();
}, []);
let inLocal = JSON.parse(localStorage.getItem("adrs"));

console.log(inLocal);


  return (
    <div>
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content">
                <h1 className="page-name">Checkout</h1>
                <ol className="breadcrumb">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li className="active">checkout</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-wrapper">
        <div className="checkout shopping">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="block billing-details">
                  <h4 className="widget-title">Billing Details</h4>
                  <Formik values={formik}>
                    <Form className="checkout-form" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="full_name">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.name && touched.name ? (
                          <span className="form-error">{errors.name}</span>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label htmlFor="user_address">Address</label>
                        <input
                          type="text"
                          className="form-control"
                          name="address"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.address && errors.address ? (
                          <span className="form-error">{errors.address}</span>
                        ) : null}
                      </div>
                      <div className="checkout-country-code clearfix">
                        <div className="form-group">
                          <label htmlFor="user_post_code">Zip Code</label>
                          <input
                            type="text"
                            className="form-control"
                            name="zip"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.zip && errors.zip ? (
                            <span className="form-error">{errors.zip}</span>
                          ) : null}
                        </div>
                        <div className="form-group">
                          <label htmlFor="user_city">City</label>
                          <input
                            type="text"
                            className="form-control"
                            name="city"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.city && errors.city ? (
                            <span className="form-error">{errors.city}</span>
                          ) : null}
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="user_country">Country</label>
                        <input
                          type="text"
                          className="form-control"
                          name="country"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.country && errors.country ? (
                          <span className="form-error">{errors.country}</span>
                        ) : null}
                      </div>
                      <button type="submit" className="btn btn-main mt-20">
                        Add Details
                      </button>
                    </Form>
                  </Formik>
                </div>
                {/*=====>   payment-method   <=====*/}
                <div className="block payment-method">
                  <h4 className="widget-title">Payment Method</h4>
                  <p>Credit Cart Details (Secure payment)</p>
                  <div className="checkout-product-details">
                    <div className="payment">
                      <div className="card-details">
                        <form className="checkout-form">
                          <div className="form-group">
                            <label htmlFor="card-number">
                              Card Number <span className="required">*</span>
                            </label>
                            <input
                              id="card-number"
                              className="form-control"
                              type="tel"
                              placeholder="•••• •••• •••• ••••"
                            />
                          </div>
                          <div className="form-group half-width padding-right">
                            <label htmlFor="card-expiry">
                              Expiry (MM/YY) <span className="required">*</span>
                            </label>
                            <input
                              id="card-expiry"
                              className="form-control"
                              type="tel"
                              placeholder="MM / YY"
                            />
                          </div>
                          <div className="form-group half-width padding-left">
                            <label htmlFor="card-cvc">
                              Card Code <span className="required">*</span>
                            </label>
                            <input
                              id="card-cvc"
                              className="form-control"
                              type="tel"
                              maxLength={4}
                              placeholder="CVC"
                            />
                          </div>
                          {/* <a href="confirmation.html" className="btn btn-main mt-20">Place Order</a> */}
                          <Link
                            to="confirmation"
                            className="btn btn-main mt-20"
                          >
                            Confirmation
                          </Link>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/*=====> addresses <=====*/}
                <div className="block ">
                  <h4 className="widget-title">Saved Adresses</h4>
                  <div className="row">
                    {
                      inLocal !== null ?
                      inLocal.map((d,i) =>{
                        return(
                          <div className="col-sm-6" key={i}>
                      <div className="card border mb-3">
                        <div className="card-body">
                          <h4 className="card-title">{d.name}</h4>
                          <p className="card-text m-0">
                            {d.address}  
                          </p>
                          <p className="card-text">
                          {d.zip} {d.city} {d.country} 
                          </p>
                          <a href="#" className="btn-small">
                            use
                          </a>
                        </div>
                      </div>
                    </div>
                        )
                      }) : <p className="col-sm-6">
                      No saved address
                      </p>
                    }
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-checkout-details">
                  <div className="block">
                    <h4 className="widget-title">Order Summary</h4>
                    <div className="media product-card">
                      <Link to="/product_single">
                        Product Details
                        <img
                          className="media-object"
                          src="source/images/shop/cart/cart-1.jpg"
                          alt="cart1"
                        />
                      </Link>
                      <div className="media-body">
                        <h4 className="media-heading">
                          <Link to="/product_single">
                            Product DetailsAmbassador Heritage 1921
                          </Link>
                        </h4>
                        <p className="price">1 x $249</p>
                        <span className="remove">Remove</span>
                      </div>
                    </div>
                    <div className="discount-code">
                      <p>
                        Have a discount ?
                        <a
                          data-toggle="modal"
                          data-target="#coupon-modal"
                          href="#!"
                        >
                          enter it here
                        </a>
                      </p>
                    </div>
                    <ul className="summary-prices">
                      <li>
                        <span>Subtotal:</span>
                        <span className="price">$190</span>
                      </li>
                      <li>
                        <span>Shipping:</span>
                        <span>Free</span>
                      </li>
                    </ul>
                    <div className="summary-total">
                      <span>Total</span>
                      <span>$250</span>
                    </div>
                    <div className="verified-icon">
                      <img
                        src="source/images/shop/verified.png"
                        alt="verified"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div className="modal fade" id="coupon-modal" tabIndex={-1} role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Coupon Code"
                  />
                </div>
                <button type="submit" className="btn btn-main">
                  Apply Coupon
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
