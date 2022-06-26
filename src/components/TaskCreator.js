import React from 'react'
import { useState } from 'react'


const TaskCreator = ({createNewTask}) => {

  const [newTaskName, setNewTaskName] = useState('');

  const handleSubmit =(e) => {
    e.preventDefault();
    createNewTask(newTaskName);
    setNewTaskName('');
  }
    
  return (
    <form onSubmit={handleSubmit} className='row'>
      <div className='col-md-8'>
        <input
        className='form-control'
        type="text"
        placeholder="type your task"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        ></input>
      </div>
      <div className='col-md-4 text-center'>
        <button className='btn btn-primary'>Save Task</button>
      </div>
  
    
  </form>
  )
}

export default TaskCreator