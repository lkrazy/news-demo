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
          Footer [Todo]
        </div>
      </div>
    );
  }

}

export default App;
