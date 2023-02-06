import React, {useState, useEffect} from "react"
import {Switch, Route} from "react-router-dom"
import Lists from "./Lists"
import List from "./List"

import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path = '/lists'>
          <Lists />
        </Route>
        <Route exact path = '/lists/:id'>
          <List />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
