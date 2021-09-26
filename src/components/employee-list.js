import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import port from "./port"

const Employee = (props) => (
	<tr>
    <td>{props.employee.name}</td>
    <td>{props.employee.pay}</td>
		<td><a href="#" onClick={() => { props.delete(props.employee._id) }}>delete</a></td>
  </tr>
)

const Employee_list = () => {
    var [employees, setEmployees] = useState([]);

		const deleteEmployee = (id) => {
			axios.delete(port+id).then(res => console.log(res.data));
   	  setEmployees(employees.filter(i => i._id !== id));
		}

		const listEmployees = () => {
				return employees.map(i => {
					return <Employee employee={i} delete={(id) => deleteEmployee(id)} key={i._id}/>
				})
		}

		useEffect(() => {
			axios.get(port)
			.then(response => {setEmployees(response.data)})
			.catch(e => console.log(e))
		}, [])

		if(!employees.length)
			return(<div>no employees lmao</div>)
    
    return(
        <div>
            <h3>Employees</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                      <th>Name</th>
                      <th>Salary</th>
											<th></th>
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

    //const listEmployees = () => {
    //    return employees.map(employee => {
    //        return(
    //        <tr>
    //          <td>{employee.name}</td>
    //          <td>{employee.pay}</td>
    //        </tr>
    //        )
    //    });
    //}

