// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const Buttons = ({ children, className }) => {
    return (
      <button className={className}>
        {children}
      </button>
    );
  };
  
  export default Buttons;