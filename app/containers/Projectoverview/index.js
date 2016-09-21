import React from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import SubHeader from 'components/SubHeader';
import { createStructuredSelector } from 'reselect';
import TextInput from 'components/TextInput'
import TextArea from 'components/TextInput'
import Button from 'components/Button'
import Form from 'components/Form'
import {loadStateWithKey} from '../../Localstorage';
import './style.css';
import {
  GetCurrentProject,
} from '../App/selectors';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import {
  GetProject,
} from './selectors';

import {
Load_Projectbyid,
Add_Project,
Edit_Project,
Delete_Field
} from './action';

function throttle (fn, threshhold, scope) {
  threshhold || (threshhold = 1);
  var last,
      deferTimer;
      console.log("SETP51");
  return function () {
    console.log("SETP!");
    var context = scope || this;
    var now = +new Date,
        args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      console.log("SETP2");
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        console.log("SETP5");
        fn.apply(context, args);
          console.log("SETP5333");
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}
export default class ProjectOverview extends React.Component { // eslint-disable-line react/prefer-stateless-function
  TextInput_Blur = (event) => {
    console.log("I am Calling");

      if(this.state.project.project_id==0){
        this.props.Add_Project(this.state.project,event.target.name);
      }
      else {
        this.props.Edit_Project(this.state.project,event.target.name);
      }
  }

  TextInput_Change = (event)=>{
  console.log("I am Calling");
    var change = this.state.project;
    change[event.target.name] = event.target.value.trim();
    this.setState(this.state);
  }

  EditableControls= (Name,e)=> {
    if(e == "add" && this.state.project.project_id == 0){
      var change = this.state.setting;
      change[Name] = true;
      this.setState({setting:change});
    }else if(e == "edit" && this.state.project.project_id > 0){
      var change = this.state.setting;
      change[Name] = true;
      this.setState({setting:change});
    }

  }
  Delete_ProjectItem= (object,Name)=> {
        // var change = this.state.project;
        // change[Name] = "";
        // this.setState(this.state);
      if(this.state.project.project_id == 0){
        return
      }
      this.props.Delete_Field(this.state.project,Name)
  }
  Update_ProjectItem= (object,Name)=> {
        this.props.Edit_Project(this.state.project,Name);
  }
  Add_ProjectItem= (object,Name)=> {
        this.props.Add_Project(this.state.project,Name);
  }
  componentWillReceiveProps=(nextProps)=> function() {
    console.log("sdfddddddddddddd........."+nextProps)
    this.setState({value: nextProps.value});
}
componentDidMount() {
     var project_id= (this.props.currentproject ? this.props.currentproject.project_id:0);
     if(project_id==undefined)
       project_id=0;
     var projectlist=loadStateWithKey('projectlist');
     var objproject={};
     if(projectlist!=undefined && projectlist.length>0 && project_id!=0)
     {
         objproject=projectlist.filter((item)=>(item.project_id == project_id))[0];
     }
     else {
       objproject={project_id:project_id,project_name:'',logo_url:'',description:'',budget:'',donor:'',mission:'',vision:'',imagePreviewUrl:''};
     }
     this.setState({project:objproject});
       console.log(this.state.project);
   }

  constructor(props) {
    super(props);
    this.state ={
      project:{},
      setting:{
        project_name:false,
        logo_url:false,
        description:false,
        budget:false,
        donor:false,
        mission:false,
        vision:false,
      }
    };
     this._handleImageChange = this._handleImageChange.bind(this);
  }
  _handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      var change = this.state.project;
      change['logo_url'] = reader.result;
      change['imagePreviewUrl'] = file;
      this.setState(this.state);
    }

    reader.readAsDataURL(file)
  }
  mixins: [LinkedStateMixin]
  render() {
     let {logo_url} = this.state.project;
     let $logo_url = null;
     if (logo_url) {
       $logo_url = (<img src={logo_url} />);
     }

    return (


    	<div className="main-container">
      		<Header currentproject={this.props.currentproject.project_name} location={this.props.location.pathname} />
          <SubHeader location={this.props.location.pathname} />
      		<Sidebar location={this.props.location.pathname} />
      		<div className="page">
            <div className="page-content padding-30 container-fluid">
              <div className="row" data-plugin="matchHeight" data-by-row="true">
        <div className="col-md-12">
           <div className="inner-box">
              <div className="box-heading">
                  <h1>Project Overview</h1>
                </div>
                <div className="box-content">
                  <ul className="list-unstyled">
                      <li>
                          <div className="col-md-9">
                            <span className="project-description-tit">Project Name</span>
                              <span className="Editablediv">
                                  <span className={!this.state.setting.project_name?'':'hidden'}> {this.state.project.project_name?this.state.project.project_name:'Add Project Name'}</span>
                                  <TextInput onChange={this.TextInput_Change} onBlur={this.TextInput_Blur} required="true" value={this.state.project.project_name} className={this.state.setting.project_name?'form-control':' form-control hidden'}  type={"text"} name={"project_name"} placeholder={"Add Project Name"} />

                              </span>
                          </div>
                          <div className="col-md-3">
                              <div className="icon-group">
                                    <a onClick={()=>{this.EditableControls('project_name','add')}} ><i className={((this.state.project.project_id == 0)?'icon-plus':'icon-plus icon-light')}></i></a>
                                    <a onClick={()=>{this.EditableControls('project_name','edit')}} ><i className={((this.state.project.project_id > 0)?'icon-edit ':'icon-edit icon-light')}></i></a>
                                    <a onClick={()=>(this.Delete_ProjectItem(this.state.project,'project_name'))}><i className={((this.state.project.project_id >0)?'icon-cross':'icon-cross icon-light')}></i></a>
                                </div>
                            </div>
                        </li>
                        <li>
                          <div className="col-md-9">
                            <span className="project-description-tit">Project Logo</span>
                            <span className="Editablediv">
                                <span>
                                   <span className={!this.state.setting.logo_url?'':'hidden'}>
                                      {$logo_url}
                                   </span>
                                   <span className={!this.state.setting.logo_url?'':'hidden'}>
                                     Add Project Logo
                                   </span>
                                </span>
                                <span>
                                  {$logo_url}
                                   <input type="file" className={this.state.setting.logo_url?'':'hidden'} onChange={this._handleImageChange} />
                                </span>
                              </span>
                            </div>
                          <div className="col-md-3">
                              <div className="icon-group">
                                  <a onClick={()=>{this.EditableControls('logo_url','add')}} ><i className={((this.state.project.project_id == 0)?'icon-plus':'icon-plus icon-light')}></i></a>
                                  <a onClick={()=>{this.EditableControls('logo_url','edit')}} ><i className={((this.state.project.project_id > 0)?'icon-edit ':'icon-edit icon-light')}></i></a>
                                  <a  onClick={()=>this.Delete_ProjectItem(this.state.project,'logo_url')}><i className={((this.state.project.project_id >0)?'icon-cross':'icon-cross icon-light')}></i></a>
                              </div>
                            </div>
                        </li>
                        <li>
                          <div className="col-md-9">
                            <span className="project-description-tit">Project Description</span>
                              <span className="Editablediv">
                                <span className={!this.state.setting.description?'':'hidden'}>{this.state.project.description?this.state.project.description:'Add Project Desciption'}</span>

                                <textarea value={this.state.project.description} onBlur={this.TextInput_Blur} name={"description"} className={this.state.setting.description?'form-control':' form-control hidden'}  onChange={this.TextInput_Change} onBlur={this.TextInput_Blur}  placeholder={"Add Project Desciption"}/>
                              </span>
                            </div>
                          <div className="col-md-3">
                              <div className="icon-group">
                                    <a onClick={()=>{this.EditableControls('description','add')}}><i className={((this.state.project.project_id == 0)?'icon-plus':'icon-plus icon-light')}></i></a>
                                    <a onClick={()=>{this.EditableControls('description','edit')}} ><i className={((this.state.project.project_id > 0)?'icon-edit ':'icon-edit icon-light')}></i></a>
                                    <a  onClick={()=>this.Delete_ProjectItem(this.state.project,'description')}><i className={((this.state.project.project_id >0)?'icon-cross':'icon-cross icon-light')}></i></a>

                                </div>
                            </div>
                        </li>
                        <li>
                          <div className="col-md-9">
                            <span className="project-description-tit">Project Budget</span>
                              <span className="Editablediv">
                                <span className={!this.state.setting.budget?'':'hidden'}>{this.state.project.budget?this.state.project.budget:'Add Project Budget'}</span>
                                <TextInput onChange={this.TextInput_Change} onBlur={this.TextInput_Blur} required="true" className={this.state.setting.budget?'form-control':' form-control hidden'}  type={"text"} name={"budget"} placeholder={"Add Project Budget"} />
                              </span>
                            </div>
                          <div className="col-md-3">
                              <div className="icon-group">
                                  <a onClick={()=>{this.EditableControls('budget','add')}} ><i className={((this.state.project.project_id == 0)?'icon-plus':'icon-plus icon-light')}></i></a>
                                  <a onClick={()=>{this.EditableControls('budget','edit')}} ><i className={((this.state.project.project_id > 0)?'icon-edit ':'icon-edit icon-light')}></i></a>
                                  <a  onClick={()=>this.Delete_ProjectItem(this.state.project,'budget')}><i className={((this.state.project.project_id >0)?'icon-cross':'icon-cross icon-light')}></i></a>

                                </div>
                            </div>
                        </li>
                        <li>
                          <div className="col-md-9">
                            <span className="project-description-tit">Project Donor</span>
                              <span className="Editablediv">
                                <span className={!this.state.setting.donor?'':'hidden'}>{this.state.project.donor?this.state.project.donor:'Add Project Donor'}</span>
                                <TextInput onChange={this.TextInput_Change} onBlur={this.TextInput_Blur} required="true"  className={this.state.setting.donor?'form-control':' form-control hidden'} type={"text"} name={"donor"} placeholder={"Add Project Donor"} />
                              </span>
                            </div>
                          <div className="col-md-3">
                              <div className="icon-group">
                                    <a onClick={()=>{this.EditableControls('donor','add')}} ><i className={((this.state.project.project_id == 0)?'icon-plus':'icon-plus icon-light')}></i></a>
                                    <a onClick={()=>{this.EditableControls('donor','edit')}} ><i className={((this.state.project.project_id > 0)?'icon-edit ':'icon-edit icon-light')}></i></a>
                                    <a  onClick={()=>this.Delete_ProjectItem(this.state.project,'donor')}><i className={((this.state.project.project_id >0)?'icon-cross':'icon-cross icon-light')}></i></a>
                                </div>
                            </div>
                        </li>
                        <li>
                          <div className="col-md-9">
                            <span className="project-description-tit">Mission</span>
                            <span className="Editablediv">
                              <span className={!this.state.setting.mission?'':'hidden'}>{this.state.project.mission?this.state.project.mission:'Add Mission'}</span>
                              <textarea value={this.state.project.mission} onBlur={this.TextInput_Blur} name={"mission"} className={this.state.setting.mission?'form-control':' form-control hidden'}  onChange={this.TextInput_Change} onBlur={this.TextInput_Blur}  placeholder={"Add Mission"}/>
                              </span>
                            </div>
                          <div className="col-md-3">
                              <div className="icon-group">
                                    <a onClick={()=>{this.EditableControls('mission','add')}} ><i className={((this.state.project.project_id == 0)?'icon-plus':'icon-plus icon-light')}></i></a>
                                    <a onClick={()=>{this.EditableControls('mission','edit')}} ><i className={((this.state.project.project_id > 0)?'icon-edit ':'icon-edit icon-light')}></i></a>
                                    <a onClick={()=>this.Delete_ProjectItem(this.state.project,'mission')}><i className={((this.state.project.project_id >0)?'icon-cross':'icon-cross icon-light')}></i></a>
                                </div>
                            </div>
                        </li>
                        <li>
                          <div className="col-md-9">
                            <span className="project-description-tit">Vision</span>
                              <span className="Editablediv">
                              <span className={!this.state.setting.vision?'':'hidden'}>{this.state.project.vision?this.state.project.vision:'Add Vision'}</span>

                              <textarea value={this.state.project.vision} onBlur={this.TextInput_Blur} name={"vision"} className={this.state.setting.vision?'form-control':' form-control hidden'}  onChange={this.TextInput_Change} onBlur={this.TextInput_Blur}  placeholder={"Add Vision"}/>
                              </span>
                            </div>
                          <div className="col-md-3">
                            <div className="icon-group">
                                <a onClick={()=>{this.EditableControls('vision','add')}} ><i className={((this.state.project.project_id == 0)?'icon-plus':'icon-plus icon-light')}></i></a>
                                <a onClick={()=>{this.EditableControls('vision','edit')}} ><i className={((this.state.project.project_id > 0)?'icon-edit ':'icon-edit icon-light')}></i></a>
                                <a onClick={()=>this.Delete_ProjectItem(this.state.project,'mission')}><i className={((this.state.project.project_id >0)?'icon-cross':'icon-cross icon-light')}></i></a>
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

ProjectOverview.propTypes = {
  Load_Projectbyid: React.PropTypes.func,
  Add_Project: React.PropTypes.func,
  Edit_Project: React.PropTypes.func,
  Delete_Field: React.PropTypes.func,
  project:React.PropTypes.object
};

const mapStateToProps = createStructuredSelector({
  currentproject:GetCurrentProject(),
  project:GetProject(),
});

function mapDispatchToProps(dispatch) {
  return {
    Load_Projectbyid:(project_id)=>dispatch(Load_Projectbyid(project_id)),
    Add_Project:(objproject,fieldName)=>dispatch(Add_Project(objproject,fieldName)),
    Edit_Project:(objproject,fieldName)=>dispatch(Edit_Project(objproject,fieldName)),
    Delete_Field:(objproject,fieldName)=>dispatch(Delete_Field(objproject,fieldName)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectOverview);
