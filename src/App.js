import React from 'react';
import './App.css';
import Check from './component/Check';
import Header from './component/Header'
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header/><br/>
      <Check/><br/>
      <Footer/>
    </div>
  );
}

export default App;
