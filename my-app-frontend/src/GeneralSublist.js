import React from 'react'
import Task from "./Task"

import "./GeneralSublist.css"

function GeneralSublist({tasks, onDeleteTask}) {
  return (
    <div id = "general-container">
      <h1 className = "sublist-header">General</h1>
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
            // sublist_id = {t.sublist_id}
          />
          )
        })
      }
      </div>
    </div>
  )

}

export default GeneralSublist;