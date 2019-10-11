import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Adapter from 'enzyme-adapter-react-16'
import NewsList from './NewsList'
import News from './News/News'

const mockStore = configureStore([thunk])
configure({ adapter: new Adapter()})

describe('<NewsList /> component', () => {
  const initialState = {
    search: ''
  }
  let wrapper
  let store
  beforeEach(() => {
    store = mockStore(initialState)
  })
  it('should have props.search with initialized value', () => {
    wrapper = shallow(<NewsList store={store}/>).shallow()
    expect(wrapper.props().search).toBe(initialState.search)
  })
  it('should have load-more-button', () => {
    wrapper = mount(<Provider store={store}><NewsList/></Provider>)
    expect(wrapper.find('#load-more-btn')).toHaveLength(1)
  })
  it('should render 15 news item at the beginning', () => {
    wrapper = mount(<Provider store={store}><NewsList/></Provider>)
    expect(wrapper.find(News)).toHaveLength(15)
  })
})
