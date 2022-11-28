import React from 'react';
import Button from './Button';

const Task = ({task, onComplete}) => {

  const editTask = () => {console.log('edit task')}

  return (
    <div key={task.id} className='d-flex justify-content-start w-100'>
      <div className={'w-50 m-2 flex-grow-1 text-start'}>
        {task.name}
      </div>
      <div className='w-25 m-2 text-start'>{task.importance}</div>
      <div className='w-25 m-2 text-start'>
        <Button classes='btn badge text-bg-secondary me-2' text='Edit' onClick={editTask}/>
        <Button classes='btn badge text-bg-success me-2' text='Close' onClick={() => onComplete(task.id)} />
      </div>
    </div>
  )
}

export default Task;