import React from 'react'
import Task from "./Task"

import "./GeneralSublist.css"

function GeneralSublist({tasks, onDeleteTask, onUpdateTask, findSublistByDay}) {
  return (
    <div id = "general-container">
      <h1 id = "general-header">General</h1>
      <div id = "general-task-container">
      {
        tasks.map((t) => {
          return (
            <Task
              key = {t.id}
              id = {t.id}
              text = {t.text}
              priority = {t.priority}
              onDeleteTask = {onDeleteTask}
              day = "General"
              sublist_id = {t.sublist_id}
              onUpdateTask = {onUpdateTask}
              findSublistByDay = {findSublistByDay}
          />
          )
        })
      }
      </div>
    </div>
  )
}

export default GeneralSublist;