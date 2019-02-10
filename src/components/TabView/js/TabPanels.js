import React from 'react';

export const TabPanels = ({ selectedIndex, children }) =>
  React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      selected: selectedIndex === index
    })
  );

export default TabPanels;
