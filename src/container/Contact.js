import React from 'react';
import { Link } from 'react-router-dom';

function Contact(props) {
    return (
        <>
        <section className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="content">
                            <h1 className="page-name">Contact Us</h1>
                            <ol className="breadcrumb">
                                <li> <Link to='/'>Home</Link></li>
                                <li className="active">contact</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="page-wrapper">
            <div className="contact-section">
                <div className="container">
                    <div className="row">
                        {/* Contact Form */}
                        <div className="contact-form col-md-6 ">
                            <form id="contact-form" method="post" action role="form">
                                <div className="form-group">
                                    <input type="text" placeholder="Your Name" className="form-control" name="name" id="name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Your Email" className="form-control" name="email" id="email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Subject" className="form-control" name="subject" id="subject" />
                                </div>
                                <div className="form-group">
                                    <textarea rows={6} placeholder="Message" className="form-control" name="message" id="message" defaultValue={""} />
                                </div>
                                <div id="mail-success" className="success">
                                    Thank you. The Mailman is on His Way :)
                                </div>
                                <div id="mail-fail" className="error">
                                    Sorry, don't know what happened. Try later :(
                                </div>
                                <div id="cf-submit">
                                    <input type="submit" id="contact-submit" className="btn btn-transparent" defaultValue="Submit" />
                                </div>
                            </form>
                        </div>
                        {/* ./End Contact Form */}
                        {/* Contact Details */}
                        <div className="contact-details col-md-6 ">
                            <div className="google-map">
                                <div id="map" />
                            </div>
                            <ul className="contact-short-info">
                                <li>
                                    <i className="tf-ion-ios-home" />
                                    <span>Khaja Road, Bayzid, Chittagong, Bangladesh</span>
                                </li>
                                <li>
                                    <i className="tf-ion-android-phone-portrait" />
                                    <span>Phone: +880-31-000-000</span>
                                </li>
                                <li>
                                    <i className="tf-ion-android-globe" />
                                    <span>Fax: +880-31-000-000</span>
                                </li>
                                <li>
                                    <i className="tf-ion-android-mail" />
                                    <span>Email: hello@example.com</span>
                                </li>
                            </ul>
                            {/* Footer Social Links */}
                            <div className="social-icon">
                                <ul>
                                    <li><a className="fb-icon" href="https://www.facebook.com/themefisher"><i className="tf-ion-social-facebook" /></a></li>
                                    <li><a href="https://www.twitter.com/themefisher"><i className="tf-ion-social-twitter" /></a></li>
                                    <li><a href="https://themefisher.com/"><i className="tf-ion-social-dribbble-outline" /></a></li>
                                    <li><a href="https://themefisher.com/"><i className="tf-ion-social-googleplus-outline" /></a></li>
                                    <li><a href="https://themefisher.com/"><i className="tf-ion-social-pinterest-outline" /></a></li>
                                </ul>
                            </div>
                            {/*/. End Footer Social Links */}
                        </div>
                        {/* / End Contact Details */}
                    </div> {/* end row */}
                </div> {/* end container */}
            </div>
        </section>

        </>
    );
}

export default Contact;