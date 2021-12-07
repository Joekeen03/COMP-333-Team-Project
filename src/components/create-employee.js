import React from 'react'
import port from "./port"
import { useState } from 'react';
import axios from 'axios';
<<<<<<< Updated upstream
=======
import { inputField } from '../helpers/display';
import { dropdownField } from '../helpers/dropdown';
import { getPayForHourly, getPayForSalary } from '../helpers/calculations';
>>>>>>> Stashed changes

const Create_employee = () => {
  const payTypes = [{value: "Salary"}, {value: "Hourly"}]

	const dayNames = [
		{value: "Monday"},
		{value: "Tuesday"},
		{value: "Wednesday"},
		{value: "Thursday"},
		{value: "Friday"},
		{value: "Saturday"},
		{value: "Sunday"}
	]

	var [name, setName] = useState('')
<<<<<<< Updated upstream
	var [pay, setPay] = useState('')
	var [position, sP] = useState('')
=======
	var [basePay, setBasePay] = useState(0)
	var [salaryWage, setSalaryWage] = useState(0)
	var [hourlyWage, setHourlyWage] = useState(0)
  	var [jobTitle, setTitle] = useState('')
  	var [jobDescription, setDescription] = useState('')
>>>>>>> Stashed changes
	var [attend, sA] = useState('')
	var [schedule, sS] = useState('')
	var [address, sAdd] = useState('')
	var [loading, setLoading] = useState('Add Employee')
  var [payType, setPayType] = useState(payTypes[0].value)

	var onSubmit = (e) => {
		e.preventDefault();

		const emp = {
			name: name,
<<<<<<< Updated upstream
      payType: payType,
			pay: pay,
			position: position,
      attend: attend,
      address: address, 
		}
		
=======
      		payType: payType,
			basePay: basePay,
			salaryWage: salaryWage,
			hourlyWage: hourlyWage,
			position: {
        		title: jobTitle,
        		description: jobDescription
      		}
		}
    
>>>>>>> Stashed changes
		console.log(emp)

		axios.post(port+'create', emp).then(() => window.location = '/')

		setLoading('Uploading...')
	}

	return(
		<div>
<<<<<<< Updated upstream
      <h3>Add Employee</h3>
      <form onSubmit={onSubmit}>

        <div className="form-group"> 
          <label>Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
        </div>

        <div className="form-group">
          <label>Position: </label>
          <input 
              type="text" 
							required
              className="form-control"
              value={position}
              onChange={(e) => sP(e.target.value)}
              />
        </div>

        <div className="form-group">
          <label>Pay Type:</label>
          <select onChange={(e) => setPayType(e.target.value)} value={payType}>
            {payTypes.map(o => (
              <option value={o.value}>{o.value}</option>
            ))}
          </select>
        </div>

=======
			<h3>Add Employee</h3>
			<form onSubmit={onSubmit}>
			{inputField("Name", name, setName)}
			{inputField("Job Title", jobTitle, setTitle)}
			{inputField("Job Description", jobDescription, setDescription)}
			{dropdownField("Pay Type", payType, setPayType, payTypes)}
			{(payType === "Salary") ?
				// Assuming Bi-Weekly pay periods, 52/2 = 26 Total pay periods
					<>
						{inputField("Salary", basePay, setBasePay)}
						<>
							{setSalaryWage(getPayForSalary(basePay, 26))}
						</>
					</>

				:
				//Assuming Fifty two 40-hour workweeks for hourly employees
					<>
						{inputField("Hourly", hourlyWage, setHourlyWage)}
						<>
							{setBasePay(Math.round(hourlyWage * 52 * 40))}
						</>
					</>	
			}
>>>>>>> Stashed changes
				<div className="form-group">
          <label>Salary: </label>
          <input 
              type="text" 
							required
              className="form-control"
              value={pay}
              onChange={(e) => setPay(e.target.value)}
              />
        </div>

				<div className="form-group">
          <label>Attendance: </label>
          <input 
              type="text" 
							required
              className="form-control"
              value={attend}
              onChange={(e) => sA(e.target.value)}
              />
        </div>

				<div className="form-group">
          <label id="a">Schedule: </label>
					<br/>
<<<<<<< Updated upstream
							<div>
								<label>Day </label>
          		<select>
=======
						<div>
							<label>Day </label>
          					<select>
>>>>>>> Stashed changes
								<option value="Monday">Monday</option>
								<option value="Tuesday">Tuesday</option>
								<option value="Wednesday">Wednesday</option>
								<option value="Thursday">Thursday</option>
								<option value="Friday">Friday</option>
								<option value="Saturday">Saturday</option>
								<option value="Sunday">Sunday</option>
							</select>
							<label>Time</label>
							<select>
								<option value="Monday">Monday</option>
								<option value="Tuesday">Tuesday</option>
							</select>
<<<<<<< Updated upstream
							</div>
							<input type="button" value="heele"/>
        </div>
=======
						</div>
						<input type="button" value="heele"/>
        		</div>
>>>>>>> Stashed changes

				<div className="form-group">
          <label>Address: </label>
          <input 
              type="text" 
							required
              className="form-control"
              value={address}
              onChange={(e) => sAdd(e.target.value)}
              />
        </div>

        <div className="form-group py-2">
          <input type="submit" value={loading} className="btn btn-primary" />
        </div>
      </form>
    </div>
	)
}

export default Create_employee;