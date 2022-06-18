import React from 'react';

function Footer(props) {
    return (
        <>
            <footer className="footer section text-center">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <ul className="social-media">
          <li>
            <a href="https://www.facebook.com/themefisher">
              <i className="tf-ion-social-facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/themefisher">
              <i className="tf-ion-social-instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/themefisher">
              <i className="tf-ion-social-twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/themefisher/">
              <i className="tf-ion-social-pinterest" />
            </a>
          </li>
        </ul>
        <ul className="footer-menu text-uppercase">
          <li>
            <a href="theme/contact.html">CONTACT</a>
          </li>
          <li>
            <a href="theme/shop.html">SHOP</a>
          </li>
          <li>
            <a href="theme/pricing.html">Pricing</a>
          </li>
          <li>
            <a href="theme/contact.html">PRIVACY POLICY</a>
          </li>
        </ul>
        <p className="copyright-text">Copyright ©2021, Designed &amp; Developed by <a href="https://themefisher.com/">Themefisher</a></p>
      </div>
    </div>
  </div>
</footer>

        </>
    );
}

export default Footer;