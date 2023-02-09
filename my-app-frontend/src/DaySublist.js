import React from 'react'
import Task from "./Task"

import "./DaySublist.css"

function DaySublist({day, tasks}) {
  console.log(tasks)
  return (
    <div id = "sublist-container">
      <h1 className = "sublist-header">{day}</h1>
      <div id = "sublist-task-container">
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  )

}

export default DaySublist;