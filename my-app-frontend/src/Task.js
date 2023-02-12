import React, {useState} from 'react'

import "./Task.css"

function Task({text, priority, id, onDeleteTask}) {

  const [hover, setHover] = useState(false)

  function handleDeleteTask() {
    fetch(`http://localhost:9292/lists/sublists/tasks/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => onDeleteTask(data.id, data.sublist_id))
  }
  return (
    <div
    onMouseEnter = {() => setHover(true)}
    onMouseLeave = {() => setHover(false)}
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
        </div>
        : null
      }
    </div>
  )

}

export default Task;