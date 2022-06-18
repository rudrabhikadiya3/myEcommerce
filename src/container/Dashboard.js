import React from 'react';
import { Link } from 'react-router-dom';
import DashMenu from '../components/DashMenu';

function Dashboard(props) {
    return (
        <>
            <div>
                <section className="page-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="content">
                                    <h1 className="page-name">Dashboard</h1>
                                    <ol className="breadcrumb">
                                        <li> <Link to='/'>Home</Link></li>
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
                                <DashMenu/>
                                <div className="dashboard-wrapper user-dashboard">
                                    <div className="media">
                                        <div className="pull-left">
                                            <img className="media-object user-img" src="source/images/avater.jpg" alt="Image" />
                                        </div>
                                        <div className="media-body">
                                            <h2 className="media-heading">Welcome Adam Smith</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, iure, est. Sit mollitia est maxime! Eos
                                                cupiditate tempore, tempora omnis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, nihil. </p>
                                        </div>
                                    </div>
                                    <div className="total-order mt-20">
                                        <h4>Total Orders</h4>
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Order ID</th>
                                                        <th>Date</th>
                                                        <th>Items</th>
                                                        <th>Total Price</th>
                                                        <th />
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><a href="#!">#252125</a></td>
                                                        <td>Mar 25, 2016</td>
                                                        <td>2</td>
                                                        <td>$ 99.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="#!">#252125</a></td>
                                                        <td>Mar 25, 2016</td>
                                                        <td>2</td>
                                                        <td>$ 99.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="#!">#252125</a></td>
                                                        <td>Mar 25, 2016</td>
                                                        <td>2</td>
                                                        <td>$ 99.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
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

export default Dashboard;