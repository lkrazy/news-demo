import React, {lazy, Suspense} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const Home = lazy( () => import('@/containers/Home/Home'))
const Login = lazy( () => import('@/containers/Login/Login'))
const Register = lazy( () => import('@/containers/Register/Register'))



class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <Home></Home>
                </Suspense>
              )}
            />
            <Route
              exact
              path="/login"
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <Login></Login>
                </Suspense>
              )}
            />
            <Route
              exact
              path="/register"
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <Register></Register>
                </Suspense>
              )}
            />
          </Switch>
        </Switch>
      </Router>
    )
  }
}

export default AppRouter
