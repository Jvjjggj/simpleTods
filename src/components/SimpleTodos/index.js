import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    uniqueId: 1,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    uniqueId: 2,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    uniqueId: 3,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    uniqueId: 4,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    uniqueId: 5,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    uniqueId: 6,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    uniqueId: 7,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    uniqueId: 8,
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {
    todoLst: initialTodosList,
  }

  deleteUser = idd => {
    const {todoLst} = this.state
    const filterData = todoLst.filter(i => i.uniqueId !== idd)
    this.setState({todoLst: filterData})
  }

  render() {
    const {todoLst} = this.state

    return (
      <div className="mainContainer">
        <div className="card">
          <h1 className="head">Simple Todos</h1>
          <ul>
            {todoLst.map(i => (
              <TodoItem
                details={i}
                key={i.id}
                deleteUser={this.deleteUser}
                uniqueId={i.uniqueId}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
