import React, { Component } from 'react'
import { connect } from 'react-redux'
import News from './News/News'
import './NewsList.scss'
import newsApi from '../../api/news'

const rowsPerPage = 15

class NewsList extends Component{
  state = {
    search: '',
    newsList: [],
    pageIndex: 0,
    total: -1,
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

    const NewsListEl = this.state.newsList.map((news, index) => {
      return (
        <News key={index}
              data={news}>
        </News>
      )
    })
    return (
      <div>
        <div className="news-list">
          {NewsListEl}
        </div>
        <button id="load-more-btn"
                disabled={!this.hasMore()}
                onClick={this.loadMore}
        >
          Load More
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search
  }
}

export default connect(mapStateToProps)(NewsList)
