import React, {useState} from 'react'
import TaskForm from './TaskForm'

import "./Task.css"

function Task({text, priority, id, onDeleteTask, day, sublist_id, onUpdateTask, findSublistByDay}) {

  const [hover, setHover] = useState(false)
  const [hidden, setHidden] = useState(true)

  function handleDeleteTask() {
    fetch(`http://localhost:9292/lists/sublists/tasks/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => onDeleteTask(data.id, data.sublist_id))
  }

  function handleClick() {
    setHidden(false)
  }

  function hideModal() {
    setHidden(true)
  }

  function hideHoverMenu() {
    setHover(false)
  }

  // function findClicked(e) {
  //   if(e.target.value === day) {
  //     e.target.className = "day-picked"
  //     // maybe use ID??
  //   }
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
       {
        hidden
      ? null
      : <div id = "task-modal">
          <TaskForm
            hideModal = {hideModal}
            text = {text}
            priority = {priority}
            day = {day}
            id = {id}
            sublist_id = {sublist_id}
            hideHoverMenu = {hideHoverMenu}
            onUpdateTask = {onUpdateTask}
            findSublistByDay = {findSublistByDay}
          />
        </div>
    }
      
      <div id = "show-container">
        <input
          id = "checkbox"
          type = "checkbox"
          onChange = {handleDeleteTask}
        />
        {/* <p type = "text" id = "task-text" value = {text}
        >{text}</p> */}

        <p
          id = "task-text"
        >{text}</p>

        {/* maybe add class = input */}
      </div>

      { hover
        ?
        <div id = "hover-container">
          <div
          id = "edit-pencil"
            onClick = {handleClick}
          >✏️</div>
        </div>
        : null
      }
    </div>
  )
}

export default Task;