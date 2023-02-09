import React, {useState, useEffect} from "react"
import {Switch, Route, useParams} from "react-router-dom"
import ListsPage from "./ListsPage"
import ListPage from "./ListPage"

import './App.css';

function App() {
  const [lists, setLists] = useState([])
  const [list, setList] = useState([])
  const [paramId, setParamId] = useState()

  useEffect(() => {
    fetch("http://localhost:9292/lists")
      .then(res => res.json())
      .then(data => setLists(data))
  }, [])

  function onUpdateLists(listObj) {
    setLists([...lists, listObj])
  }

  function onUpdateListId(id) {
    // console.log(id)
    const findList = lists.find((l) => l.id === id)
    setList(findList)
  }


  // use state to update app
  // function onCreateTasks(taskObj) {
  //   setLists
  // }


  return (
    <div>
      <Switch>
        <Route exact path = '/lists'>
          <ListsPage
            lists = {lists}
            handleUpdateLists = {onUpdateLists}
            handleUpdateListId = {onUpdateListId}
          />
        </Route>
        <Route exact path = '/lists/:id'>
          <ListPage
            list = {list}
            handleUpdateListId = {onUpdateListId}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
