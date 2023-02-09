import React, {useState, useEffect} from 'react'
import {useHistory,useParams} from "react-router-dom"
import GeneralSublist from './GeneralSublist.js'
import DaySublist from './DaySublist.js'

import "./ListPage.css"

function ListPage({list}) {
  const history = useHistory()

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  // const {id} = useParams()
  // console.log(`params id: ${id}`)

    // if (!list[0]) {
    //   GET REQUEST
    // }

  return (
    <div>
      <div id = "list-header">
        <p
        id = "back-arrow"
        onClick = {(e) => history.push("/lists")}
        >{"<-"}</p>
        <p>{list.name}</p>
      </div>
      <div id = "task-creation">
        <p>Add Task</p>
        <input
          placeholder = "Task here"
        >
        </input>
      </div>
      <GeneralSublist />
      <div id = "days-container">

        {
          days.map((day) => {
            const sublist = list.sublists.find((s) => s.name === day)
            console.log(sublist)
            return (
              <DaySublist
               key = {day}
              //  id = {sublist.id}
              //  day = {sublist.name}
              //  tasks = {sublist.tasks}

              />
            )
          })
        }


        {/* <DaySublist
          day = "Sunday"
        />
        <DaySublist
          day = "Monday"
        />
        <DaySublist
          day = "Tuesday"
        />
        <DaySublist
          day = "Wednesday"
        />
        <DaySublist
          day = "Thursday"
        />
        <DaySublist
          day = "Friday"
        />
        <DaySublist
          day = "Saturday"
        /> */}

      </div>
    </div>
  )
}

export default ListPage;