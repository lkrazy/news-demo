import React, { Component } from 'react'
import { connect } from 'react-redux'
import News from './News/News'
import './NewsList.scss'

class NewsList extends Component{
  state = {
    newsList: []
  }

  componentDidMount() {
    this.loadMore()
  }

  loadMore = () => {
    let count = this.state.newsList.length
    const more = []
    for (let i = 0; i < 15; i++) {
      more.push({
        title: `Title ${++count}`,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        updated: new Date().toDateString()
      },)
    }
    this.setState({
      newsList: [...this.state.newsList, ...more]
    })
  }

  render() {
    const filteredNewsList = this.state.newsList.filter((news) => {
      return news.title.toLowerCase().includes(this.props.search) || news.content.toLowerCase().includes(this.props.search)
    })
    const NewsListEl = filteredNewsList.map((news, index) => {
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
