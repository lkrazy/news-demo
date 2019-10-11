import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import * as actionTypes from '../../store/actions'
import './SearchBox.scss'


const SearchBox = (props) => {
  return (
    <div className="search-box">
      <div className="control has-icons">
        <span className="icon is-small is-left">
          <FontAwesomeIcon icon={faSearch}/>
        </span>
        <input
          className="input is-success"
          type="text"
          placeholder="Search"
          value={props.search}
          onChange={props.onSearchChange} />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    search: state.search
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch({ type: actionTypes.UPDATE_SEARCH, payload: event.target.value})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)
