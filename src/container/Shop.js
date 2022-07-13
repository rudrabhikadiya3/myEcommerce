import React, { useState } from "react";

function Shop(props) {

    const productData = [
        {
            name: 'reef Boardsport',
            price: 150,
            imgSrc: 'source/images/shop/products/product-1.jpg'
        },
        {
            name: 'Rainbow Shoes',
            price: 99,
            imgSrc: 'source/images/shop/products/product-2.jpg'
        },
        {
            name: 'Stryhorn SP',
            price: 120,
            imgSrc: 'source/images/shop/products/product-3.jpg'
        },
        {
            name: 'bradley mid',
            price: 100,
            imgSrc: 'source/images/shop/products/product-4.jpg'
        },
        {
            name: 'Rainbow Shoes',
            price: 120,
            imgSrc: 'source/images/shop/products/product-5.jpg'
        },
        {
            name: 'Men Shirt',
            price: 220,
            imgSrc: 'source/images/shop/products/product-6.jpg'
        },
        {
            name: 'Women Shirt',
            price: 450,
            imgSrc: 'source/images/shop/products/product-7.jpg'
        },
        {
            name: 'Women Saree',
            price: 200,
            imgSrc: 'source/images/shop/products/product-8.jpg'
            
        },
        {
            name: 'Purse',
            price: 50,
            imgSrc: 'source/images/shop/products/product-9.jpg'
        },
        {
            name: 'wallet',
            price: 60,
            imgSrc: 'source/images/shop/products/product-10.jpg'
        },
        {
            name: 'Women Galsses',
            price: 30,
            imgSrc: 'source/images/shop/products/product-11.jpg'
        },
    ]
    const [data, setData] = useState(productData)


    const handleSearch = (val) => {
        let searchData = productData.filter((d)=>(
            d.name.toLowerCase().includes(val.toLowerCase()) ||
            d.price.toString().includes(val)
        ))
        setData(searchData);
    }
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
         <input type="search" className="form-control mb-5" placeholder="Search..." onChange={(e)=>{handleSearch(e.target.value)}}/>
            {
                data.map((d,i)=>{
                    return(
                        <div className="col-md-3" key={i}>
                        <div className="product-item">
                          <div className="product-thumb">
                            <img
                              className="img-responsive"
                              src={d.imgSrc}
                              alt="product-img"
                            />
                            <div className="preview-meta">
                              <ul>
                                <li>
                                  <span data-toggle="modal" data-target="#product-modal">
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
                              <a href="product-single.html">{d.name}</a>
                            </h4>
                            <p className="price">${d.price}</p>
                          </div>
                        </div>
                      </div>  
                    )
                })
            }
            {
                data.length === 0 ? <p>No Match found</p> :null
            }
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
            {/* /.modal */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Shop;
