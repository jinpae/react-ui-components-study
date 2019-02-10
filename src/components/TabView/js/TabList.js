import React from 'react';

export const TabList = ({ selectedIndex, onSelect, children }) => {
  const tabs = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      selected: selectedIndex === index,
      onSelect: () => onSelect(index)
    });
  });

  return <div className="tab-list">{tabs}</div>;
};

export default TabList;
