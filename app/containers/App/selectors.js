  // selectLocationState expects a plain JS object for the routing state
const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

const GetCurrentProject = () => {
  return (state) => {
    const routingState = state.get('global');
    const currentproject=routingState.get('currentproject');
    return currentproject;
  };
};

const GetCurrentBoundry = () => {
  return (state) => {
    const routingState = state.get('global');
    const currentboundry=routingState.get('currentboundry');
    return currentboundry;
  };
};

export {
  GetCurrentProject,
  selectLocationState,
  GetCurrentBoundry,
};
