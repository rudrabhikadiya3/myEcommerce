import React from 'react';
import DashMenu from '../components/DashMenu';

function Profile(props) {
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
                                    <li><a href="../index.html">Home</a></li>
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
                            <div className="dashboard-wrapper dashboard-user-profile">
                                <div className="media">
                                    <div className="pull-left text-center" href="#!">
                                        <img className="media-object user-img" src="source/images/avater.jpg" alt="Image" />
                                        <a href="#x" className="btn btn-transparent mt-20">Change Image</a>
                                    </div>
                                    <div className="media-body">
                                        <ul className="user-profile-list">
                                            <li><span>Full Name:</span>Johanna Doe</li>
                                            <li><span>Country:</span>USA</li>
                                            <li><span>Email:</span>mail@gmail.com</li>
                                            <li><span>Phone:</span>+880123123</li>
                                            <li><span>Date of Birth:</span>Dec , 22 ,1991</li>
                                        </ul>
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

export default Profile;