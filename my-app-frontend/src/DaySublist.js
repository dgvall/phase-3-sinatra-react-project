import React from 'react'
import Task from "./Task"

import "./DaySublist.css"

function DaySublist({day, tasks}) {
  return (
    <div id = "sublist-container">
      <h1 className = "sublist-header">{day}</h1>
      <div id = "sublist-task-container">
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

export default DaySublist;