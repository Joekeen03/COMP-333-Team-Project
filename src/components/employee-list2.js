import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import port from "./port"

var temp = [];

const Employee = (props) => (
		<div className="col-md-6 col-lg-3">
				<div className="card bg-light">
						<div className="card-body text-center">
								<img src={props.pic} className="rounded-circle mb-3" alt=""/>
								<h3 className="card-title mb-3">{props.employee.name}</h3>
								<p className="card-text">Salary: {props.employee.pay}</p>
								<div>
									<Link to={"/edit/"+props.employee._id}>edit</Link> | <a href="#" onClick={() => { props.delete(props.employee._id) }}>delete</a>
								</div>
						</div>
				</div>
		</div>
)

const divStyle = { // for no new line
	'whiteSpace':'nowrap'
};

const Employee_list2 = () => {
    var [employees, setEmployees] = useState([]);

		const deleteEmployee = (id) => {
			axios.delete(port+id).then(res => console.log(res.data)).catch(e => console.log(e + "; doesnt exist"));
   	  setEmployees(employees.filter(i => i._id !== id));
		}

		const pic = () => "https://randomuser.me/api/portraits/"+((Math.floor(Math.random()*2)) ? 'men':'women')+"/"+Math.floor(Math.random()*100)+".jpg"
		
		const listEmployees = () => (
			  employees.map(i => {
					return <Employee employee={i} delete={(id) => deleteEmployee(id)} pic={pic()} key={i._id}/>
				})
		)

		useEffect(() => {
			axios.get(port)
			.then(res => {setEmployees(res.data); temp = [...res.data]})
			.catch(e => console.log(e));
		}, [])

		//if(!employees.length)
		//	return(<div>no employees lmao</div>)
    
    return(    
				<div className="row g-4 ">
						{listEmployees()}		
				</div>
		)
	}

export default Employee_list2