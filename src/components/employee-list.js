import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import port from "./port"

var temp = [];

const Employee = (props) => (
	<tr>
		<td>{props.employee.name}</td>
		{props.employee.payType === "Hourly" ?
				<td>${Math.round(props.employee.wage * 40 * 52)}</td>
			:
				<td>${props.employee.pay}</td>
		}
		<td>
			<span style={divStyle}>
				<Link to={"/edit/"+props.employee._id}>View</Link> | <a href="#" onClick={() => { props.delete(props.employee._id) }}>Delete</a>
			</span>
		</td>
  	</tr>
)

const divStyle = { // for no new line
	'whiteSpace':'nowrap'
};

const Employee_list = () => {
    var [employees, setEmployees] = useState([]);
	//hello();

		const deleteEmployee = (id) => {
			axios.delete(port+id).then(res => console.log(res.data)).catch(e => console.log(e + "; doesnt exist"));
   	  setEmployees(employees.filter(i => i._id !== id));
		}

		const listEmployees = () => (
			  employees.map(i => {
					return <Employee employee={i} delete={(id) => deleteEmployee(id)} key={i._id}/>
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
        <div>
					<div className="d-md-flex justify-content-between align-items-center">
            <h3>Employees</h3>
						<div>
							<i className="bi bi-search p-1"></i>
							<input className="" placeholder="Search Employee" 
								type="text" 
								onChange={e => setEmployees(temp.filter(i => i.name.toLowerCase().includes(e.target.value.toLowerCase())))}/>
						</div>
					</div>
            <table className="table align-items-stretch">
                <thead className="thead-light">
                    <tr>
                      	<th>Name</th>
                     	<th>Salary</th>
						<th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {listEmployees()}
                </tbody>
            </table>
        </div>
    )

	}

export default Employee_list