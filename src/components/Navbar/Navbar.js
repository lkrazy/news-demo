import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './Navbar.scss'
import SearchBox from '../SearchBox/SearchBox'

class Navbar extends Component {
  state = {
    expand: false
  }

  onExpandClick = () => {
    this.setState(
      {
        expand: !this.state.expand
      }
    )
  }

  render() {

    const toggleClasses = ['navbar-toggle']
    const menuClasses = []
    if (this.state.expand) {
      menuClasses.push('expanded')
      toggleClasses.push('active')
    }

    return (
      <div className="navbar">
        <div className="navbar-header">
          <div className="app-name">
            News
          </div>
          <div className={toggleClasses.join(' ')}
               onClick={this.onExpandClick}
          >
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
            <FontAwesomeIcon className="close-icon" icon={faTimes} />
          </div>
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
