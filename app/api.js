import axios from 'axios';
import {loadStateWithKey} from 'Localstorage'

axios.defaults.baseURL = 'http://demo.lucidcollaborative.com:8000/api';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
const ApiKey=loadStateWithKey('apikey');
console.log(ApiKey);
if(ApiKey==undefined)
ApiKey.apikey="jnfjinwjifnjiwneffewnidjqnjdn";

export function fnlogin(email,password){
  const data = new FormData();
   data.append('email', email);
   data.append('password', password);
   console.log(data);
   return  axios.post('/login',data);
}

export function fnget_projects(){
  return  axios.get('/projects',{
    headers:{"X-Api-Key":ApiKey.apikey
  }
  });
}
export function fnadd_project(object,password){
  return  axios.post('/projects/add');
}

export function fnedit_project(objproject,fieldName){
  const ProjectID = objproject.project_id;
  var obj = {};
  obj[fieldName] = objproject[fieldName];
  const paramData = obj;
  const Url = `/projects/${ProjectID}/update/${fieldName}`;
  return  axios.post(Url);
}
export function fndelete_project(project_id,fieldName){
  return  axios.post('/login');
}
export function fnadd_boundarypartners(object,password){
  const Url = `/projects/${ProjectID}/add_boundary_partner`;
  return  axios.post(Url);
}

export function fnget_partnerslist(object,password){
  const Url = `/projects/${ProjectID}/${partnerId}`;
  return  axios.get(Url);
}

export function fnadd_progress_marker(object,password){
  const Url = `/projects/${ProjectID}/${partnerId}/add_progress_marker`;
  return  axios.post(Url);
}
export function fnadd_challenge(object,password){
  const Url = `/projects/${ProjectID}/${partnerId}/${progressMarkerId}/add_challenge`;
  return  axios.post(Url);
}
export function fnadd_strategy(object,password){
  const Url = `/projects/${ProjectID}/${partnerId}/${progressMarkerId}/add_strategy`;
  return  axios.post(Url);
}
