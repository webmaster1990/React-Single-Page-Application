

import {
  SET_CURRENT_PROJECT,
  SET_CURRENT_BOUNDRY,
} from './constant';
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  currentproject:fromJS({project_name:'Fill New Project Detail',project_id:0}),
  currentboundry:fromJS({partner_name:'Boundry Partner',boundary_partner_id:0}),
});

function AppReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_PROJECT:
      return state
        .set('currentproject', action.currentproject);
    case SET_CURRENT_BOUNDRY:
      return state
        .set('currentboundry', action.currentboundry);
    default:
      return state;
  }
}

export default AppReducer;
