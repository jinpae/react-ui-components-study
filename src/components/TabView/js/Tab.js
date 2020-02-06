import React, { useContext, useRef, useEffect } from 'react';
import classNames from 'classnames';
import TabContext from '../../../contexts/TabContext';

const Tab = ({ className, disabled, children }) => {
  const { tabs, setTabs, selectedIndex, onChange } = useContext(TabContext);
  const ref = useRef();

  useEffect(() => {
    setTabs(tabs => tabs.concat(ref.current));
  }, []);

  const index = tabs.findIndex(tab => tab === ref.current);
  const tabClassNames = classNames(className, 'tab', {
    active: index === selectedIndex
  });

  return (
    <button
      ref={ref}
      className={tabClassNames}
      onClick={disabled ? undefined : () => onChange(index)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Tab;
