import React from 'react';
import { Link } from 'react-router-dom';

function Order(props) {
    return (
        <>

        <section className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="content">
                            <h1 className="page-name">Dashboard</h1>
                            <ol className="breadcrumb">
                                <li>
                                <Link to='/'>Home</Link>
                                </li>
                                <li className="active">my account</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="user-dashboard page-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="list-inline dashboard-menu text-center">
                            <li><Link to='/dashboard'>Dashboard</Link></li>
                            <li><Link to='/order' className="active">Orders</Link></li>
                            <li><Link to='/address'>Address</Link></li>
                            <li><Link to='/profile'>Profile</Link></li>
                        </ul>
                        <div className="dashboard-wrapper user-dashboard">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Order ID</th>
                                            <th>Date</th>
                                            <th>Items</th>
                                            <th>Total Price</th>
                                            <th>Status</th>
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#451231</td>
                                            <td>Mar 25, 2016</td>
                                            <td>2</td>
                                            <td>$99.00</td>
                                            <td><span className="label label-primary">Processing</span></td>
                                            <td><a href="order.html" className="btn btn-default">View</a></td>
                                        </tr>
                                        <tr>
                                            <td>#451231</td>
                                            <td>Mar 25, 2016</td>
                                            <td>3</td>
                                            <td>$150.00</td>
                                            <td><span className="label label-success">Completed</span></td>
                                            <td><a href="order.html" className="btn btn-default">View</a></td>
                                        </tr>
                                        <tr>
                                            <td>#451231</td>
                                            <td>Mar 25, 2016</td>
                                            <td>3</td>
                                            <td>$150.00</td>
                                            <td><span className="label label-danger">Canceled</span></td>
                                            <td><a href="order.html" className="btn btn-default">View</a></td>
                                        </tr>
                                        <tr>
                                            <td>#451231</td>
                                            <td>Mar 25, 2016</td>
                                            <td>2</td>
                                            <td>$99.00</td>
                                            <td><span className="label label-info">On Hold</span></td>
                                            <td><a href="order.html" className="btn btn-default">View</a></td>
                                        </tr>
                                        <tr>
                                            <td>#451231</td>
                                            <td>Mar 25, 2016</td>
                                            <td>3</td>
                                            <td>$150.00</td>
                                            <td><span className="label label-warning">Pending</span></td>
                                            <td><a href="order.html" className="btn btn-default">View</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        </>
    );
}

export default Order;