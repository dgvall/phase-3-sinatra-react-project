import React, {useState, useEffect} from 'react'
import {useHistory,useParams} from "react-router-dom"
import GeneralSublist from './GeneralSublist.js'
import DaySublist from './DaySublist.js'
import TaskForm from './TaskForm.js'

import "./ListPage.css"

function ListPage({lists, handleUpdateList}) {
  const history = useHistory()
  const [quickTask, setQuickTask] = useState("")
  const [day, setDay] = useState("General")
  const [hidden, setHidden] = useState(true)
  const [priority, setPriority] = useState(false)
  const {id} = useParams()

  const list = lists.find((l) => l.id === parseInt(id))

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    function findSublistByDay(day) {
      const sublist = list.sublists.find((s) => s.name === day)
      return sublist
    }
    
    function handleQuickSubmit(e) {
      if(lists[0]) {
      const sublist = findSublistByDay(day)
      
      const formData = {
        text: quickTask,
        priority: priority,
        sublist_id: sublist.id
      }
  
      e.preventDefault()
      console.log("submitted!")
      fetch("http://localhost:9292/lists/sublists/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setQuickTask("")
          setDay("General")
          setPriority(false)
          sublist.tasks = [...sublist.tasks, data]
          handleUpdateList(list)
        })
      }
    }

    function handleDeleteTask(taskId, sublistId) {
        // onDeleteTask
        console.log(taskId)
        let sublist = list.sublists.find((s) => s.id === sublistId)
        sublist.tasks = sublist.tasks.filter((t) => t.id !== taskId)
        handleUpdateList(list)
    }

    // update task on front end
    function handleUpdateTask(updatedTaskObj) {
      console.log(list)
      
        console.log("Updating!")
        const sublist = list.sublists.find((s) => s.id === updatedTaskObj.sublist_id)
        sublist.tasks = sublist.tasks.map((t) => {
          if(t.id === updatedTaskObj.id) {
            return updatedTaskObj
          } else return t
        })
        console.log(list)

        handleUpdateList(list)
    }
  return (
    <div>
    {
      lists[0]
      ? 
    <div>

    {
    hidden
      ? null
      :
      <TaskForm
        setHidden = {setHidden}
      />
    }   

      <div id = "list-header">
        <div id = "header-name">
          <p
            onClick = {(e) => history.push("/lists")}
          >{"<-"}</p>
          <p id = "list-name" >{list.name}</p>
        </div>
        <div
          id = "header-form"
          onClick = {() => setHidden(false)}
        >+</div>
      </div>
      <form
      id = "task-creation"
      onSubmit = {handleQuickSubmit}
      >
        <div id = "day-container">
        <select
          onChange = {(e) => setDay(e.target.value)}
          value = {day}
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
        <div id = "text-input-form">
          <label id = "form-label">Add Task</label>
          <input
            placeholder = "Task here"
            onChange = {(e) => setQuickTask(e.target.value)}
            value = {quickTask}
          >
          </input>
          <button>Submit</button>
        </div>
        <div id = "priority-container">
        <input
          id = "priority-checkbox"
          type = "checkbox"
          onChange = {() => setPriority(() => !priority)}
          checked = {priority}
        >
        </input>
        <label id = "priority-label" >Priority</label>

        </div>
      </form>
      {
        list.sublists.map((s) => {
          if(s.name === "General") {
            return (
              <GeneralSublist
            key = {s.id}
            tasks = {s.tasks}
            onDeleteTask = {handleDeleteTask}
            onUpdateTask = {handleUpdateTask}
            findSublistByDay = {findSublistByDay}
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
               onDeleteTask = {handleDeleteTask}
               onUpdateTask = {handleUpdateTask}
               findSublistByDay = {findSublistByDay}
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