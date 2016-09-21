import React from 'react';


import Header from 'components/Header';
import SubHeader from 'components/SubHeader';
import Sidebar from 'components/Sidebar';
import {push} from 'react-router-redux';
import { connect } from 'react-redux';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import { createSelector } from 'reselect';
import { SetCurrentProject } from '../App/action';
import { createStructuredSelector } from 'reselect';
import {Load_Projects,Delete_Project} from './action';
import {
  GetCurrentProject,
} from '../App/selectors';
import request from 'utils/request';
import {
  GetProjectList,
} from './selectors';

export class ProjectList extends React.Component { // eslint-disable-line react/prefer-stateless-function

  openRoute = (route) => {
    this.props.changeRoute(route);
  };
  openProjectOverview = (projectname,id) => {
    this.updatecurrentproject({project_name:projectname,project_id:id});
    this.openRoute('/projectoverview');
  };

  updatecurrentproject=(p)=>{
    this.props.SetCurrentProject(p);
  };

  constructor(props) {
    super(props);
  }
  componentWillMount=()=>{
    this.updatecurrentproject({project_name:"Add New Project Details",project_id:0});
    this.props.Load_Projectlist();
  }
  render() {
   console.log(this.props);
    return (
    	<div   className="main-container">
      		<Header currentproject={this.props.currentproject.project_name} location={this.props.location.pathname}/>
          <SubHeader location={this.props.location.pathname} >
          <li className="add-new-form">
            <Link to={"/projectoverview"}><img src={require ("../../../internals/images/icon-plus.png")} />
              <span>
                Add New Project
              </span>
            </Link>
          </li>
          </SubHeader>
      		<Sidebar location={this.props.location.pathname} />
      		<div className="page">
            <div className="page-content padding-30 container-fluid">
              <div className="row" data-plugin="matchHeight" data-by-row="true">
        <div className="col-md-12">
          <div className="inner-box">
              <div className="box-heading">
                  <h1 >Project List</h1>
                </div>
                <div className="box-content">
                  <ul className="list-unstyled">
                      {
                        this.props.projectlist.map((item, index)=>(
                            <li  key={`item-${index}`}>
                              <div className="col-md-9">
                                <p>
                                    <span className="project-description-tit">

                                      <a onClick={()=> this.openProjectOverview(item.project_name,item.project_id)} className="project-description-tit"> {item.project_name}  </a>
                                    </span>
                                </p>
                              </div>
                              <div className="col-md-3">
                                  <div className="icon-group">
                                        <a onClick={()=>this.props.Delete_Project(item.project_id)}><i className="icon-cross"></i></a>
                                    </div>
                                </div>
                            </li>
                            ))
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

ProjectList.propTypes = {
  changeRoute: React.PropTypes.func,
  SetCurrentProject:React.PropTypes.func,
  Load_Projectlist:React.PropTypes.func,
  global:React.PropTypes.object
};

const mapStateToProps = createStructuredSelector({
  currentproject:GetCurrentProject(),
  projectlist:GetProjectList(),
});


function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
    SetCurrentProject:(p)=>dispatch(SetCurrentProject(p)),
    Load_Projectlist:()=>dispatch(Load_Projects()),
    Delete_Project:(project_id)=>dispatch(Delete_Project(project_id)),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
