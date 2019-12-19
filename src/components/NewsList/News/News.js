import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import './News.scss'

class News extends Component {
  render() {
    const { title, image, content, isMobile, updated } = this.props.data
    let updatedAt
    if (isMobile) {
      updatedAt = moment(updated).format('MMMM DD, hh:mm')
    } else {
      updatedAt = moment(updated).format('DD MMMM, YYYY hh:mm')
    }

    return (
      <div className="news">
        <div className="news-inner">
          <div className="news-title">{title}</div>
          <div className="news-image"><img alt={title} src={image}/></div>
          <div className="news-content">{content}</div>
          <div className="news-history">Updated: {updatedAt}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isMobile: state.isMobile
  }
}

export default connect(mapStateToProps)(News)
