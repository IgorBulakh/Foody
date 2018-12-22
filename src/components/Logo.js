import React from 'react';

const Logo = ({ image = ' ', width = 60, heigth = 60 }) => (
  <image src={image} alt="app logo" width={width} heigth={heigth} />
);

export default Logo;
