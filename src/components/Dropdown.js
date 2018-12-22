import React from 'react';

const Dropdown = ({ items = [] }) => (
  <div className="Dropdown">
    <ul>
      {items.map(item => (
        <li key={item}>
          <a href="/">{item}</a>
        </li>
      ))}
    </ul>
    <button className="Button__drop" type="button">
      Logout
    </button>
  </div>
);

export default Dropdown;
