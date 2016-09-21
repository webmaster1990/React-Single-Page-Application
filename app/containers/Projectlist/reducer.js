import {
  DELETE_PROJECT,
  LOAD_PROJECTS
} from './constant';
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  projectlist:[]
});

function ProjectsReducer(state = initialState, action) {
  switch (action.type) {

    case DELETE_PROJECT:
    {
      return state
        .set('projectlist', state.get('projectlist').filter((item)=>(item.project_id != action.project_id)));
        break;
    }
    case LOAD_PROJECTS:
      return state
        .set('projectlist', action.projectlist);
    default:
      return state;
  }
}

export default ProjectsReducer;
