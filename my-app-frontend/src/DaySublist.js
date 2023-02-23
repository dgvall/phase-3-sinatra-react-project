import React from 'react'
import Task from "./Task"

import "./DaySublist.css"

function DaySublist({day, tasks, onDeleteTask, onUpdateTask, findSublistByDay}) {
  return (
    <div id = "sublist-container">
      <h1 className = "sublist-header">{day}</h1>
      <div id = "sublist-task-container">
      {
        tasks.map((t) => {
          return (
            <Task
              key = {t.id}
              day = {day}
              id = {t.id}
              text = {t.text}
              priority = {t.priority}
              onDeleteTask = {onDeleteTask}
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

export default DaySublist;