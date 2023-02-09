import React, {useState} from 'react'
import ListCard from './ListCard'
import UserForm from './UserForm'

import './ListsPage.css'

function ListsPage({lists, handleUpdateLists, handleUpdateListId}) {
  const [hidden, setHidden] = useState(true)

  // console.log(lists)

  function hideModal() {
    setHidden(true)
  }
  
  return (
    <div>
      {hidden
      ? null
      : <div className = "lists-user-modal">
          <UserForm
          handleHidden = {hideModal}
          handleUpdateLists = {handleUpdateLists}
          />
        </div>
      }

<div className = "overlay">

</div>

      <h1 id = "title">To-Do Lists</h1>
      <div id = "card-container">
        <div
        id = "form-creation"
        onClick = {() => setHidden(false)}
        >
          +
        </div>
          {
            lists.map(list => {
              return <ListCard
                key = {list.id}
                id = {list.id}
                name = {list.name}
                handleUpdateListId = {handleUpdateListId}
              />
            })
          }
      </div>
    </div>
  )
}

export default ListsPage;