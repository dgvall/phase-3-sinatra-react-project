import React from 'react'
import ListCard from './ListCard'

import './ListsPage.css'

function ListsPage({lists}) {
  console.log(lists)
  
  return (
    <div>
      <h1 id = "title">To-Do Lists</h1>
      <div id = "card-container">
        <div id = "form-creation">
          +
        </div>
          {
            lists.map(list => {
              return <ListCard
                key = {list.id}
                id = {list.id}
                name = {list.name}
              />
            })
          }
      </div>
    </div>
  )
}

export default ListsPage;