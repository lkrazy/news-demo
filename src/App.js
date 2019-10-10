import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar'
import NewsList from './components/NewsList/NewsList';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Navbar/>
        <div className="app-content">
          <NewsList/>
        </div>
        <div className="app-footer">
          <div className="menu">
            <span className="menu-item">
              News
            </span>
            <span className="menu-item">
              Region
            </span>
            <span className="menu-item">
              Video
            </span>
            <span className="menu-item">
              TV
            </span>
          </div>
          <div className="copy-right">
            Copy right &#9400; AMPOS
          </div>
        </div>
      </div>
    );
  }

}

export default App;
