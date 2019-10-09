import React, { Component } from 'react'
import './HeaderBar.scss'
import SearchBox from '../SearchBox/SearchBox'

class HeaderBar extends Component {
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
      <div id="HeaderBar" className="navbar">
        <div className="navbar-header">
          <button className="navbar-toggle" onClick={this.onExpandClick}>
            <span className="fa-bars"></span>
          </button>
          <div className="navbar-item Logo-container">
            <img className=""/>
          </div>
        </div>
        <div id="MenuContainer" className={menuClasses.join(' ')}>
          <div className="navbar-menu">
            <div className="navbar-item">News</div>
            <div className="navbar-item">Region</div>
            <div className="navbar-item">Video</div>
            <div className="navbar-item">TV</div>

          </div>

        </div>
        <div className="Menu-content SearchBox-container">
          <SearchBox search={this.props.search} changed={this.props.searchChanged}/>
        </div>
      </div>
    )
  }

}

export default HeaderBar
