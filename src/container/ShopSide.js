import { CircularProgress } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { readProductsAction } from "../redux/action/products.action";

function ShopSide(props) {
  const dispatch = useDispatch();
  const history = useHistory()

  useEffect(() => {
    dispatch(readProductsAction());
  }, []);

  const productData = useSelector((state) => state.products.products);
  
  const handlePush = (id) =>{
    history.push(`/product_single`, id)
  }
  return (
    <>
      <div>
        <section className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="content">
                  <h1 className="page-name">Shop</h1>
                  <ol className="breadcrumb">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li className="active">shop</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="products section">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="widget">
                  <h4 className="widget-title">Short By</h4>
                  <form method="post" action="#">
                    <select className="form-control">
                      <option>Man</option>
                      <option>Women</option>
                      <option>Accessories</option>
                      <option>Shoes</option>
                    </select>
                  </form>
                </div>
                <div className="widget product-category">
                  <h4 className="widget-title">Categories</h4>
                  <div
                    className="panel-group commonAccordion"
                    id="accordion"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingOne">
                        <h4 className="panel-title">
                          <a
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Shoes
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseOne"
                        className="panel-collapse collapse in"
                        role="tabpanel"
                        aria-labelledby="headingOne"
                      >
                        <div className="panel-body">
                          <ul>
                            <li>
                              <a href="#!">Brand &amp; Twist</a>
                            </li>
                            <li>
                              <a href="#!">Shoe Color</a>
                            </li>
                            <li>
                              <a href="#!">Shoe Color</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingTwo">
                        <h4 className="panel-title">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Duty Wear
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseTwo"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingTwo"
                      >
                        <div className="panel-body">
                          <ul>
                            <li>
                              <a href="#!">Brand &amp; Twist</a>
                            </li>
                            <li>
                              <a href="#!">Shoe Color</a>
                            </li>
                            <li>
                              <a href="#!">Shoe Color</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div
                        className="panel-heading"
                        role="tab"
                        id="headingThree"
                      >
                        <h4 className="panel-title">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            WorkOut Shoes
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseThree"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingThree"
                      >
                        <div className="panel-body">
                          <ul>
                            <li>
                              <a href="#!">Brand &amp; Twist</a>
                            </li>
                            <li>
                              <a href="#!">Shoe Color</a>
                            </li>
                            <li>
                              <a href="#!">Gladian Shoes</a>
                            </li>
                            <li>
                              <a href="#!">Swis Shoes</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="row d-flex flex-wrap">
                {productData.length === 0 ? <CircularProgress className="d-block mx-auto"/> : productData.map((p, i) => {
                    return (
                      <div className="col-4" key={i}>
                        <div className="product-item">
                          <div className="product-thumb">
                            <img
                              className="img-responsive"
                              src={p.img}
                              alt="product-img"
                            />
                            <div className="preview-meta">
                              <ul>
                                <li>
                                  <span
                                    data-toggle="modal"
                                    data-target="#product-modal"
                                  >
                                    <i className="tf-ion-ios-search-strong" />
                                  </span>
                                </li>
                                <li>
                                  <a href="#!">
                                    <i className="tf-ion-ios-heart" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#!">
                                    <i className="tf-ion-android-cart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <h4>
                              <a onClick={()=>handlePush(p.id)}>{p.pname}</a>
                            </h4>
                            <p className="price">₹{p.sprice}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  
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
                            <div className="col-md-8 col-sm-6 col-xs-12">
                              <div className="modal-image">
                                <img
                                  className="img-responsive"
                                  src="source/images/shop/products/modal-product.jpg"
                                  alt="product-img"
                                />
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                              <div className="product-short-details">
                                <h2 className="product-title">
                                  GM Pendant, Basalt Grey
                                </h2>
                                <p className="product-price">$200</p>
                                <p className="product-short-description">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Rem iusto nihil cum. Illo
                                  laborum numquam rem aut officia dicta cumque.
                                </p>
                                <a href="cart.html" className="btn btn-main">
                                  Add To Cart
                                </a>
                                <a
                                  href="product-single.html"
                                  className="btn btn-transparent"
                                >
                                  View Product Details
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ShopSide;
