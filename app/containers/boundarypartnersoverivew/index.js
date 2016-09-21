import React from 'react';


import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import SubHeader from 'components/SubHeader';
import './style.css';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  GetCurrentProject,
  GetCurrentBoundry,
} from '../App/selectors';

var hide={
   display: 'none',
};

export default class boundarypartnersoverivew extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main-container">
         <Header currentboundry={this.props.currentboundry.partner_name} currentproject={this.props.currentproject.project_name} location={this.props.location.pathname}/>
          <SubHeader location={this.props.location.pathname} />
          <Sidebar location={this.props.location.pathname} />
          <div className="page">
            <div className="page-content padding-30 container-fluid">
              <div className="row" data-plugin="matchHeight" data-by-row="true">
                <div className="col-md-12">
                  <div className="inner-box">
                     <div className="box-heading">
                      <h1>Boundary Partners Overview</h1>
                     </div>
                    <div className="box-content">
                      <ul className="list-unstyled">
                          <li>
                          <div className="col-md-9">
                            <span className="project-description-tit">Boundary Partner Outcome Statement</span>
                              <span className="spanoutcomestatement">Integrity Watch Afghanistan intends to see local community
                                        representatives who actively monitor projects and proceedings
                                        in the judicial, infrastructure, extractive, and educational sectors
                                        in order to increase accountability and reduce corruption.
                                        They raise public awareness of transparency issues, and mobilize
                                        their community members to engage in oversight activities and
                                        local governance to improve the quality of public service delivery
                                        to citizens. They advocate with decision-makers and elected
                                        representatives to improve policies and legislation in order to
                                        promote a culture of transparency, integrity and accountability
                                        among citizens and their officials.</span>
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
                                  <span className="list-number">1</span>
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

                                <div className="accordion">
                                  <a href="#" className="toggle"><i className="icon-minus"></i> <span>Challenges</span></a>
                                    <div className="toggle-div" >
                                      <ul>
                                          <li>Not a lot of choice for public information officers
                                              <div className="icon-group">
                                                    <a href="#"><i className="icon-plus icon-light"></i></a>
                                                    <a href="#"><i className="icon-edit"></i></a>
                                                    <a href="#"><i className="icon-cross"></i></a>
                                                </div>
                                            </li>
                                            <li>Lack of transparency with appointments
                                              <div className="icon-group">
                                                    <a href="#"><i className="icon-plus icon-light"></i></a>
                                                    <a href="#"><i className="icon-edit"></i></a>
                                                    <a href="#"><i className="icon-cross"></i></a>
                                                </div>
                                            </li>
                                            <li>Add Challenge
                                              <div className="icon-group">
                                                    <a href="#"><i className="icon-plus icon-light"></i></a>
                                                    <a href="#"><i className="icon-edit"></i></a>
                                                    <a href="#"><i className="icon-cross"></i></a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="accordion">
                                  <a href="#" className="toggle"><i className="icon-minus"></i> <span>Strategies</span></a>
                                    <div className="toggle-div" >
                                      <ul>
                                          <li>Create more transparent practices for DMs to use
                                              <div className="icon-group">
                                                    <a href="#"><i className="icon-plus icon-light"></i></a>
                                                    <a href="#"><i className="icon-edit"></i></a>
                                                    <a href="#"><i className="icon-cross"></i></a>
                                                </div>
                                            </li>
                                            <li>Add Strategy
                                              <div className="icon-group">
                                                    <a href="#"><i className="icon-plus icon-light"></i></a>
                                                    <a href="#"><i className="icon-edit"></i></a>
                                                    <a href="#"><i className="icon-cross"></i></a>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                              <div className="col-md-9 three-columb">
                                  <span className="list-number">2</span>
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
                                <div className="accordion">
                                  <a href="#" className="toggle"><i className="icon-plus"></i> <span>Challenges</span></a>
                                    <div className="toggle-div" style={hide}>
                                      <ul>
                                          <li>Not a lot of choice for public information officers
                                              <div className="icon-group">
                                                    <a href="#"><i className="icon-plus icon-light"></i></a>
                                                    <a href="#"><i className="icon-edit"></i></a>
                                                    <a href="#"><i className="icon-cross"></i></a>
                                                </div>
                                            </li>
                                            <li>Lack of transparency with appointments
                                              <div className="icon-group">
                                                    <a href="#"><i className="icon-plus icon-light"></i></a>
                                                    <a href="#"><i className="icon-edit"></i></a>
                                                    <a href="#"><i className="icon-cross"></i></a>
                                                </div>
                                            </li>
                                            <li>Add Challenge
                                              <div className="icon-group">
                                                    <a href="#"><i className="icon-plus icon-light"></i></a>
                                                    <a href="#"><i className="icon-edit"></i></a>
                                                    <a href="#"><i className="icon-cross"></i></a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>



                                <div className="accordion">
                                  <a href="#" className="toggle"><i className="icon-plus"></i> <span>Strategies</span></a>
                                    <div className="toggle-div"  style={hide} >
                                      <ul>
                                          <li>Create more transparent practices for DMs to use
                                              <div className="icon-group">
                                                    <a href="#"><i className="icon-plus icon-light"></i></a>
                                                    <a href="#"><i className="icon-edit"></i></a>
                                                    <a href="#"><i className="icon-cross"></i></a>
                                                </div>
                                            </li>
                                            <li>Add Strategy
                                              <div className="icon-group">
                                                    <a href="#"><i className="icon-plus icon-light"></i></a>
                                                    <a href="#"><i className="icon-edit"></i></a>
                                                    <a href="#"><i className="icon-cross"></i></a>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li>
                              <div className="col-md-9 three-columb">
                                  <span className="list-number">3</span>
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
                                <div className="accordion">
                                  <a href="#" className="toggle"><i className="icon-plus"></i> <span>Challenges</span></a>
                                    <div className="toggle-div" style={hide}>
                                      <ul>
                                          <li>Not a lot of choice for public information officers
                                              <div className="icon-group">
                                                    <a href="#"><i className="icon-plus icon-light"></i></a>
                                                    <a href="#"><i className="icon-edit"></i></a>
                                                    <a href="#"><i className="icon-cross"></i></a>
                                                </div>
                                            </li>
                                            <li>Lack of transparency with appointments
                                              <div className="icon-group">
                                                    <a href="#"><i className="icon-plus icon-light"></i></a>
                                                    <a href="#"><i className="icon-edit"></i></a>
                                                    <a href="#"><i className="icon-cross"></i></a>
                                                </div>
                                            </li>
                                            <li>Add Challenge
                                              <div className="icon-group">
                                                    <a href="#"><i className="icon-plus icon-light"></i></a>
                                                    <a href="#"><i className="icon-edit"></i></a>
                                                    <a href="#"><i className="icon-cross"></i></a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>



                                <div className="accordion">
                                  <a href="#" className="toggle"><i className="icon-plus"></i> <span>Strategies</span></a>
                                    <div className="toggle-div"  style={hide} >
                                      <ul>
                                          <li>Create more transparent practices for DMs to use
                                              <div className="icon-group">
                                                    <a href="#"><i className="icon-plus icon-light"></i></a>
                                                    <a href="#"><i className="icon-edit"></i></a>
                                                    <a href="#"><i className="icon-cross"></i></a>
                                                </div>
                                            </li>
                                            <li>Add Strategy
                                              <div className="icon-group">
                                                    <a href="#"><i className="icon-plus icon-light"></i></a>
                                                    <a href="#"><i className="icon-edit"></i></a>
                                                    <a href="#"><i className="icon-cross"></i></a>
                                                </div>
                                            </li>

                                        </ul>
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




const mapStateToProps = createStructuredSelector({
  currentproject:GetCurrentProject(),
  currentboundry:GetCurrentBoundry(),
});

export default connect(mapStateToProps, null)(boundarypartnersoverivew);
