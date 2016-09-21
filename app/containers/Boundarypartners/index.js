import React from 'react';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import SubHeader from 'components/SubHeader';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import './style.css';

import { SetCurrentBoundry } from '../App/action';

import { createStructuredSelector } from 'reselect';
import {push} from 'react-router-redux';
import { connect } from 'react-redux';
import {
  GetCurrentProject,
} from '../App/selectors';


export default class BoundaryPartners extends React.Component { // eslint-disable-line react/prefer-stateless-function

  openRoute = (route) => {
    this.props.changeRoute(route);
  };
  openBoundryOverview = (boundry) => {
    this.updatecurrentboundry(boundry);
    this.openRoute('/boundarypartnersoverivew');
  };

  updatecurrentboundry=(p)=>{
       this.props.SetCurrentBoundry(p);
  };


  constructor(props) {
  super(props);
  this.state = { BoundaryList:[
                                  {partner_name:'Local Community Representatives (LCR)',boundary_partner_id:1},
                                  {partner_name:'Government Decision-makers (GDM)',boundary_partner_id:2},
                                  {partner_name:'Civil Society Organizations (CSO)',boundary_partner_id:3},
                                  {partner_name:'Elected Public Representatives (EPR)',boundary_partner_id:4},
                                  {partner_name:'Private Sector Actors (PSA)',boundary_partner_id:5}
                              ]
                };
  }



  render() {
    return (
    	<div className="main-container">
      		<Header currentproject={this.props.currentproject.name} location={this.props.location.pathname} />
          <SubHeader location={this.props.location.pathname} >
            <li className="add-new-form">
              <a href="#">
                <img src={require ("../../../internals/images/icon-plus.png")} />
                <span>Add New Boundary Partner</span>
              </a>
            </li>
          </SubHeader>
      		<Sidebar location={this.props.location.pathname} />
      		<div className="page">
            <div className="page-content padding-30 container-fluid">
              <div className="row" data-plugin="matchHeight" data-by-row="true">
        <div className="col-md-12">
          <div className="inner-box">
              <div className="box-heading">
                  <h1>Boundary Partners</h1>
                </div>
                <div className="box-content">
                  <ul className="list-unstyled">
                  {
                      this.state.BoundaryList.map((item, index)=>(
                          <li key={`item-${index}`}>
                            <div className="col-md-9">
                                <p>
                                   <span className="project-description-tit">
                                       <a onClick={()=> this.openBoundryOverview(item)} className="project-description-tit"> {item.partner_name}  </a>
                                    </span>
                                </p>
                              </div>
                            <div className="col-md-3">
                                <div className="icon-group">
                                      <a href="#"><i className="icon-plus icon-light"></i></a>
                                      <a href="#"><i className="icon-edit"></i></a>
                                      <a href="#"><i className="icon-cross"></i></a>
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

BoundaryPartners.propTypes = {
  changeRoute: React.PropTypes.func,
  SetCurrentBoundry:React.PropTypes.func,
  global:React.PropTypes.object
};

const mapStateToProps = createStructuredSelector({
  currentproject:GetCurrentProject(),
});


function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
    SetCurrentBoundry:(p)=>dispatch(SetCurrentBoundry(p))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BoundaryPartners);
