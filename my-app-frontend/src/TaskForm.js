import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

import './TaskForm.css'

function TaskForm({setHidden}) {
  const [task, setTask] = useState("")

  const history = useHistory()

  function handleSubmit() {
    // fetch('http://localhost:9292/lists', {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({name: task})
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data)
    //     history.push(`/lists/${data.id}`)
    //   })
  }

  return (
    <div id = "task-form-modal">
      <div id = "task-form-content">
        <div id = "task-form-header">
          <h2 className = "modal-title">Create Task</h2>
          <button
            id = "close-task-modal"
            onClick = {() => setHidden(true)}
          >x</button>
        </div>

        <div id = "task-form-body">
          <input
           onChange = {(e) => setTask(e.target.value)}
           value = {task}
           placeholder = "Task"
          />
        </div>
      
        <div id = "task-form-footer">
          <button
          onClick = {handleSubmit}
          >Submit</button>
        </div>
      </div>
    </div>
  )
}

export default TaskForm;