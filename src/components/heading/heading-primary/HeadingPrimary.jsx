// libraries and css
import React from 'react';
import './HeadingPrimary.css';

const HeadingPrimary = ({ children }) => {
  return (
    <div className="heading--primary">{children}</div>
  );
};

export default HeadingPrimary;
