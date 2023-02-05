import React from 'react';
import BannerImage from './components/BannerImage';
import Album from './components/Album.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BannerImage/>
        <div>
          <h1>Discovering Pakistan</h1>
          <h4>By: Jawad Ali</h4>
          <Album/>
        </div>
      </header>
    </div>
  );
}

export default App;
