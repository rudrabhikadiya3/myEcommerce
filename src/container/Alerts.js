import React from 'react';

function Alerts(props) {
    return (
        <>
            <section className="alerts section">
                <div className="container">
                    <div className="row">
                        <div className="section-title text-center">
                            <h2>Alert Styles</h2>
                        </div>
                    </div>
                    <div className="row mt-30">
                        <div className="col-xs-12">
                            <div className="alertPart">
                                <div className="alert alert-success alert-common" role="alert"><i className="tf-ion-thumbsup" /><span>Well done!</span> You succesfully read this message</div>
                                <div className="alert alert-info alert-common" role="alert"><i className="tf-ion-android-checkbox-outline" /><span>Warning!</span> Better check yourself.You are not looking too good</div>
                                <div className="alert alert-warning alert-common" role="alert"><i className="tf-ion-alert-circled" /><span>Warning!</span> Better check yourself.You are not looking too good</div>
                                <div className="alert alert-danger alert-common" role="alert"><i className="tf-ion-close-circled" /><span>Warning!</span> Better check yourself.You are not looking too good</div>
                            </div>
                            <div className="alertPart mt-50">
                                <div className="alert alert-success alert-common alert-solid" role="alert"><i className="tf-ion-thumbsup" /><span>Well done!</span> You succesfully read this message</div>
                                <div className="alert alert-info alert-common alert-solid" role="alert"><i className="tf-ion-android-checkbox-outline" /><span>Warning!</span> Better check yourself.You are not looking too good</div>
                                <div className="alert alert-warning alert-common alert-solid" role="alert"><i className="tf-ion-alert-circled" /><span>Warning!</span> Better check yourself.You are not looking too good</div>
                                <div className="alert alert-danger alert-common alert-solid" role="alert"><i className="tf-ion-close-circled" /><span>Warning!</span> Better check yourself.You are not looking too good</div>
                            </div>
                            <div className="alertPart mt-50">
                                <div className="alert alert-success alert-common alert-dismissible " role="alert">
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                                    <i className="tf-ion-thumbsup" /><span>Well done!</span> You succesfully read this message
                                </div>
                                <div className="alert alert-info alert-common alert-dismissible" role="alert">
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                                    <i className="tf-ion-android-checkbox-outline" /><span>Warning!</span> Better check yourself.You are not looking too good
                                </div>
                                <div className="alert alert-warning alert-common alert-dismissible" role="alert">
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                                    <i className="tf-ion-alert-circled" /><span>Warning!</span> Better check yourself.You are not looking too good
                                </div>
                                <div className="alert alert-danger alert-common alert-dismissible" role="alert">
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                                    <i className="tf-ion-close-circled" /><span>Warning!</span> Better check yourself.You are not looking too good
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Alerts;