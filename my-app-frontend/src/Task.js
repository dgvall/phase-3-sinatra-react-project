import React, {useState} from 'react'

import "./Task.css"

function Task({text, details, priority, id, onDeleteTask}) {

  const [hover, setHover] = useState(false)

  function handleMouseEnter() {
    setHover(true)
    console.log("Mouse Entered!")
  }

  function handleMouseLeave() {
    setHover(false)
    console.log("Mouse Left!")
  }

  function handleDeleteTask() {
    fetch(`http://localhost:9292/lists/sublists/tasks/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => onDeleteTask(data.id, data.sublist_id))
  }
  return (
    <div
    onMouseEnter = {handleMouseEnter}
    onMouseLeave = {handleMouseLeave}
    id = "task-container">
      <div id = "show-container">
        <input
          id = "checkbox"
          type = "checkbox"
          onChange = {handleDeleteTask}
        />
        <p id = "task-text">{text}</p>
      </div>

      { hover
        ?
        <div id = "hover-container">
          <div id = "cogwheel">⚙️</div>
          <div id = "details">details</div>
        </div>
        : null
      }
    </div>
  )

}

export default Task;