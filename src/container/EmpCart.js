import React from 'react';
import { Link } from 'react-router-dom';

function EmpCart(props) {
    return (
        <>
            <section className="empty-cart page-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <div className="block text-center">
                                <i className="tf-ion-ios-cart-outline" />
                                <h2 className="text-center">Your cart is currently empty.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, sed.</p>
                                <Link to='/shop'>Return to shop</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default EmpCart;