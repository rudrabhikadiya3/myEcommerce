import React from 'react';
import { Link } from 'react-router-dom';
import DashMenu from '../components/DashMenu';

function Address(props) {
    return (
        <>
            <main>
                <section className="page-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="content">
                                    <h1 className="page-name">Dashboard</h1>
                                    <ol className="breadcrumb">
                                        <li><Link to='/'>Home</Link></li>
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
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Company</th>
                                                    <th>Name</th>
                                                    <th>Address</th>
                                                    <th>Country</th>
                                                    <th className="col-md-2 col-sm-3">Phone</th>
                                                    <th />
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Nokia</td>
                                                    <td>Adam Smith</td>
                                                    <td>9/4 C Babor Road, Mohammad Pur, Dhaka</td>
                                                    <td>Bangladesh</td>
                                                    <td>+884 5452 6452</td>
                                                    <td>
                                                        <div className="btn-group" role="group">
                                                            <button type="button" className="btn btn-default"><i className="tf-pencil2" aria-hidden="true" /></button>
                                                            <button type="button" className="btn btn-default"><i className="tf-ion-close" aria-hidden="true" /></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Samsung</td>
                                                    <td>Adam Smith</td>
                                                    <td>9/4 C Babor Road, Mohammad Pur, Dhaka</td>
                                                    <td>Bangladesh</td>
                                                    <td>+884 5452 6452</td>
                                                    <td>
                                                        <div className="btn-group" role="group">
                                                            <button type="button" className="btn btn-default"><i className="tf-pencil2" aria-hidden="true" /></button>
                                                            <button type="button" className="btn btn-default"><i className="tf-ion-close" aria-hidden="true" /></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Motorola</td>
                                                    <td>Adam Smith</td>
                                                    <td>9/4 C Babor Road, Mohammad Pur, Dhaka</td>
                                                    <td>Bangladesh</td>
                                                    <td>+884 5452 6452</td>
                                                    <td>
                                                        <div className="btn-group" role="group">
                                                            <button type="button" className="btn btn-default"><i className="tf-pencil2" aria-hidden="true" /></button>
                                                            <button type="button" className="btn btn-default"><i className="tf-ion-close" aria-hidden="true" /></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    );
}

export default Address;