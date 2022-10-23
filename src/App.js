import React from 'react';
import './App.css';
import ReactJSX from './components/ReactJSX';
import CompAndProps  from './components/CompAndProps';
import TextInput from './elements/TextInput';
import './script.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactJSX />

        <div className="Components">
          <CompAndProps bgColor="#00ff00"/>
          <form action="">
            <TextInput border="red" placeholder="Nama or NIM" onKeyUp={dataFilter()}/>
          </form>
          </div>
       
      </header>
    </div>
  );
}

export default App;