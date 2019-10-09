import React from 'react'
import './News.scss'

const News = (props) => {
  return (
    <div className="News">
      <div className="News-inner">
        <div className="News-title">{props.title}</div>
        <div className="News-image"><img alt={props.title}/></div>
        <div className="News-content">{props.content}</div>
        <div className="News-history">Updated: {props.updated}</div>
      </div>
    </div>
  )
}

export default News
