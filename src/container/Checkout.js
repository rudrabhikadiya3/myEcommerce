import React from 'react';
import { Link } from 'react-router-dom';

function Checkout(props) {
    return (

        <div>
            <section className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="content">
                                <h1 className="page-name">Checkout</h1>
                                <ol className="breadcrumb">
                                    <li><Link to='/'>Home</Link></li>
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
                                    <form className="checkout-form">
                                        <div className="form-group">
                                            <label htmlFor="full_name">Full Name</label>
                                            <input type="text" className="form-control" id="full_name" placeholder />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="user_address">Address</label>
                                            <input type="text" className="form-control" id="user_address" placeholder />
                                        </div>
                                        <div className="checkout-country-code clearfix">
                                            <div className="form-group">
                                                <label htmlFor="user_post_code">Zip Code</label>
                                                <input type="text" className="form-control" id="user_post_code" name="zipcode" defaultValue />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="user_city">City</label>
                                                <input type="text" className="form-control" id="user_city" name="city" defaultValue />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="user_country">Country</label>
                                            <input type="text" className="form-control" id="user_country" placeholder />
                                        </div>
                                    </form>
                                </div>
                                <div className="block">
                                    <h4 className="widget-title">Payment Method</h4>
                                    <p>Credit Cart Details (Secure payment)</p>
                                    <div className="checkout-product-details">
                                        <div className="payment">
                                            <div className="card-details">
                                                <form className="checkout-form">
                                                    <div className="form-group">
                                                        <label htmlFor="card-number">Card Number <span className="required">*</span></label>
                                                        <input id="card-number" className="form-control" type="tel" placeholder="•••• •••• •••• ••••" />
                                                    </div>
                                                    <div className="form-group half-width padding-right">
                                                        <label htmlFor="card-expiry">Expiry (MM/YY) <span className="required">*</span></label>
                                                        <input id="card-expiry" className="form-control" type="tel" placeholder="MM / YY" />
                                                    </div>
                                                    <div className="form-group half-width padding-left">
                                                        <label htmlFor="card-cvc">Card Code <span className="required">*</span></label>
                                                        <input id="card-cvc" className="form-control" type="tel" maxLength={4} placeholder="CVC" />
                                                    </div>
                                                    {/* <a href="confirmation.html" className="btn btn-main mt-20">Place Order</a> */}
                                                    <Link to='confirmation' className="btn btn-main mt-20">Confirmation</Link>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="product-checkout-details">
                                    <div className="block">
                                        <h4 className="widget-title">Order Summary</h4>
                                        <div className="media product-card">
                                            {/* <a className="pull-left" href="product-single.html"> */}
                                            <Link to='/product_single'>Product Details

                                                <img className="media-object" src="source/images/shop/cart/cart-1.jpg" alt="Image" />
                                            </Link>
                                            {/* </a> */}
                                            <div className="media-body">
                                                <h4 className="media-heading"> <Link to='/product_single'>Product DetailsAmbassador Heritage 1921</Link></h4>
                                                <p className="price">1 x $249</p>
                                                <span className="remove">Remove</span>
                                            </div>
                                        </div>
                                        <div className="discount-code">
                                            <p>Have a discount ? <a data-toggle="modal" data-target="#coupon-modal" href="#!">enter it here</a></p>
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
                                            <img src="source/images/shop/verified.png" />
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
                                    <input className="form-control" type="text" placeholder="Enter Coupon Code" />
                                </div>
                                <button type="submit" className="btn btn-main">Apply Coupon</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Checkout;