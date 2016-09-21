import {
  ADD_PROJECT,
  EDIT_PROJECT,
  DELETE_FIELD,
  LOAD_PROJECT_BY_ID
} from './constant';

import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  project:{
    project_id:0,project_name:'',logo_url:'',description:'',budget:'',donor:'',mission:'',vision:''
  }
});

function ProjectReducer(state = initialState, action) {
  switch (action.type) {

    case ADD_PROJECT:
    {
      console.log(action);
      // return
      //   state.set('project', action.objproject)
    };
    case EDIT_PROJECT:
    {

      return state
      .set('project', action.objproject);
    }
    case DELETE_FIELD:
    {
      return state
      .set('project', action.objproject);
    }
    case LOAD_PROJECT_BY_ID:
    {
      console.log("Load ProjectBy id");
      return state
        .set('project', action.objproject);
    }
    default:
      return state;
  }
}

export default ProjectReducer;
