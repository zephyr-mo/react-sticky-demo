import React, { memo } from 'react';
// import { StickyContainer, Sticky } from 'react-sticky';
import Header from './header';
import './App.css';

function App() {
  let list = [];
  list.length = 100;
  list.fill(1, 0, 100);

  return (
    <div className="App">
      <Header >
        <div style={{ marginTop: 52 }}>
        {
          list.map((item, index) => <h1 key={index}>header demo</h1>)
        }
        </div>
      </Header>
    </div>
  );
}

export default memo(App);
