import React from 'react';

function Pricing(props) {
    return (
        <>
            <div>
                <section className="page-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="content">
                                    <h1 className="page-name">Pricing Table</h1>
                                    <ol className="breadcrumb">
                                        <li><a href="../index.html">Home</a></li>
                                        <li className="active">pricing</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pricing-table">
                    <div className="container">
                        <div className="row">
                            {/* single pricing table */}
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="pricing-item">
                                    {/* plan name & value */}
                                    <div className="price-title">
                                        <h3>Basic</h3>
                                        <strong className="value">$99</strong>
                                        <p>Perfect for single freelancers who work by themselves</p>
                                    </div>
                                    {/* /plan name & value */}
                                    {/* plan description */}
                                    <ul>
                                        <li><i className="tf-ios-arrow-forward" /> 1GB Disk Space</li>
                                        <li><i className="tf-ios-arrow-forward" /> 10 Email Account</li>
                                        <li><i className="tf-ios-arrow-forward" /> Script Installer</li>
                                        <li><i className="tf-ios-arrow-forward" /> 1 GB Storage</li>
                                        <li><i className="tf-ios-arrow-forward" /> 10 GB Bandwidth</li>
                                        <li><i className="tf-ios-arrow-forward" /> 24/7 Tech Support</li>
                                    </ul>
                                    {/* /plan description */}
                                    {/* signup button */}
                                    <a className="btn btn-main" href="signin.html">Signup</a>
                                    {/* /signup button */}
                                </div>
                            </div>
                            {/* end single pricing table */}
                            {/* single pricing table */}
                            <div className="col-md-4 col-sm-6 col-xs-12  ">
                                <div className="pricing-item">
                                    {/* plan name & value */}
                                    <div className="price-title">
                                        <h3>Basic</h3>
                                        <strong className="value">$99</strong>
                                        <p>Suitable for small businesses with up to 5 employees</p>
                                    </div>
                                    {/* /plan name & value */}
                                    {/* plan description */}
                                    <ul>
                                        <li><i className="tf-ios-arrow-forward" /> 1GB Disk Space</li>
                                        <li><i className="tf-ios-arrow-forward" /> 10 Email Account</li>
                                        <li><i className="tf-ios-arrow-forward" /> Script Installer</li>
                                        <li><i className="tf-ios-arrow-forward" /> 1 GB Storage</li>
                                        <li><i className="tf-ios-arrow-forward" /> 10 GB Bandwidth</li>
                                        <li><i className="tf-ios-arrow-forward" /> 24/7 Tech Support</li>
                                    </ul>
                                    {/* /plan description */}
                                    {/* signup button */}
                                    <a className="btn btn-main" href="signin.html">Signup</a>
                                    {/* /signup button */}
                                </div>
                            </div>
                            {/* end single pricing table */}
                            {/* single pricing table */}
                            <div className="col-md-4 col-sm-6 col-xs-12 ">
                                <div className="pricing-item">
                                    {/* plan name & value */}
                                    <div className="price-title">
                                        <h3>Basic</h3>
                                        <strong className="value">$99</strong>
                                        <p>Great for large businesses with more than 5 employees</p>
                                    </div>
                                    {/* /plan name & value */}
                                    {/* plan description */}
                                    <ul>
                                        <li><i className="tf-ios-arrow-forward" /> 1GB Disk Space</li>
                                        <li><i className="tf-ios-arrow-forward" /> 10 Email Account</li>
                                        <li><i className="tf-ios-arrow-forward" /> Script Installer</li>
                                        <li><i className="tf-ios-arrow-forward" /> 1 GB Storage</li>
                                        <li><i className="tf-ios-arrow-forward" /> 10 GB Bandwidth</li>
                                        <li><i className="tf-ios-arrow-forward" /> 24/7 Tech Support</li>
                                    </ul>
                                    {/* /plan description */}
                                    {/* signup button */}
                                    <a className="btn btn-main" href="signin.html">Signup</a>
                                    {/* /signup button */}
                                </div>
                            </div>
                            {/* end single pricing table */}
                        </div>       {/* End row */}
                    </div>   	{/* End container */}
                </section>   {/* End section */}
            </div>

        </>
    );
}

export default Pricing;