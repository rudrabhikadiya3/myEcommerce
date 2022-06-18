import React from 'react';
import { Link } from 'react-router-dom';

function FourzFour(props) {
    return (
        <>
            <section className="page-404">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <Link to='/'>Home</Link>
                                <img src="source/images/logo.png" alt="site logo" />
                                
                            <h1>404</h1>
                            <h2>Page Not Found</h2>
                            <Link to="/" className="btn btn-main"><i className="tf-ion-android-arrow-back" /> Go Home</Link>
                            <p className="copyright-text">© 2018 Themefisher All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default FourzFour;