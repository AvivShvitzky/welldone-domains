// libraries and css
import React from 'react';
import './HeadingSecondary.css';

const HeadingSecondary = ({ children }) => {
  return (
    <div className="heading--secondary">{children}</div>
  );
};

export default HeadingSecondary;
