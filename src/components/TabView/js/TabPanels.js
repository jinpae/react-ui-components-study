import React from 'react';
import classNames from 'classnames';

export const TabPanels = ({ className, children }) => {
  const tabPanelsClassNames = classNames(className, 'tab-panels');

  return <div className={tabPanelsClassNames}>{children}</div>;
};

export default TabPanels;
