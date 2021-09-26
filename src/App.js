import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import Employees from "./components/employee-list"
import Create from "./components/create-employee"
import NavBar from "./components/nav-bar"

function App() {
  return (
    <Router>
			<div className='container'>
				<NavBar/>
				<br/>
      	<Route path="/" exact render={() => <Employees/>}/>
				<Route path="/create" render={() => <Create/>}/>
			</div>
    </Router>
  );
}

export default App;
