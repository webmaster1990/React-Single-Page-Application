import React from 'react';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import SubHeader from 'components/SubHeader';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';


import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  GetCurrentProject,
} from '../App/selectors';


export default class CompetedForms extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
    super(props);

    this.state = { CompletedForms:[
                                  {title:'Title of Event',project:'Tawanmandi Project',Date:'July 31, 2016'},
                                  {title:'Meeting with GDM',project:'Tawanmandi Project',Date:'July 21, 2016'},
                                  {title:'Advising potential volunteers',project:'Tawanmandi Project',Date:'July 18, 2016'},

                                ]
                  };
  }
  render() {
    return (
    	<div className="main-container">
      		 <Header currentproject={this.props.currentproject} location={this.props.location.pathname} />
           <SubHeader location={this.props.location.pathname} >
           <li className="add-new-form"><Link to={"/significantinstancereport"}><img src={require ("../../../internals/images/icon-plus.png")} /> <span>Add New Form</span></Link></li>
           </SubHeader>
      		 <Sidebar location={this.props.location.pathname} />
             <div className="page">
                <div className="page-content padding-30 container-fluid">
                  <div className="row" data-plugin="matchHeight" data-by-row="true">
                    <div className="col-md-12">
                      <h1 className="heading30">Completed Forms</h1>
                      <div className="inner-box CompletedForms">
                          <div className="box-heading">
                              <h1>
                                    <span className="EventTitle">Title of Event</span>
                                    <span className="Project">Project</span>
                                    <span className="ModifiedDate">Date Last Modified</span>
                                </h1>
                            </div>
                            <div className="box-content">
                              <ul className="list-unstyled">
                                  {
                                    this.state.CompletedForms.map((item, index)=>(
                                        <li key={`item-${index}`}>
                                                      <div className="col-md-9">
                                                        <span className="EventTitle">{item.title}</span>
                                                          <span className="Project">{item.project}</span>
                                                    <span className="ModifiedDate">{item.Date}</span>
                                                      </div>
                                                    <div className="col-md-3">
                                                        <div className="icon-group">
                                                              <a href="#"><i className="icon-edit"></i></a>
                                                              <a href="#" className="active"><i className="icon-cross"></i></a>
                                                          </div>
                                                      </div>
                                        </li>
                                      )
                                  )
                                }
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
});

export default connect(mapStateToProps, null)(CompetedForms);
