import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NewsList from './NewsList'
import News from './News/News'

configure({ adapter: new Adapter()})

describe('<NewsList />', () => {
  it('should render 15 news item at the beginning', () => {
    const wrapper = shallow(<NewsList/>)
    expect(wrapper.find(News)).toHaveLength(15)
  })
})
