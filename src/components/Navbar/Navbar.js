import React, { Component } from 'react'
import './Navbar.scss'
import SearchBox from '../SearchBox/SearchBox'

class Navbar extends Component {
  state = {
    expand: false
  }

  onExpandClick = () => {
    console.log('onExpand')
    this.setState(
      {
        expand: !this.state.expand
      }
    )
  }

  render() {

    const menuClasses = []
    if (this.state.expand) {
      menuClasses.push('expanded')
    }

    return (
      <div className="navbar">
        <div className="navbar-header">
          <button className="navbar-toggle" onClick={this.onExpandClick}>
            <span className="fa-bars"></span>
          </button>
          <div className="navbar-item logo-container">
            <img className="" src="logo192.png" alt="News App Logo"/>
          </div>
        </div>
        <div id="menu-container" className={menuClasses.join(' ')}>
          <div className="navbar-menu">
            <div className="navbar-item">News</div>
            <div className="navbar-item">Region</div>
            <div className="navbar-item">Video</div>
            <div className="navbar-item">TV</div>

          </div>

        </div>
        <div className="search-box-container">
          <SearchBox/>
        </div>
      </div>
    )
  }

}

export default Navbar
