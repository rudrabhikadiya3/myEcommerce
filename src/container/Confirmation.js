import React from 'react';
import { Link } from 'react-router-dom';

function Confirmation(props) {
    return (
        <>
            {/* Page Wrapper */}
            <section className="page-wrapper success-msg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <div className="block text-center">
                                <i className="tf-ion-android-checkmark-circle" />
                                <h2 className="text-center">Thank you! For your payment</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, sed.</p>
                                <Link to='/shop'>Continue Shopping</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{/* /.page-warpper */}

        </>
    );
}

export default Confirmation;