import React from 'react'
import ReactDOM from 'react-dom'
import { configure, shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import App from './App'
import Adapter from 'enzyme-adapter-react-16/build';

const mockStore = configureStore([thunk])
configure({ adapter: new Adapter()})

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

describe('<App />', () => {
  const initialState = {
    search: '',
    isMobile: false
  }
  let store
  beforeEach(() => {
    store = mockStore(initialState)
  })
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App store={store}/>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

