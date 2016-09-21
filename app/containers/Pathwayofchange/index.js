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

export default class PathwayOfChange extends React.Component { // eslint-disable-line react/prefer-stateless-function
constructor(props) {
    super(props);
  }
  render() {
    return (
    	<div className="main-container">
      		<Header currentboundry={this.props.currentboundry} currentproject={this.props.currentproject} location={this.props.location.pathname}/>
          <SubHeader location={this.props.location.pathname} />
      		<Sidebar location={this.props.location.pathname} />
      		<div className="page">
            <div className="page-content padding-30 container-fluid">
              <div className="row" data-plugin="matchHeight" data-by-row="true">
        <div className="col-md-12">
          <div className="inner-box">
              <div className="box-heading">
                  <h1>Pathway Of Change</h1>
                </div>
                <div className="box-content">

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

export default connect(mapStateToProps, null)(PathwayOfChange);
