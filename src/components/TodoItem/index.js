/* eslint-disable react/button-has-type */
import {Component} from 'react'

import './index.css'

class TodoItem extends Component {
  state = {details: this.props}

  onDelete = () => {
    const {details} = this.state
    details.deleteUser(details.uniqueId)
  }

  render() {
    const {details} = this.state
    return (
      <div className="list">
        <li className="list">
          <p>{details.details.title}</p>
        </li>
        <button onClick={this.onDelete} type="button">
          Delete
        </button>
      </div>
    )
  }
}

export default TodoItem
