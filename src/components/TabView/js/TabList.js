import React from 'react';
import classNames from 'classnames';

export const TabList = ({ className, children }) => {
  const tabListClassNames = classNames(className, 'tab-list');

  return <div className={tabListClassNames}>{children}</div>;
};

export default TabList;
