import React, {useState} from 'react'
import ListCard from './ListCard'
import UserForm from './UserForm'

import './ListsPage.css'

function ListsPage({lists, handleCreateList}) {
  const [hidden, setHidden] = useState(true)

  function hideModal() {
    setHidden(true)
  }
  
  return (
    <div>
        {hidden
          ? null
          : 
          <div className = "lists-user-modal">
            <UserForm
              handleHidden = {hideModal}
              handleCreateList = {handleCreateList}
            />
          </div>
        }
        <h1 id = "title">To-Do Lists</h1>
        <div id = "card-container">
        <div
          id = "form-creation"
          onClick = {() => setHidden(false)}
        >
        <p id = "plus" >+</p>
        </div>
          {
            lists.map(list => {
              return (
                <ListCard
                  key = {list.id}
                  id = {list.id}
                  name = {list.name}
                />
              )
            })
          }
        </div>
    </div>
  )
}

export default ListsPage;