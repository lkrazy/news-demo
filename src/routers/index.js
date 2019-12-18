import React from 'react'
import {
  BrowserRouter,
  Switch,
  Redirect,
  Route
} from 'react-router-dom'

class AppRouter extends React.Component {
  render() {
    return pug`
      Router
        Switch
          Route(
          )
    `
  }
}

export default AppRouter
