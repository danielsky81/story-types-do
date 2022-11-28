import React from 'react';
import Task from './Task';

const Tasks = ({tasks, onComplete}) => {
  return (
    <section className='d-flex justify-content-center flex-wrap text-center'>
      <h2 className='w-100 p-4'>My List of Tasks</h2>
      <div className='d-flex flex-column w-50'>
        {tasks.map(task => (<Task key={task.id} task={task} onComplete={onComplete}/>))}
      </div>
    </section>
  )
}

export default Tasks;