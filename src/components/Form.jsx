import React from 'react'
import { useState } from 'react';
import Button from './Button';
// import PropTypes from 'prop-types'

const Form = ({onAdd}) => {
  const [newTask, setNewTask] = useState('');
  const [importance, setImportance] = useState('')

  const addTaskName = event => {
    setNewTask(event.target.value);
  }

  const addTaskImportance = event => {
    setImportance(event.target.value)
  }

  const formSubmission = event => {
    
    event.preventDefault();

    if (!newTask || !importance) {
      alert('Please provide a task name or select importance');
      return
    }

    const name = newTask;
    onAdd({name, importance});

    setNewTask('');
    setImportance('');
  }

  return (
    <section className='container-fluid'>
      <form className='needs-validation' noValidate onSubmit={formSubmission}>
        <div className="mb-3">
          <label htmlFor="task" className="form-label">Task to do</label>
          <input type="text" className="form-control" id="task" aria-describedby="Describe task" required onChange={addTaskName} value={newTask}/>
          <div className="invalid-feedback">Please provide a task name</div>
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="mb-3">
        <select className="form-select" aria-label="Importance label selection" value={importance} onChange={addTaskImportance}>
          <option value="selected">Select Importance</option>
          <option value="Prioroty">Prioroty</option>
          <option value="To be done soon">To be done soon</option>
          <option value="Can wait">Can wait</option>
        </select>
        </div>
        <Button classes='btn btn-primary' text='Add Task' onClick={formSubmission}/>
      </form>
    </section>
  )
}

// Form.propTypes = {
//   newTask: PropTypes.string.isRequired
// }

export default Form