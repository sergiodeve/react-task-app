import React from 'react'
import TaskRow from './TaskRow'
const TaskTable = ({tasks, toggleTask, showCompleted = false, texto }) => {
    
    const taskTableRow = (doneValue)=>{
        return(
            tasks
            .filter(task => task.done === doneValue)
            .map( task => (
                <TaskRow task={task} toggleTask={toggleTask} key={task.name}></TaskRow>
                ))
    )};

    return (

    <table className='table table-dark table-striped table-bordered border-secondary mt-5'>
        <thead>
          <tr className='table-success'>
            <th>Tasks{texto}</th>
          </tr>
        </thead>
        <tbody className=''>
        {
            taskTableRow(showCompleted)
        }
        </tbody>
      </table>
  )
}

export default TaskTable