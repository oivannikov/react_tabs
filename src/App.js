import React from 'react';
import './App.css';
import { Tabs } from './Components/Tabs/Tabs';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Tab 1',
    content: 'Some text 1',
  },
  {
    title: 'Tab 2',
    content: 'Some text 2',
  },
  {
    title: 'Tab 3',
    content: 'Some text 3',
  },
];

const App = () => (
  <div className="wrapper">
    <h1 className="title">React tabs</h1>
    <Tabs
      tabs={tabs}
      default={tabs[0].content}
    />
  </div>
);

export default App;
