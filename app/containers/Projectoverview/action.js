import {
  ADD_PROJECT,
  EDIT_PROJECT,
  DELETE_FIELD,
  LOAD_PROJECT_BY_ID
} from './constant';
import {loadStateWithKey} from '../../Localstorage';
import {fnadd_project,fnedit_project,fndelete_project} from 'api';
let ii =0;
export function Add_Project(objproject,fieldName) {
    console.log("s");
    fnadd_project(objproject)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  return {
    type: ADD_PROJECT,
    objproject
  };
}
export function Edit_Project(objproject,fieldName) {
  fnedit_project(objproject,fieldName)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  return {
    type: EDIT_PROJECT,
    objproject
  };
}
export function Delete_Field(objproject,fieldName) {
  objproject[fieldName]="";
  fndelete_project(objproject,fieldName)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  return {
    type: DELETE_FIELD,
    objproject
  };
}
export function Load_Projectbyid(project_id) {
  var projectlist=loadStateWithKey('projectlist');
  var objproject={};
  if(projectlist!=undefined && projectlist.length>0 && project_id!=0)
  {
      objproject=projectlist.filter((item)=>(item.project_id == project_id))[0];
  }
  else {
    objproject={project_id:project_id,project_name:'',logo_url:'',description:'',budget:'',donor:'',mission:'',vision:''};
  }
     //{project_id:id,project_name:'',logo_url:'',description:'',budget:'',donor:'',mission:'',vision:''};
  return {
    type: LOAD_PROJECT_BY_ID,
    objproject,
  };
}
