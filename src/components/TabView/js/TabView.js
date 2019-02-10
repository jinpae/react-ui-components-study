import React from 'react';

export default class TabView extends React.Component {
  state = {
    selectedIndex: 0
  };

  static defaultProps = {
    onSelect: () => {}
  };

  handleSelect = index => {
    this.setState({ selectedIndex: index });
    this.props.onSelect(index);
  };

  render() {
    const { selectedIndex } = this.state;

    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        selectedIndex,
        onSelect: this.handleSelect
      });
    });

    return <div className="tab-view">{children}</div>;
  }
}
