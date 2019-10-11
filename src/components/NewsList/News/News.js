import React, { Component } from 'react'
import moment from 'moment'
import './News.scss'

class News extends Component {
  state = {
    isMobile: false
  }

  onWindowSizeChanged() {
    if (window.innerWidth > 768) {
      this.setState({
        isMobile: false
      })
    } else {
      this.setState({
        isMobile: true
      })
    }
  }

  componentDidMount() {
    this.onWindowSizeChanged()
    window.addEventListener('resize', this.onWindowSizeChanged.bind(this))
  }

  render() {
    let updatedAt = this.props.data.updated
    if (this.state.isMobile) {
      updatedAt = moment(this.props.data.updated).format('MMMM DD, hh:mm')
    } else {
      updatedAt = moment(this.props.data.updated).format('DD MMMM, YYYY hh:mm')
    }
    return (

      <div className="news">
        <div className="news-inner">
          <div className="news-title">{this.props.data.title}</div>
          <div className="news-image"><img alt={this.props.data.title} src={this.props.data.image}/></div>
          <div className="news-content">{this.props.data.content}</div>
          <div className="news-history">Updated: {updatedAt}</div>
        </div>
      </div>
    )
  }
}

export default News
