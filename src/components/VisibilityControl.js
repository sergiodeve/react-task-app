import React from 'react'

const VisibilityControl = ({setShowcompleted, cleanTasks, isChecked}) => {
    
    const handleDelete=()=>{
        if(window.confirm('do you want delete it')){
            cleanTasks()
    }};

    return (
      <div className='d-flex justify-content-between p-2 text-center bg-secondary'>
          <div className='form-check form-switch'>
              <input 
                  className='form-check-input'
                  type="checkbox" 
                  onChange={e=> setShowcompleted(e.target.checked)}
                  checked={isChecked} ></input>
              <label>Show Tasks Done</label>
          </div>
          <button  className='btn btn-danger btn-sm' onClick={ handleDelete}>boton</button>
      </div>
    )
  }
  
  export default VisibilityControl

  



