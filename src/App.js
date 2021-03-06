import React from 'react';
import './App.css';
import {HomePage} from "./pages/homepage/homepage.component";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div>
        <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route exact path='/shop/:section' component={HomePage}></Route>
        </Switch>
    </div>
  );
}

export default App;
