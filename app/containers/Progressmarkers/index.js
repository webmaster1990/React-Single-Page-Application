/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';


import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import './style.css';

export default class ProgressMarkers extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
    	<div className="main-container">
      		<Header/>
      		<Sidebar/>
      		<div className="page">
            <div className="page-content padding-30 container-fluid">
              <div className="row" data-plugin="matchHeight" data-by-row="true">
        <div className="col-md-12">

          <div className="inner-box">
              <div className="box-heading">
                  <h1>Progress Markers</h1>
                </div>
                <div className="box-content">
                  <ul className="list-unstyled">
                      <li>
                          <div className="col-md-9 three-columb">
                              <span className="list-number">11.</span>
                              <p>GDMs respond to community needs and expectations (NB: this may be too general to track)</p>
                                <span className="Expect-See">Expect to See</span>

                            </div>
                          <div className="col-md-3">
                              <div className="icon-group">
                                    <a href="#"><i className="icon-plus icon-light"></i></a>
                                    <a href="#"><i className="icon-edit"></i></a>
                                    <a href="#"><i className="icon-cross"></i></a>
                                </div>
                            </div>
                        </li>
                        <li>
                          <div className="col-md-9 three-columb">
                              <span className="list-number">12.</span>
                              <p>GDMs appoint public information officers</p>
                                <span className="Expect-See">Expect to See</span>

                            </div>
                          <div className="col-md-3">
                              <div className="icon-group">
                                    <a href="#"><i className="icon-plus icon-light"></i></a>
                                    <a href="#"><i className="icon-edit"></i></a>
                                    <a href="#"><i className="icon-cross"></i></a>
                                </div>
                            </div>
                        </li>
                        <li>
                          <div className="col-md-9 three-columb">
                              <span className="list-number">13.</span>
                              <p>GDMs put in place procedures to accept complaints from the public</p>
                                <span className="Expect-See">Expect to See</span>

                            </div>
                          <div className="col-md-3">
                              <div className="icon-group">
                                    <a href="#"><i className="icon-plus icon-light"></i></a>
                                    <a href="#"><i className="icon-edit"></i></a>
                                    <a href="#"><i className="icon-cross"></i></a>
                                </div>
                            </div>
                        </li>
                        <li>
                          <div className="col-md-9 three-columb">
                              <span className="list-number">14.</span>
                              <p>GDMs put in place simple procedures for public hearing events to facilitate participation from all interested citizens</p>
                                <span className="Expect-See">Expect to See</span>

                            </div>
                          <div className="col-md-3">
                              <div className="icon-group">
                                    <a href="#"><i className="icon-plus icon-light"></i></a>
                                    <a href="#"><i className="icon-edit"></i></a>
                                    <a href="#"><i className="icon-cross"></i></a>
                                </div>
                            </div>
                        </li>
                        <li>
                          <div className="col-md-9 three-columb">
                              <span className="list-number">15.</span>
                              <p>GDMs draft a grievance response policy </p>
                                <span className="Expect-See">Expect to See</span>

                            </div>
                          <div className="col-md-3">
                              <div className="icon-group">
                                    <a href="#"><i className="icon-plus icon-light"></i></a>
                                    <a href="#"><i className="icon-edit"></i></a>
                                    <a href="#"><i className="icon-cross"></i></a>
                                </div>
                            </div>
                        </li>
                        <li>
                          <div className="col-md-9 three-columb">
                              <span className="list-number">16.</span>
                              <p>GDMs provide information when requested by citizens</p>
                                <span className="Expect-See">Expect to See</span>

                            </div>
                          <div className="col-md-3">
                              <div className="icon-group">
                                    <a href="#"><i className="icon-plus icon-light"></i></a>
                                    <a href="#"><i className="icon-edit"></i></a>
                                    <a href="#"><i className="icon-cross"></i></a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
      </div>
          </div>
        </div>
        </div>
    );
  }
}
