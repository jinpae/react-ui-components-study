import React from 'react';

const TabPanel = ({ selected, children }) => {
  return selected ? <div>{children}</div> : null;
};

export default TabPanel;
