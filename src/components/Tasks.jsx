import React from 'react'
// import PropTypes from 'prop-types'

const Tasks = props => {
  const todos = props.todos.map(todo => (
    <div key={todo.id} className='d-flex justify-content-start w-100'>
      <div className={'w-50 m-2 flex-grow-1 text-start ' + (todo.status === 'Close' ? 'text-decoration-line-through ' : null)}>
        {todo.name}
      </div>
      <div className='w-25 m-2 text-start'>{todo.importance}</div>
      <div className='w-25 m-2 text-start'>
        <button type="button" className='btn badge text-bg-primary me-2'>Edit</button>
        <button type="button" className='btn badge text-bg-secondary me-2'>Close</button>
        <button type="button" className='btn badge text-bg-danger'>Delete</button>
      </div>
    </div>
  ))
  return (
    <section className='d-flex justify-content-center flex-wrap text-center'>
      <h2 className='w-100 p-4'>My List of Tasks</h2>
      <div className='d-flex flex-column w-50'>
        {todos}
      </div>
    </section>
  )
}

// Tasks.propTypes = {}

export default Tasks