import React from 'react'
import Task from "./Task"

import "./GeneralSublist.css"

function GeneralSublist() {
  return (
    <div id = "general-container">
      <h1 class = "sublist-header">General</h1>
      <div id = "general-task-container">
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  )

}

export default GeneralSublist;