import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import NewsList from './components/NewsList/NewsList'
import * as actionTypes from './store/actions'

class App extends Component {

  onWindowSizeChanged() {
    let isMobile = true
    if (window.innerWidth > 768) {
      isMobile = false
    }
    this.props.updateDeviceType(isMobile)
  }

  componentDidMount() {
    this.onWindowSizeChanged()
    window.addEventListener('resize', this.onWindowSizeChanged.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowSizeChanged.bind(this))

  }

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
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    updateDeviceType: (payload) => dispatch({ type: actionTypes.UPDATE_DEVICE_TYPE, payload})
  }
}

export default connect(null, mapDispatchToProps)(App)
