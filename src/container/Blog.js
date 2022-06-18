import React from 'react';
import { Link } from 'react-router-dom';

function Blog(props) {
    return (
        <>
            <div>
                <section className="page-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="content">
                                    <h1 className="page-name">Blog</h1>
                                    <ol className="breadcrumb">
                                        <li><Link to='/'>Home</Link></li>
                                        <li className="active">blog</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="page-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="post">
                                    <div className="post-media post-thumb">
                                        <img src="source/images/blog/blog-post-1.jpg" alt />
                                    </div>
                                    <h2 className="post-title">How To Wear Bright Shoes</h2>
                                    <div className="post-meta">
                                        <ul>
                                            <li>
                                                <i className="tf-ion-ios-calendar" /> 20, MAR 2017
                                            </li>
                                            <li>
                                                <i className="tf-ion-android-person" /> POSTED BY ADMIN
                                            </li>
                                            <li>
                                                <a href="#!"><i className="tf-ion-ios-pricetags" /> LIFESTYLE</a>,<a href="#!"> TRAVEL</a>, <a href="#!">FASHION</a>
                                            </li>
                                            <li>
                                                <a href="#!"><i className="tf-ion-chatbubbles" /> 4 COMMENTS</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="post-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vitae placeat ad architecto nostrum asperiores vel aperiam, veniam eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque veniam fugiat quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio vitae ab doloremque accusamus sit, eos dolorum officiis a perspiciatis aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, facere. </p>
                                        <span className="btn btn-main">Continue Reading</span>
                                    </div>
                                </div>
                                <div className="post">
                                    <div className="post-media post-thumb">

                                        <img src="source/images/blog/blog-post-2.jpg" alt />
                                    </div>
                                    <h2 className="post-title">Two Ways To Wear Straight Shoes</h2>
                                    <div className="post-meta">
                                        <ul>
                                            <li>
                                                <i className="tf-ion-ios-calendar" /> 20, MAR 2017
                                            </li>
                                            <li>
                                                <i className="tf-ion-android-person" /> POSTED BY ADMIN
                                            </li>
                                            <li>
                                                <a href="#!"><i className="tf-ion-ios-pricetags" /> LIFESTYLE</a>,<a href="#!"> TRAVEL</a>, <a href="#!">FASHION</a>
                                            </li>
                                            <li>
                                                <a href="#!"><i className="tf-ion-chatbubbles" /> 4 COMMENTS</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="post-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vitae placeat ad architecto nostrum asperiores vel aperiam, veniam eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque veniam fugiat quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio vitae ab doloremque accusamus sit, eos dolorum officiis a perspiciatis aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, facere</p>
                                        <span className="btn btn-main">Continue Reading</span>
                                    </div>
                                </div>
                                <div className="post">
                                    <div className="post-media post-thumb">
                                        <img src="source/images/blog/blog-post-3.jpg" alt />
                                    </div>
                                    <h2 className="post-title">Making A Denim Statement</h2>
                                    <div className="post-meta">
                                        <ul>
                                            <li>
                                                <i className="tf-ion-ios-calendar" /> 20, MAR 2017
                                            </li>
                                            <li>
                                                <i className="tf-ion-android-person" /> POSTED BY ADMIN
                                            </li>
                                            <li>
                                                <a href="#!"><i className="tf-ion-ios-pricetags" /> LIFESTYLE</a>,<a href="#!"> TRAVEL</a>, <a href="#!">FASHION</a>
                                            </li>
                                            <li>
                                                <a href="#!"><i className="tf-ion-chatbubbles" /> 4 COMMENTS</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="post-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vitae placeat ad architecto nostrum asperiores vel aperiam, veniam eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque veniam fugiat quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio vitae ab doloremque accusamus sit, eos dolorum officiis a perspiciatis aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, facere</p>
                                        <span className="btn btn-main">Continue Reading</span>
                                    </div>
                                </div>
                                <div className="post">
                                    <h2 className="post-title">Standard Text Post</h2>
                                    <div className="post-meta">
                                        <ul>
                                            <li>
                                                <i className="tf-ion-ios-calendar" /> 20, MAR 2017
                                            </li>
                                            <li>
                                                <i className="tf-ion-android-person" /> POSTED BY ADMIN
                                            </li>
                                            <li>
                                                <a href="#!"><i className="tf-ion-ios-pricetags" /> LIFESTYLE</a>,<a href="#!"> TRAVEL</a>, <a href="#!">FASHION</a>
                                            </li>
                                            <li>
                                                <a href="#!"><i className="tf-ion-chatbubbles" /> 4 COMMENTS</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="post-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vitae placeat ad architecto nostrum asperiores vel aperiam, veniam eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque veniam fugiat quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio vitae ab doloremque accusamus sit, eos dolorum officiis a perspiciatis aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, facere</p>
                                        <span className="btn btn-main">Continue Reading</span>
                                    </div>
                                </div>
                                <div className="post">
                                    <div className="post-media post-media-audio">
                                        <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/115637399&color=ff5500&auto_play=false&show_artwork=true" className="DRAGDIS_iframe" />
                                    </div>
                                    <h2 className="post-title">Standard Audio Post</h2>
                                    <div className="post-meta">
                                        <ul>
                                            <li>
                                                <i className="tf-ion-ios-calendar" /> 20, MAR 2017
                                            </li>
                                            <li>
                                                <i className="tf-ion-android-person" /> POSTED BY ADMIN
                                            </li>
                                            <li>
                                                <a href="#!"><i className="tf-ion-ios-pricetags" /> LIFESTYLE</a>,<a href="#!"> TRAVEL</a>, <a href="#!">FASHION</a>
                                            </li>
                                            <li>
                                                <a href="#!"><i className="tf-ion-chatbubbles" /> 4 COMMENTS</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="post-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vitae placeat ad architecto nostrum asperiores vel aperiam, veniam eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque veniam fugiat quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio vitae ab doloremque accusamus sit, eos dolorum officiis a perspiciatis aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, facere</p>
                                        <span className="btn btn-main">Continue Reading</span>
                                    </div>
                                </div>
                                <div className="post">
                                    <div className="post-media post-media-audio">
                                        <iframe height={400} src="https://www.youtube.com/embed/Ljik3zsGNF4" allowFullScreen />
                                    </div>
                                    <h2 className="post-title">Standard Video Post</h2>
                                    <div className="post-meta">
                                        <ul>
                                            <li>
                                                <i className="tf-ion-ios-calendar" /> 20, MAR 2017
                                            </li>
                                            <li>
                                                <i className="tf-ion-android-person" /> POSTED BY ADMIN
                                            </li>
                                            <li>
                                                <a href="#!"><i className="tf-ion-ios-pricetags" /> LIFESTYLE</a>,<a href="#!"> TRAVEL</a>, <a href="#!">FASHION</a>
                                            </li>
                                            <li>
                                                <a href="#!"><i className="tf-ion-chatbubbles" /> 4 COMMENTS</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="post-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vitae placeat ad architecto nostrum asperiores vel aperiam, veniam eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque veniam fugiat quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio vitae ab doloremque accusamus sit, eos dolorum officiis a perspiciatis aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, facere</p>
                                        <span href="blog-single.html" className="btn btn-main">Continue Reading</span>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <ul className="pagination post-pagination">
                                        <li><a href="#!">Prev</a>
                                        </li>
                                        <li className="active"><a href="#!">1</a>
                                        </li>
                                        <li><a href="#!">2</a>
                                        </li>
                                        <li><a href="#!">3</a>
                                        </li>
                                        <li><a href="#!">4</a>
                                        </li>
                                        <li><a href="#!">5</a>
                                        </li>
                                        <li><a href="#!">Next</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <aside className="sidebar">
                                    <div className="widget widget-subscription">
                                        <h4 className="widget-title">Get notified updates</h4>
                                        <form>
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Your Email Address" />
                                            </div>
                                            <button type="submit" className="btn btn-main">I am in</button>
                                        </form>
                                    </div>
                                    {/* Widget Latest Posts */}
                                    <div className="widget widget-latest-post">
                                        <h4 className="widget-title">Latest Posts</h4>
                                        <div className="media">
                                            <a className="pull-left" href="#!">
                                                <img className="media-object" src="source/images/blog/post-thumb.jpg" alt="Image" />
                                            </a>
                                            <div className="media-body">
                                                <h4 className="media-heading"><a href="#!">Introducing Swift for Mac</a></h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, officia.</p>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <a className="pull-left" href="#!">
                                                <img className="media-object" src="source/images/blog/post-thumb-2.jpg" alt="Image" />
                                            </a>
                                            <div className="media-body">
                                                <h4 className="media-heading"><a href="#!">Welcome to Themefisher Family</a></h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, officia.</p>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <a className="pull-left" href="#!">
                                                <img className="media-object" src="source/images/blog/post-thumb-3.jpg" alt="Image" />
                                            </a>
                                            <div className="media-body">
                                                <h4 className="media-heading"><a href="#!">Warm welcome from swift</a></h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, officia.</p>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <a className="pull-left" href="#!">
                                                <img className="media-object" src="source/images/blog/post-thumb.jpg" alt="Image" />
                                            </a>
                                            <div className="media-body">
                                                <h4 className="media-heading"><a href="#!">Introducing Swift for Mac</a></h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, officia.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Latest Posts */}
                                    {/* Widget Category */}
                                    <div className="widget widget-category">
                                        <h4 className="widget-title">Categories</h4>
                                        <ul className="widget-category-list">
                                            <li><a href="#!">Animals</a>
                                            </li>
                                            <li><a href="#!">Landscape</a>
                                            </li>
                                            <li><a href="#!">Portrait</a>
                                            </li>
                                            <li><a href="#!">Wild Life</a>
                                            </li>
                                            <li><a href="#!">Video</a>
                                            </li>
                                        </ul>
                                    </div> {/* End category  */}
                                    {/* Widget tag */}
                                    <div className="widget widget-tag">
                                        <h4 className="widget-title">Tag Cloud</h4>
                                        <ul className="widget-tag-list">
                                            <li><a href="#!">Animals</a>
                                            </li>
                                            <li><a href="#!">Landscape</a>
                                            </li>
                                            <li><a href="#!">Portrait</a>
                                            </li>
                                            <li><a href="#!">Wild Life</a>
                                            </li>
                                            <li><a href="#!">Video</a>
                                            </li>
                                        </ul>
                                    </div> {/* End tag  */}
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Blog;