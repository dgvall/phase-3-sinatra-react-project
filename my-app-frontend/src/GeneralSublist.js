import React from 'react'
import Task from "./Task"

import "./GeneralSublist.css"

function GeneralSublist({tasks}) {
  return (
    <div id = "general-container">
      <h1 className = "sublist-header">General</h1>
      <div id = "general-task-container">

      {
        tasks.map((t) => {
          return (
            <Task
            key = {t.id}
            text = {t.text}
            details = {t.details}
            priority = {t.priority}
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