import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

function ProductSingle(props) {
  const [quantity, setQuantity] = useState(1) 
  const productData = useSelector((state) => state.products.products);
  const history = useHistory();
  

  const id = history.location.state;
  const singleProduct = productData.filter((p, i) => p.id === id);
  console.log(...singleProduct);
  return (
    <>
    
      <section className="single-product">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ol className="breadcrumb">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="shopside">Shop</Link>
                </li>
                <li className="active">Single Product</li>
              </ol>
            </div>
          </div>
          <div className="row mt-20 d-flex">
            <div className="col-5">
              <div className="img-box">
              <img
                // src="source/images/shop/single-products/product-1.jpg"
                // src="https://firebasestorage.googleapis.com/v0/b/aviato-ecom.appspot.com/o/products%2F22026?alt=media&token=c9a81d13-accc-4b16-94e0-9b6178ea7640"
                src={singleProduct[0].img}
                alt="pImage"
              />
              </div>
            </div>
            <div className="ps-5 col-7">
              <div className="single-product-details">
                <h4 className="single_brnad_name">{singleProduct[0].brand}'s</h4>
                <h2 className="single_title">{singleProduct[0].pname}</h2>
                <span className="product-price">₹{singleProduct[0].sprice}</span> <span className="mrp">₹{singleProduct[0].mrp}</span>
                <p className="product-description mt-20">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum ipsum dicta quod, quia doloremque aut deserunt commodi
                  quis. Totam a consequatur beatae nostrum, earum consequuntur?
                  Eveniet consequatur ipsum dicta recusandae.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nesciunt, velit, sunt temporibus, nulla accusamus similique
                  sapiente tempora, at atque cumque assumenda minus asperiores
                  est esse sequi dolore magnam. Debitis, explicabo.
                </p>
                {/* <div className="color-swatches">
                  <span>color:</span>
                  <ul>
                    <li>
                      <a href="#!" className="swatch-violet" />
                    </li>
                    <li>
                      <a href="#!" className="swatch-black" />
                    </li>
                    <li>
                      <a href="#!" className="swatch-cream" />
                    </li>
                  </ul>
                </div> */}
                <div className="product-size">
                  <span>Size:</span>
                  <select className="form-control">
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                </div>
                <div className="product-quantity">
                  <span>Quantity:</span>
                  <button className="btn btn-main btn-small count-btn" onClick={()=>setQuantity(quantity - 1)}>-</button>
                  <div className="product-quantity-slider">
                    <span>{quantity}</span>
                  </div>
                  <button className="btn btn-main btn-small count-btn" onClick={()=>setQuantity(quantity + 1)}>+</button>
                </div>
                {/* <div className="product-category">
                  <span>Categories:</span>
                  <ul>
                    <li>
                      <a href="product-single.html">Products</a>
                    </li>
                    <li>
                      <a href="product-single.html">Soap</a>
                    </li>
                  </ul>
                </div> */}
                <Link to="/cart" className="btn btn-main mt-20">
                  Add To Cart
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div className="tabCommon mt-20">
                <ul className="nav nav-tabs">
                  <li className="active">
                    <a data-toggle="tab" href="#details" aria-expanded="true">
                      Details
                    </a>
                  </li>
                  <li className>
                    <a data-toggle="tab" href="#reviews" aria-expanded="false">
                      Reviews (3)
                    </a>
                  </li>
                </ul>
                <div className="tab-content patternbg">
                  <div id="details" className="tab-pane fade active in">
                    <h4>Product Description</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Sed ut per
                      spici
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Veritatis delectus quidem repudiandae veniam distinctio
                      repellendus magni pariatur molestiae asperiores animi, eos
                      quod iusto hic doloremque iste a, nisi iure at unde
                      molestias enim fugit, nulla voluptatibus. Deserunt
                      voluptate tempora aut illum harum, deleniti laborum animi
                      neque, praesentium explicabo, debitis ipsa?
                    </p>
                  </div>
                  <div id="reviews" className="tab-pane fade">
                    <div className="post-comments">
                      <ul className="media-list comments-list m-bot-50 clearlist">
                        <li className="media">
                          <a className="pull-left" href="#!">
                            <img
                              className="media-object comment-avatar"
                              src="source/images/blog/avater-1.jpg"
                              width={50}
                              height={50}
                              alt='sdf'
                            />
                          </a>
                          <div className="media-body">
                            <div className="comment-info">
                              <h4 className="comment-author">
                                <a href="#!">Jonathon Andrew</a>
                              </h4>
                              <time dateTime="2013-04-06T13:53">
                                July 02, 2015, at 11:34
                              </time>
                              <a className="comment-button" href="#!">
                                <i className="tf-ion-chatbubbles" />
                                Reply
                              </a>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Quisque at magna ut ante eleifend
                              eleifend.Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Quod laborum minima,
                              reprehenderit laboriosam officiis praesentium?
                              Impedit minus provident assumenda quae.
                            </p>
                          </div>
                        </li>
                        <li className="media">
                          <a className="pull-left" href="#!">
                            <img
                              className="media-object comment-avatar"
                              src="source/images/blog/avater-4.jpg"
                              width={50}
                              height={50}
                              alt='avt'
                            />
                          </a>
                          <div className="media-body">
                            <div className="comment-info">
                              <div className="comment-author">
                                <a href="#!">Jonathon Andrew</a>
                              </div>
                              <time dateTime="2013-04-06T13:53">
                                July 02, 2015, at 11:34
                              </time>
                              <a className="comment-button" href="#!">
                                <i className="tf-ion-chatbubbles" />
                                Reply
                              </a>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Quisque at magna ut ante eleifend eleifend.
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Magni natus, nostrum iste non
                              delectus atque ab a accusantium optio, dolor!
                            </p>
                          </div>
                        </li>
                        <li className="media">
                          <a className="pull-left" href="#!">
                            <img
                              className="media-object comment-avatar"
                              src="source/images/blog/avater-1.jpg"
                              width={50}
                              height={50}
                              alt="asd"
                            />
                          </a>
                          <div className="media-body">
                            <div className="comment-info">
                              <div className="comment-author">
                                <a href="#!">Jonathon Andrew</a>
                              </div>
                              <time dateTime="2013-04-06T13:53">
                                July 02, 2015, at 11:34
                              </time>
                              <a className="comment-button" href="#!">
                                <i className="tf-ion-chatbubbles" />
                                Reply
                              </a>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Quisque at magna ut ante eleifend eleifend.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <div className="modal product-modal fade" id="product-modal">
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <i className="tf-ion-close" />
        </button>
        <div className="modal-dialog " role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="row">
                <div className="col-md-8">
                  <div className="modal-image">
                    <img
                      className="img-responsive"
                      src="source/images/shop/products/modal-product.jpg"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="product-short-details">
                    <h2 className="product-title">GM Pendant, Basalt Grey</h2>
                    <p className="product-price">$200</p>
                    <p className="product-short-description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Rem iusto nihil cum. Illo laborum numquam rem aut officia
                      dicta cumque.
                    </p>
                    <a href="#!" className="btn btn-main">
                      Add To Cart
                    </a>
                    <a href="#!" className="btn btn-transparent">
                      View Product Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSingle;
