import React from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import SearchCom from './component/searchCom';
import ResultCom from './component/resulutCom';

function App() {
  return (
    <div className="App">
      <SearchCom />
      <ResultCom />
    </div>
  );
}

export default App;
