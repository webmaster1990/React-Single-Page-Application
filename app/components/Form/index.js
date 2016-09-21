import React from 'react';

const Form = (
  {
    children,
    handleSubmit,
    ...props
  }
)=>
 {
  return (
    <form
      onSubmit={handleSubmit}
    {...props}>
      { children }
    </form>
  );
}

Form.propTypes = {
  children: React.PropTypes.node,
  handleSubmit: React.PropTypes.func,
};

export default Form;
