import React, { useState } from 'react';
import TabContext from '../../../contexts/TabContext';

function TabView({ children, onChange }) {
  const [tabs, setTabs] = useState([]);
  const [tabPanels, setTabPanels] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = index => {
    setSelectedIndex(index);
    onChange(index);
  };

  return (
    <TabContext.Provider
      value={{
        tabs,
        setTabs,
        tabPanels,
        setTabPanels,
        selectedIndex,
        onChange: handleChange
      }}
    >
      <div className="tab-view">{children}</div>
    </TabContext.Provider>
  );
}

export default TabView;
