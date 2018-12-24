import React from 'react';

const AvatarUser = ({ img = '', width = 60, heigth = 60 }) => (
  <img
    className="AvatarUser"
    src={img}
    alt="user avatar"
    width={width}
    heigth={heigth}
  />
);

export default AvatarUser;
