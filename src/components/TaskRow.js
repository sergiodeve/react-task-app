import React from 'react'

const TaskRow = ({task, toggleTask}) => {
  return (
    <tr key={task.name}>
        <td className='d-flex justify-content-between'>
            {task.name}
            <input 
                className='form-check-input'
                type="checkbox" 
                checked={task.done}
                onChange={()=> toggleTask(task)}></input>
        </td>
    
    </tr>
  )
}

export default TaskRow