import React from 'react';

const AvatarUser = ({ image = '', width = 60, heigth = 60 }) => (
  <image
    ClassName="AvatarUser"
    src={image}
    alt="user avatar"
    width={width}
    heigth={heigth}
  />
);

export default AvatarUser;
