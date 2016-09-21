const GetProject = () => {
  return (state) => {
    const routingState = state.get('project');
    const currentproject=routingState.get('project');
    return currentproject;
  };
};

export {GetProject};
