import React from 'react'
import { useState } from 'react';
// import PropTypes from 'prop-types'

const Form = () => {
  const [newTask, setNewTask] = useState('');
  const [taskInputIsValid, setTaskInputIsValid] = useState(true)

  const addTask = event => {
    setNewTask(event.target.value); 
  }

  const formSubmission = event => {
    event.preventDefault();

    if (newTask.trim() === '') {
      setTaskInputIsValid(false);
      return
    } 

    setTaskInputIsValid(true);

    console.log(newTask);
    setNewTask('');
  }

  return (
    <section className='container-fluid'>
      <form onSubmit={formSubmission}>
        <div className="mb-3">
          <label htmlFor="task" className="form-label">Task to do</label>
          <input type="text" className="form-control" id="task" aria-describedby="Describe task" onChange={addTask} value={newTask}/>
        </div>
        {!taskInputIsValid && <p className='alert alert-warning' role='alert'>Task field can't be empty</p>}
        <div className="mb-3">
        <select className="form-select" aria-label="Importance label selection">
          <option value="selected">Select Importance</option>
          <option value="1">Prioroty</option>
          <option value="2">To be done soon</option>
          <option value="3">Can wait</option>
        </select>
        </div>
        <button type="submit" className="btn btn-primary">Add Task</button>
      </form>
    </section>
  )
}

Form.propTypes = {

}

export default Form