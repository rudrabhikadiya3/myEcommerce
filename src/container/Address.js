import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DashMenu from "../components/DashMenu";

function Address(props) {
  let localdata = JSON.parse(localStorage.getItem("adrs"));
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
                    <li>
                      <Link to="/">Home</Link>
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
                <DashMenu />
                <div className="dashboard-wrapper user-dashboard">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          {/* <th>Company</th> */}
                          <th>Name</th>
                          <th>Address</th>
                          <th>City</th>
                          <th>Country</th>
                          <th className="col-md-2 col-sm-3">Zip</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        
                        {
                          localdata !== null ?
                          localdata.map((d, i) => {
                          
                            return (
                              <tr key={i}>
                                <td>{d.name}</td>
                                <td>{d.address}</td>
                                <td>{d.city}</td>
                                <td>{d.country}</td>
                                <td>{d.zip}</td>
                                <td>
                                  <div className="btn-group" role="group">
                                    <button
                                      type="button"
                                      className="btn btn-default"
                                    >
                                      <i
                                        className="tf-pencil2"
                                        aria-hidden="true"
                                      />
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-default"
                                    >
                                      <i
                                        className="tf-ion-close"
                                        aria-hidden="true"
                                      />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            );
                          
                        })
                          : <tr>
                            <td>No resent addresses</td>
                          </tr>
                        
                        }
                        
                        
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
