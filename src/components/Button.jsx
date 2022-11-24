import React from 'react';
import PropTypes from 'prop-types';

const Button = ({classes, text, onClick}) => {
  return (
    <button 
      type="button" 
      className={classes} 
      onClick={onClick}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  classes: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button;