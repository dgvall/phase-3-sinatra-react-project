import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

import './TaskForm.css'

function TaskForm({hideModal, text, priority, day, id, sublist_id, hideHoverMenu, onUpdateTask, findSublistByDay}) {
  // const [task, setTask] = useState("")
  const [submitDay, setSubmitDay] = useState(day)
  const [submitText, setSubmitText] =  useState(text)
  const [submitPriority, setSubmitPriority] = useState(priority)

  function handleSubmit(e) {
    e.preventDefault()
    const oldSublist = findSublistByDay(day)
    const sublist = findSublistByDay(submitDay)

    const updatedTaskObj = {
      text: submitText,
      sublist_id: sublist.id,
      priority: submitPriority
    }

    fetch(`http://localhost:9292/lists/sublists/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTaskObj)
    })
      .then(res => res.json())
      .then(data => {
        onUpdateTask(data, oldSublist.id)
        hideModal()
        hideHoverMenu()
      })
  }

  return (
    <div id = "task-form-modal">
      <div id = "task-form-content">
        <div id = "task-form-header">
          <h2 className = "modal-title">Edit Task</h2>
          <button
            id = "close-task-modal"
            onClick = {() => {
              hideModal()
              hideHoverMenu()
            }}
          >x</button>
        </div>

        <div id = "task-form-body">
        <form
      id = "task-creation"
      onSubmit = {handleSubmit}
      >
        <div id = "day-container">
        <select
          onChange = {(e) => setSubmitDay(e.target.value)}
          value = {submitDay}
        >
          <option>
            General
          </option>
          <option>
            Sunday
          </option>
          <option>
            Monday
          </option>
          <option>
            Tuesday
          </option>
          <option>
            Wednesday
          </option>
          <option>
            Thursday
          </option>
          <option>
            Friday
          </option>
          <option>
            Saturday
          </option>
        </select>
        </div>
          <input
            id = "text-input-form"
            type = "text"
            placeholder = "Task here"
            onChange = {(e) => setSubmitText(e.target.value)}
            value = {submitText}
          >
          </input>
        <div id = "priority-container">
        <input
          id = "priority-checkbox"
          type = "checkbox"
          onChange = {() => setSubmitPriority(() => !submitPriority)}
          checked = {submitPriority}
        >
        </input>
        <label id = "priority-label" >Priority</label>

        </div>
      </form>
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