import React, {useState} from 'react'

import "./Task.css"

function Task({text, priority, id, onDeleteTask}) {

  const [hover, setHover] = useState(false)
  // const [priorityClass, setPriorityClass] = useState(priority)

  function handleDeleteTask() {
    fetch(`http://localhost:9292/lists/sublists/tasks/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => onDeleteTask(data.id, data.sublist_id))
  }

  // function handleClick() {
  //   setClicked(true)
  // }
  return (
    <div
    onMouseEnter = {() => setHover(true)}
    onMouseLeave = {() => setHover(false)}
    id = {
      priority
      ? "priority-task-container"
      : "task-container"
    }
    >
    {/* {
      clicked
      ? 
        <div id = "task-modal">
          <button
          class = "task-button"
          >Edit Task</button>
          <button
          class = "task-button"
          >Update Task</button>
        </div>
      : null

    } */}
      
      <div id = "show-container">
        <input
          id = "checkbox"
          type = "checkbox"
          onChange = {handleDeleteTask}
        />
        {/* <p type = "text" id = "task-text" value = {text}
        >{text}</p> */}
        <span  role = "textbox" id = "task-text" contentEditable>{text}</span>
        {/* maybe add class = input */}
      </div>

      { hover
        ?
        <div id = "hover-container">
          <div
            id = "cogwheel"
            // onClick = {handleClick}
          >❗</div>
        </div>
        : null
      }
    </div>
  )
}

export default Task;