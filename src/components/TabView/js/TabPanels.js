import React from 'react';

export const TabPanels = ({ selectedIndex, children }) => (
  <div className="tab-panels">{children[selectedIndex]}</div>
);

export default TabPanels;
