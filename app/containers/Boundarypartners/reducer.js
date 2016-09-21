import {
  DELETE_PARTNER,
  LOAD_PARTNERS
} from './constant';
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  partnerlist:[]
});

function PartnerReducer(state = initialState, action) {
  switch (action.type) {

    case DELETE_PARTNER:
    {
      return state
        .set('partnerlist', state.get('partnerlist').filter((item)=>(item.boundary_partner_id != action.boundary_partner_id)));
        break;
    }
    case LOAD_PROJECTS:
      return state
        .set('partnerlist', action.partnerlist);
    default:
      return state;
  }
}

export default ProjectsReducer;
