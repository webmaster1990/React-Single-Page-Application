import React from 'react';

const Button = (
  {
      children,
      type = 'button',
      onClick,
      ...props
  }
) => {
  return (
    <button
      type={ type }
      onClick={ onClick }
      {...props}>
      { children }
    </button>
  );
}

Button.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string,
  type: React.PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: React.PropTypes.func,
};

export default Button;
