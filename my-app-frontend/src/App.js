import React, {useState, useEffect} from "react"
import {Switch, Route} from "react-router-dom"
import ListsPage from "./ListsPage"
import ListPage from "./ListPage"

import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path = '/lists'>
          <ListsPage />
        </Route>
        <Route exact path = '/lists/:id'>
          <ListPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
