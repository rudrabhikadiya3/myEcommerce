import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readProductsAction } from "../redux/action/products.action";

function Shop(props) {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.products.products);
  const [search, setSearch] = useState(productData);
  
  const handleSearch = (val) => {
    let searchData = productData.filter((p) =>
    p.kwords.toLowerCase().includes(val.toLowerCase())
    );
    setSearch(searchData);
  };

  useEffect(() => {
    dispatch(readProductsAction());
  }, []);

  const renderData = search.length > 0 ? search : productData;
  console.log(search);
  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content">
                <h1 className="page-name">Shop</h1>
                <ol className="breadcrumb">
                  <li>
                    <a href="../index.html">Home</a>
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
            <input
              type="search"
              className="form-control mb-5"
              placeholder="Search..."
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
            />
            {productData.length === 0 ? <p>Loading...</p> : null}
            {/* {search.length = 0 ? <p>No result ...</p> : null} */}

            {
            renderData.map((p, i) => {
              return (
                <div className="col-md-3" key={i}>
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
                        <a href="product-single.html">{p.pname}</a>
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Rem iusto nihil cum. Illo laborum numquam rem
                            aut officia dicta cumque.
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
      </section>
    </>
  );
}

export default Shop;
