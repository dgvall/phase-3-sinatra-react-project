import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import GeneralSublist from './GeneralSublist.js'

import "./ListPage.css"

function ListPage() {
  const [list, setList] = useState([])
  const {id} = useParams()

  useEffect(() => {
    fetch(`http://localhost:9292/lists/${id}`)
      .then(res => res.json())
      .then(data => setList(data))
  }, [])

  console.log(list)

  return (
    <div>
      <div id = "list-header">
        <p>{"<-"}</p>
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
      
    </div>
  )
}

export default ListPage;