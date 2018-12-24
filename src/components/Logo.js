import React from 'react';

const Logo = ({ img = ' ', width = 60, heigth = 60 }) => (
  <img src={img} alt="app logo" width={width} heigth={heigth} />
);

export default Logo;
