import React, {useState, useEffect} from 'react'
import {useHistory,useParams} from "react-router-dom"
import GeneralSublist from './GeneralSublist.js'
import DaySublist from './DaySublist.js'

import "./ListPage.css"

function ListPage({lists, handleUpdateList}) {
  const history = useHistory()
  const [quickTask, setQuickTask] = useState("")
  let {id} = useParams()

  const list = lists.find((l) => l.id === parseInt(id))

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
    function handleQuickSubmit(e) {
      if(lists[0]) {
      const general = list.sublists.find((s) => s.name === "General")
      
      const formData = {
        text: quickTask,
        details: "",
        priority: 0,
        sublist_id: general.id
      }
  
      e.preventDefault()
      console.log("submitted!")
      setQuickTask("")
      fetch("http://localhost:9292/lists/sublists/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })
        .then(res => res.json())
        .then(data => {
          general.tasks = [...general.tasks, data]
          handleUpdateList(list)
        })
      }
    }
  return (
    <div>
    {
      lists[0]
      ? 
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
      onSubmit = {handleQuickSubmit}
      >
        <p>Add Task</p>
        <input
          placeholder = "Task here"
          onChange = {(e) => setQuickTask(e.target.value)}
          value = {quickTask}
        >
        </input>
      </form>
      {
        list.sublists.map((s) => {
          if(s.name === "General") {
            return (
              <GeneralSublist
            key = {s.id}
            tasks = {s.tasks}
          />
            )
          }
        })
      }
     
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
    : <div>Loading</div>
    }
    </div>
  )
}

export default ListPage;