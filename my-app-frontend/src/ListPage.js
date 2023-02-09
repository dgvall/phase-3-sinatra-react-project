import React, {useState, useEffect} from 'react'
import {useHistory,useParams} from "react-router-dom"
import GeneralSublist from './GeneralSublist.js'
import DaySublist from './DaySublist.js'

import "./ListPage.css"

function ListPage({list}) {
  const history = useHistory()
  const [quickTask, setQuickTask] = useState("")

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  // const {id} = useParams()
  // console.log(`params id: ${id}`)

    // if (!list[0]) {
    //   GET REQUEST
    // }


    const general = list.sublists.find((s) => s.name === "General")
    console.log(general)
  return (
    <div>
      <div id = "list-header">
        <p
        id = "back-arrow"
        onClick = {(e) => history.push("/lists")}
        >{"<-"}</p>
        <p>{list.name}</p>
      </div>
      <form
      id = "task-creation"
      onSubmit = {(e) => {
        e.preventDefault()
        console.log("submitted!")
        setQuickTask("")
      }}
      >
        <p>Add Task</p>
        <input
          placeholder = "Task here"
          onChange = {(e) => setQuickTask(e.target.value)}
          value = {quickTask}
        >
        </input>
      </form>

      <GeneralSublist
        tasks = {general.tasks}
      />
     
      <div id = "days-container">

        {
          days.map((day) => {
            const sublist = list.sublists.find((s) => s.name === day)
            return (
              <DaySublist
               key = {sublist.name}
               day = {sublist.name}
               tasks = {sublist.tasks}

              />
            )
          })
        }
      </div>
    </div>
  )
}

export default ListPage;