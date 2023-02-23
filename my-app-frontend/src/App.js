import React, {useState, useEffect} from "react"
import {Switch, Route} from "react-router-dom"
import ListsPage from "./ListsPage"
import ListPage from "./ListPage"

import './App.css';

function App() {
  const [lists, setLists] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/lists")
      .then(res => res.json())
      .then(data => setLists(data))
  }, [])

  // Update Lists State with New List
  function onCreateList(listObj) {
    setLists([...lists, listObj])
  }
  // Update Lists State with Updated List
  function onUpdateList(updatedListObj) {
    const updatedLists = (lists.map((l) => {
      if(l.id === updatedListObj.id) {
        return updatedListObj
      } else return l
    }))
    setLists(updatedLists)
  }
    
  return (
    <div>
      <Switch>
        <Route exact path = '/lists'>
          <ListsPage
            lists = {lists}
            handleCreateList = {onCreateList}
          />
        </Route>
        <Route exact path = '/lists/:id'>
          <ListPage
            lists = {lists}
            handleUpdateList = {onUpdateList}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
