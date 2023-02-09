import React from 'react'

import "./Task.css"

function Task({day, list_id, tasks}) {
  return (
    <div id = "task-container">
      <input
      id = "checkbox"
      type = "checkbox"
      />
      <p>put away the garbage on friday night </p>
    </div>
  )

}

export default Task;