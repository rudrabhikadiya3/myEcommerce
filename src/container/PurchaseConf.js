import React from 'react';

function PurchaseConf(props) {
    return (
        <>
            <div>
                <section className="page-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="content">
                                    <h1 className="page-name">Purchase Confirmation</h1>
                                    <ol className="breadcrumb">
                                        <li><a href="../index.html">Home</a></li>
                                        <li className="active">purchase confirmation</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="page-wrapper">
                    <div className="purchase-confirmation shopping">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2">
                                    <div className="block ">
                                        <div className="purchase-confirmation-details">
                                            <table id="purchase-receipt" className="table">
                                                <thead>
                                                    <tr>
                                                        <th><strong>Payment:</strong></th>
                                                        <th>33056</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className><strong>Payment Status:</strong></td>
                                                        <td className>Complete</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Payment Method:</strong></td>
                                                        <td>Free Purchase</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Date:</strong></td>
                                                        <td>December 20, 2016</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Subtotal</strong></td>
                                                        <td>
                                                            $18.00      </td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Total Price:</strong></td>
                                                        <td>$18.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
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

export default PurchaseConf;