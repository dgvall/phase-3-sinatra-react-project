import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

import './UserForm.css'

function UserForm({handleHidden, handleUpdateLists}) {
  const [listName, setListName] = useState("")

  const history = useHistory()

  function handleSubmit() {
    fetch('http://localhost:9292/lists', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name: listName})
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        handleUpdateLists(data)
        history.push(`/lists/${data.id}`)
      })
  }

  return (
    <div id = "user-form-modal">
      <div id = "user-form-content">
        <div id = "user-form-header">
          <h2 id = "user-modal-title">Create List</h2>
          <button
            id = "close-modal"
            onClick = {handleHidden}
          >❌</button>
        </div>

        <div id = "user-form-body">
          <input
           onChange = {(e) => setListName(e.target.value)}
           value = {listName}
           placeholder = "List name"
          />
        </div>
      
        <div id = "user-form-footer">
          <button
          onClick = {handleSubmit}
          >Submit</button>
        </div>
      </div>
    </div>
  )
}

export default UserForm;