import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

jest.mock('./components/Navbar/Navbar', () => {
  return (
    () => (<div className="navbar"></div>)
  )
})
jest.mock('./components/NewsList/NewsList', () => {
  return (
    () => (<div className="news-list"></div>)
  )
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
});
