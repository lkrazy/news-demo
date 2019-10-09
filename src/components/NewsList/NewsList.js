import React from 'react'
import News from './News/News'
import './NewsList.scss'

const NewsList = (props) => {
  const NewsListEl = props.newsList.map((news, index) => {
    return (
      <News key={index} title={news.title} image={news.image} updated={news.updated} content={news.content}></News>
    )
  })
  return (
    <div>
      <div className="NewsList">
        {NewsListEl}
      </div>
      <button id="load-more-btn"
              onClick={props.loadMore}
      >
        Load More
      </button>
    </div>
  )
}

export default NewsList
