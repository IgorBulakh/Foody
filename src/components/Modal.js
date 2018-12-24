import React, { Component } from 'react';

export default class Modal extends Component {
  state = {};

  render() {
    const { onClose } = this.props;
    return (
      <div className="Backdrop">
        <div className="ModalWindow">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            nemo recusandae sequi rerum, nesciunt corporis quisquam animi
          </p>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
