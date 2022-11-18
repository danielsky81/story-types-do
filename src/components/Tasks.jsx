import React from 'react'
// import PropTypes from 'prop-types'

const Tasks = props => {
  const todos = props.todos.map(todo => (
    <div key={todo.id}>
      <div>{todo.name}</div>
      <div>{todo.importance}</div>
      <div>{todo.status}</div>
    </div>
  ))
  return (
    <section className='container-fluid'>
      <h2>My List of Tasks</h2>
      <div className='d-flex'>
        {todos}
      </div>
    </section>
  )
}

// Tasks.propTypes = {}

export default Tasks