import React, {useState, useEffect} from 'react'
import {useHistory,useParams} from "react-router-dom"
import GeneralSublist from './GeneralSublist.js'
import DaySublist from './DaySublist.js'

import "./ListPage.css"

function ListPage() {
  const [list, setList] = useState([])
  const {id} = useParams()

  const history = useHistory()

  useEffect(() => {
    fetch(`http://localhost:9292/lists/${id}`)
      .then(res => res.json())
      .then(data => setList(data))
  }, [])

  console.log(list)

  return (
    <div>
      <div id = "list-header">
        <p
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
      <DaySublist
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
        />
      </div>
    </div>
  )
}

export default ListPage;