import React from 'react'
import {useParams} from "react-router-dom"

function List() {
  const {id} = useParams()
  return (
    <div>
      {id}
    </div>
  )
}

export default List;