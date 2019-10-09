import React from 'react'
import './SearchBox.scss'

const SearchBox = (props) => {
  return (
    <div className="SearchBox">
      <div className="control has-icons">
        <span className="icon is-small is-left">
          <i className="fas fa-user"></i>
        </span>
        <input className="input is-success" type="text" placeholder="Search" value={props.search} onChange={props.changed} />
      </div>
    </div>
  )
}

export default SearchBox;
