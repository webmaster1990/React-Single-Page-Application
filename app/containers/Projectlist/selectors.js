const GetProjectList = () => {
  return (state) => {
    const routingState = state.get('projectlist');
    const currentproject=routingState.get('projectlist');
    return currentproject;
  };
};

export {GetProjectList};
