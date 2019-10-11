import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import './News.scss'

class News extends Component {
  render() {
    let updatedAt
    if (this.props.isMobile) {
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

const mapStateToProps = (state) => {
  return {
    isMobile: state.isMobile
  }
}

export default connect(mapStateToProps)(News)
