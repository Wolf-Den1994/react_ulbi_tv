import React from 'react';
import classes from './MyButton.module.css';

const MyButton = ({ children, ...props }) => {
  console.log(classes.myBtn)
  return (
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  );
};

export default MyButton;
