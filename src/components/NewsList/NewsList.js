import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import News from './News/News'
import './NewsList.scss'
import newsApi from '@/services/news'

const rowsPerPage = 15

class NewsList extends PureComponent{
  state = {
    search: '',
    newsList: [],
    pageIndex: 0,
    total: -1,
    isMobile: false,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.search !== prevState.search) {
      return {
        search: nextProps.search,
        newsList: [],
        pageIndex: 0,
        total: -1
      }
    }
    return prevState
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.search !== this.state.search) {
      this.loadMore()
    }
  }

  componentDidMount() {
    this.loadMore()
  }

  loadMore = () => {
    if (!this.hasMore()) {
      return
    }
    const response = newsApi.getAll(this.state.pageIndex + 1, rowsPerPage, this.props.search)

    this.setState({
      newsList: [...this.state.newsList, ...response.data],
      pageIndex: this.state.pageIndex + 1,
      total: response.total,
    })
  }

  hasMore() {
    return this.state.total < 0 ||
      (this.state.total > 0 && (this.state.pageIndex * rowsPerPage) < this.state.total)
  }

  render() {
    return pug`
      div
        div.news-list
          each news, index in this.state.newsList
            News(key=index data=news)
            
        button#load-more-btn(disabled=!this.hasMore() onClick=this.loadMore) Load More
    `
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search
  }
}

export default connect(mapStateToProps)(NewsList)
