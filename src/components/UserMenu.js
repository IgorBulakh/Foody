import React, { Component, createRef } from 'react';
import Dropdown from './Dropdown';
import AvatarUser from './AvatarUser';

const itemDropdown = ['account', 'order history', 'meal planer'];

export default class Usermenu extends Component {
  containerRef = createRef();

  state = {
    isDropDownOpen: false,
  };

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isDropDownOpen } = this.state;

    return nextState.isDropDownOpen !== isDropDownOpen;
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  handleWindowClick = e => {
    const isTargetInsideContainer = this.containerRef.current.contains(
      e.target,
    );

    const { isDropDownOpen } = this.state;

    if (isDropDownOpen && !isTargetInsideContainer) {
      this.closeDropdown();
    }
  };

  openDropdown = () => {
    this.setState({ isDropDownOpen: true });
  };

  closeDropdown = () => {
    this.setState({ isDropDownOpen: false });
  };

  render() {
    const { isDropDownOpen } = this.state;
    const { name, avatar } = this.props;

    return (
      <div
        onClick={this.openDropdown}
        className="UserMenu"
        ref={this.containerRef}
      >
        <AvatarUser image={avatar} />
        <span className="UserName">{name}</span>
        {isDropDownOpen && <Dropdown items={itemDropdown} />}
      </div>
    );
  }
}
