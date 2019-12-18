import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import './News.scss'

class News extends Component {
  render() {
    const { title, image, content } = this.props.data
    let updatedAt
    if (this.props.isMobile) {
      updatedAt = moment(this.props.data.updated).format('MMMM DD, hh:mm')
    } else {
      updatedAt = moment(this.props.data.updated).format('DD MMMM, YYYY hh:mm')
    }

    return pug`
      div.news
        div.news-inner
          div.news-title #{title}
          div.news-image
            img(alt=title src=image)
            
          div.news-content #{content}
          div.news-history Updated: #{updatedAt}
    `
    // return (
    //   <div className="news">
    //     <div className="news-inner">
    //       <div className="news-title">{this.props.data.title}</div>
    //       <div className="news-image"><img alt={this.props.data.title} src={this.props.data.image}/></div>
    //       <div className="news-content">{this.props.data.content}</div>
    //       <div className="news-history">Updated: {updatedAt}</div>
    //     </div>
    //   </div>
    // )
  }
}

const mapStateToProps = (state) => {
  return {
    isMobile: state.isMobile
  }
}

export default connect(mapStateToProps)(News)
