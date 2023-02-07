import React from 'react'
import {useHistory} from 'react-router-dom'
import './ListCard.css'

function ListCard({name, id}) {
  const history = useHistory()
  return (
    <div
    onClick = {() => history.push(`lists/${id}`)}
    id = "list-card"
    >
      {name}
    </div>
  )

}

export default ListCard;