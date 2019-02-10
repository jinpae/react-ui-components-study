import React, { Component } from 'react';
import './App.css';
import {
  TabView,
  TabList,
  Tab,
  TabPanels,
  TabPanel
} from './components/TabView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>React UI Components Study with Advanced Patterns</p>
          <p>
            1. <code>Tab</code> using <code>cloneElement</code>
          </p>
          <TabView
            onSelect={selectedIndex =>
              console.log('Selected tab index', selectedIndex)
            }
          >
            <TabList>
              <Tab>Tab 1</Tab>
              <Tab disabled>Tab 2</Tab>
              <Tab>Tab 3</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>One</TabPanel>
              <TabPanel>Two</TabPanel>
              <TabPanel>Three</TabPanel>
            </TabPanels>
          </TabView>
        </header>
      </div>
    );
  }
}

export default App;
