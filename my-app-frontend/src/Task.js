import React from 'react'

import "./Task.css"

function Task({text, details, priority, id}) {

  function handleDeleteTask() {
    fetch(`http://localhost:9292/lists/sublists/tasks/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  }
  return (
    <div id = "task-container">
      <input
      id = "checkbox"
      type = "checkbox"
      onChange = {handleDeleteTask}
      />
      <p>{text}</p>
    </div>
  )

}

export default Task;