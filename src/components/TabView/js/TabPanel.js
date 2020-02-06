import React, { useRef, useEffect, useContext } from 'react';
import classNames from 'classnames';
import TabContext from '../../../contexts/TabContext';

const TabPanel = ({ className, children }) => {
  const { tabPanels, setTabPanels, selectedIndex } = useContext(TabContext);
  const ref = useRef();

  useEffect(() => {
    setTabPanels(tabPanels => [...tabPanels, ref.current]);
  }, []);

  const index = tabPanels.findIndex(tabPanel => tabPanel === ref.current);
  const tabPanelClassNames = classNames(className, 'tab-panel');

  return (
    <div
      ref={ref}
      className={tabPanelClassNames}
      hidden={index !== selectedIndex}
    >
      {children}
    </div>
  );
};

export default TabPanel;
