import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick/lib/slider';

function Home(props) {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <main>
      <Slider className="hero-slider" {...settings}>
        <div className="slider-item th-fullpage hero-area hero1">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 text-center">
                <p data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".1">PRODUCTS</p>
                <h1 data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".5">The beauty of nature <br /> is hidden in details.</h1>
                <Link data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".8" className="btn" to='/shop'>Shop Now</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-item th-fullpage hero-area hero2">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 text-left">
                <p data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".1">PRODUCTS</p>
                <h1 data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".5">The beauty of nature <br /> is hidden in details.</h1>
                <a data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".8" className="btn" href="theme/shop.html">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-item th-fullpage hero-area hero3">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 text-right">
                <p data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".1">PRODUCTS</p>
                <h1 data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".5">The beauty of nature <br /> is hidden in details.</h1>
                <a data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".8" className="btn" href="theme/shop.html">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </Slider>

      <section className="product-category section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title text-center">
                <h2>Product Category</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="category-box">
                <a href="#!">
                  <img src="./../source/images/shop/category/category-1.jpg" alt="category-1" />
                  <div className="content">
                    <h3>Clothes Sales</h3>
                    <p>Shop New Season Clothing</p>
                  </div>
                </a>
              </div>
              <div className="category-box">
                <a href="#!">
                  <img src="source/images/shop/category/category-2.jpg" alt="category-2" />
                  <div className="content">
                    <h3>Smart Casuals</h3>
                    <p>Get Wide Range Selection</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="category-box category-box-2">
                <a href="#!">
                  <img src="source/images/shop/category/category-3.jpg" alt="category-3" />
                  <div className="content">
                    <h3>Jewellery</h3>
                    <p>Special Design Comes First</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="products section bg-gray">
        <div className="container">
          <div className="row">
            <div className="title text-center">
              <h2>Trendy Products</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="product-item">
                <div className="product-thumb">
                  <span className="bage">Sale</span>
                  <img className="img-responsive" src="source/images/shop/products/product-1.jpg" alt="product-img" />
                  <div className="preview-meta">
                    <ul>
                      <li>
                        <span data-toggle="modal" data-target="#product-modal">
                          <i className="tf-ion-ios-search-strong" />
                        </span>
                      </li>
                      <li>
                        <a href="#!"><i className="tf-ion-ios-heart" /></a>
                      </li>
                      <li>
                        <a href="#!"><i className="tf-ion-android-cart" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-content">
                  <h4><a href="theme/product-single.html">Reef Boardsport</a></h4>
                  <p className="price">$200</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <div className="product-thumb">
                  <img className="img-responsive" src="source/images/shop/products/product-2.jpg" alt="product-img" />
                  <div className="preview-meta">
                    <ul>
                      <li>
                        <span data-toggle="modal" data-target="#product-modal">
                          <i className="tf-ion-ios-search-strong" />
                        </span>
                      </li>
                      <li>
                        <a href="#"><i className="tf-ion-ios-heart" /></a>
                      </li>
                      <li>
                        <a href="#!"><i className="tf-ion-android-cart" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-content">
                  <h4><a href="theme/product-single.html">Rainbow Shoes</a></h4>
                  <p className="price">$200</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <div className="product-thumb">
                  <img className="img-responsive" src="source/images/shop/products/product-3.jpg" alt="product-img" />
                  <div className="preview-meta">
                    <ul>
                      <li>
                        <span data-toggle="modal" data-target="#product-modal">
                          <i className="tf-ion-ios-search-strong" />
                        </span>
                      </li>
                      <li>
                        <a href="#"><i className="tf-ion-ios-heart" /></a>
                      </li>
                      <li>
                        <a href="#!"><i className="tf-ion-android-cart" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-content">
                  <h4><a href="theme/product-single.html">Strayhorn SP</a></h4>
                  <p className="price">$230</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <div className="product-thumb">
                  <img className="img-responsive" src="source/images/shop/products/product-4.jpg" alt="product-img" />
                  <div className="preview-meta">
                    <ul>
                      <li>
                        <span data-toggle="modal" data-target="#product-modal">
                          <i className="tf-ion-ios-search-strong" />
                        </span>
                      </li>
                      <li>
                        <a href="#"><i className="tf-ion-ios-heart" /></a>
                      </li>
                      <li>
                        <a href="#!"><i className="tf-ion-android-cart" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-content">
                  <h4><a href="theme/product-single.html">Bradley Mid</a></h4>
                  <p className="price">$200</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <div className="product-thumb">
                  <img className="img-responsive" src="source/images/shop/products/product-5.jpg" alt="product-img" />
                  <div className="preview-meta">
                    <ul>
                      <li>
                        <span data-toggle="modal" data-target="#product-modal">
                          <i className="tf-ion-ios-search-strong" />
                        </span>
                      </li>
                      <li>
                        <a href="#"><i className="tf-ion-ios-heart" /></a>
                      </li>
                      <li>
                        <a href="#!"><i className="tf-ion-android-cart" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-content">
                  <h4><a href="theme/product-single.html">Rainbow Shoes</a></h4>
                  <p className="price">$200</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <div className="product-thumb">
                  <img className="img-responsive" src="source/images/shop/products/product-6.jpg" alt="product-img" />
                  <div className="preview-meta">
                    <ul>
                      <li>
                        <span data-toggle="modal" data-target="#product-modal">
                          <i className="tf-ion-ios-search-strong" />
                        </span>
                      </li>
                      <li>
                        <a href="#"><i className="tf-ion-ios-heart" /></a>
                      </li>
                      <li>
                        <a href="#!"><i className="tf-ion-android-cart" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-content">
                  <h4><a href="theme/product-single.html">Rainbow Shoes</a></h4>
                  <p className="price">$200</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <div className="product-thumb">
                  <span className="bage">Sale</span>
                  <img className="img-responsive" src="source/images/shop/products/product-7.jpg" alt="product-img" />
                  <div className="preview-meta">
                    <ul>
                      <li>
                        <span data-toggle="modal" data-target="#product-modal">
                          <i className="tf-ion-ios-search-strong" />
                        </span>
                      </li>
                      <li>
                        <a href="#"><i className="tf-ion-ios-heart" /></a>
                      </li>
                      <li>
                        <a href="#!"><i className="tf-ion-android-cart" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-content">
                  <h4><a href="theme/product-single.html">Rainbow Shoes</a></h4>
                  <p className="price">$200</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <div className="product-thumb">
                  <img className="img-responsive" src="source/images/shop/products/product-8.jpg" alt="product-img" />
                  <div className="preview-meta">
                    <ul>
                      <li>
                        <span data-toggle="modal" data-target="#product-modal">
                          <i className="tf-ion-ios-search-strong" />
                        </span>
                      </li>
                      <li>
                        <a href="#"><i className="tf-ion-ios-heart" /></a>
                      </li>
                      <li>
                        <a href="#!"><i className="tf-ion-android-cart" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-content">
                  <h4><a href="theme/product-single.html">Rainbow Shoes</a></h4>
                  <p className="price">$200</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <div className="product-thumb">
                  <img className="img-responsive" src="source/images/shop/products/product-9.jpg" alt="product-img" />
                  <div className="preview-meta">
                    <ul>
                      <li>
                        <span data-toggle="modal" data-target="#product-modal">
                          <i className="tf-ion-ios-search-strong" />
                        </span>
                      </li>
                      <li>
                        <a href="#"><i className="tf-ion-ios-heart" /></a>
                      </li>
                      <li>
                        <a href="#!"><i className="tf-ion-android-cart" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-content">
                  <h4><a href="theme/product-single.html">Rainbow Shoes</a></h4>
                  <p className="price">$200</p>
                </div>
              </div>
            </div>
            {/* Modal */}
            <div className="modal product-modal fade" id="product-modal">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <i className="tf-ion-close" />
              </button>
              <div className="modal-dialog " role="document">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-md-8 col-sm-6 col-xs-12">
                        <div className="modal-image">
                          <img className="img-responsive" src="source/images/shop/products/modal-product.jpg" alt="product-img" />
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="product-short-details">
                          <h2 className="product-title">GM Pendant, Basalt Grey</h2>
                          <p className="product-price">$200</p>
                          <p className="product-short-description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem iusto nihil cum. Illo laborum numquam rem aut officia dicta cumque.
                          </p>
                          <a href="theme/cart.html" className="btn btn-main">Add To Cart</a>
                          <a href="theme/product-single.html" className="btn btn-transparent">View Product Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{/* /.modal */}
          </div>
        </div>
      </section>
      {/*
Start Call To Action
==================================== */}
      <section className="call-to-action bg-gray section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="title">
                <h2>SUBSCRIBE TO NEWSLETTER</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, <br /> facilis numquam impedit ut sequi. Minus facilis vitae excepturi sit laboriosam.</p>
              </div>
              <div className="col-lg-6 col-md-offset-3">
                <div className="input-group subscription-form">
                  <input type="text" className="form-control" placeholder="Enter Your Email Address" />
                  <span className="input-group-btn">
                    <button className="btn btn-main" type="button">Subscribe Now!</button>
                  </span>
                </div>{/* /input-group */}
              </div>{/* /.col-lg-6 */}
            </div>
          </div> 		{/* End row */}
        </div>   	{/* End container */}
      </section>   {/* End section */}
      <section className="section instagram-feed">
        <div className="container">
          <div className="row">
            <div className="title">
              <h2>View us on instagram</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="instagram-slider" id="instafeed" data-accesstoken="IGQVJYeUk4YWNIY1h4OWZANeS1wRHZARdjJ5QmdueXN2RFR6NF9iYUtfcGp1NmpxZA3RTbnU1MXpDNVBHTzZAMOFlxcGlkVHBKdjhqSnUybERhNWdQSE5hVmtXT013MEhOQVJJRGJBRURn" />
            </div>
          </div>
        </div>
      </section>
    </main>

  );
}

export default Home;