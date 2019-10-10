import React from 'react'
import './News.scss'

const News = (props) => {
  return (
    <div className="news">
      <div className="news-inner">
        <div className="news-title">{props.data.title}</div>
        <div className="news-image"><img alt={`Image: ${props.data.title}`}/></div>
        <div className="news-content">{props.data.content}</div>
        <div className="news-history">Updated: {props.data.updated}</div>
      </div>
    </div>
  )
}

export default News
