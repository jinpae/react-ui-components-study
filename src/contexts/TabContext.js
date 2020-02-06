import { createContext } from 'react';

const TabContext = createContext({
  tabs: [],
  setTabs: () => {}
});

export default TabContext;
