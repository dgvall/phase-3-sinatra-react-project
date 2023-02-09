import React from 'react'

import "./Task.css"

function Task({text, details, priority, time, meridiem}) {
  return (
    <div id = "task-container">
      <input
      id = "checkbox"
      type = "checkbox"
      />
      <p>{text}</p>
    </div>
  )

}

export default Task;