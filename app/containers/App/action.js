import {
  SET_CURRENT_PROJECT,
  SET_CURRENT_BOUNDRY,
} from './constant';

export function SetCurrentProject(currentproject) {
  return {
    type: SET_CURRENT_PROJECT,
    currentproject,
  };
}

export function SetCurrentBoundry(currentboundry) {
  return {
    type: SET_CURRENT_BOUNDRY,
    currentboundry,
  };
}



