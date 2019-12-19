import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '@/redux/actions/actions'
import AppRouter from '@/routers/app'
import './App.scss'

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
      <AppRouter></AppRouter>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    updateDeviceType: (payload) => dispatch({ type: actionTypes.UPDATE_DEVICE_TYPE, payload})
  }
}

export default connect(null, mapDispatchToProps)(App)
