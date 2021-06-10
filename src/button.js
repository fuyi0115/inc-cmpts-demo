import React from 'react';
import classnames from 'classnames';

import './button.less';

const Button = (props) => {
  return (
    <button
      className={
        classnames('button', { 'large': props.size === 'large' })
      }
      style={{ color: props.color }}
    >
      {props.children}
    </button>
  );
};

export default Button;