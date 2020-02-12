import React, { Component } from 'react';
import {
  TabView,
  TabList,
  Tab,
  TabPanels,
  TabPanel
} from './components/TabView';
import Accordion from './components/Accordion/Accordion';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Tab</p>
          <TabView
            onChange={selectedIndex =>
              console.log(`[Tab] onChange: selectedIndex: ${selectedIndex}`)
            }
          >
            <TabList>
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
              <Tab disabled>Tab 3</Tab>
              <Tab>Tab 4</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>One</TabPanel>
              <TabPanel>Two</TabPanel>
              <TabPanel>Three</TabPanel>
              <TabPanel>Four</TabPanel>
            </TabPanels>
          </TabView>
          <p>Accordion</p>
          <Accordion
            onChange={selectedIndex =>
              console.log(
                `[ACCORDION] onChange: selectedIndex: ${selectedIndex}`
              )
            }
          >
            <Accordion.Item>
              <Accordion.Header>Header 1</Accordion.Header>
              <Accordion.Panel>Panel 1 content</Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item>
              <Accordion.Header>Header 2</Accordion.Header>
              <Accordion.Panel>Panel 2 content</Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </header>
      </div>
    );
  }
}

export default App;
