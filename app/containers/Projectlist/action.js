import {
  DELETE_PROJECT,
  LOAD_PROJECTS
} from './constant';
import {fnget_projects} from 'api';
import {saveStateWithKey} from 'Localstorage';

export function Delete_Project(project_id) {
  return {
    type: DELETE_PROJECT,
    project_id,
  };
}
export function Load_Projects() {
const projectlist=[
  {project_id:'1',project_name:'Tawanmandi Project',logo_url:'',description:'',budget:'',donor:'',mission:'',vision:''},
  {project_id:'2',project_name:'Project 1',logo_url:'',description:'',budget:'',donor:'',mission:'',vision:''},
  {project_id:'3',project_name:'Project 2',logo_url:'',description:'',budget:'',donor:'',mission:'',vision:''},
  {project_id:'4',project_name:'Project 3',logo_url:'',description:'',budget:'',donor:'',mission:'',vision:''},
  {project_id:'5',project_name:'Project 4',logo_url:'',description:'',budget:'',donor:'',mission:'',vision:''},
  {project_id:'6',project_name:'Project 5',logo_url:'',description:'',budget:'',donor:'',mission:'',vision:''}
];
fnget_projects()
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});

saveStateWithKey('projectlist',projectlist);
  return {
    type: LOAD_PROJECTS,
    projectlist,
  };
}
