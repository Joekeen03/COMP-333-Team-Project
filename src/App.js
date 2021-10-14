import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import Employees from "./components/employee-list"
import Employees2 from "./components/employee-list2"
import Edit from "./components/edit-employee"
import Create from "./components/create-employee"
import NavBar from "./components/nav-bar"

function App() {
  return (
    <Router>
			<NavBar/>
			<div className='mx-5'>
				<br/>
      	<Route path="/" exact render={() => <Employees/>}/>
				<Route path="/create" render={() => <Create/>}/>
				<Route path="/edit/:id" render={() => <Edit/>}/>
				<Route path="/k" render={() => <Employees2/>}/>
			</div>
    </Router>
  );
}

export default App;
