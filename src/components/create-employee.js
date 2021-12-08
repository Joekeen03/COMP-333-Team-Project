import React from 'react'
import port from "./port"
import { useState } from 'react';
import axios from 'axios';
import { inputField } from '../helpers/display';
import { dropdownField } from '../helpers/dropdown';
import { getPayForHourly, getPayForSalary } from '../helpers/calculations';

const Create_employee = () => {
  	const payTypes = [
	  	{value: "Salary"}, 
  		{value: "Hourly"}
	]

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
	var [basePay, setBasePay] = useState('')
	var [hourlyWage, setHourlyWage] = useState('')
  	var [jobTitle, setTitle] = useState('')
  	var [jobDescription, setDescription] = useState('')
	var [attend, sA] = useState('')
	var [schedule, sS] = useState('')
	var [address, sAdd] = useState('')
	var [loading, setLoading] = useState('Add Employee')
  	var [payType, setPayType] = useState(payTypes[0].value)

	var onSubmit = (e) => {
		e.preventDefault();

		const emp = {
			name: name,
      		payType: payType,
			basePay: basePay,
			hourlyWage: hourlyWage,
			position: {
        		title: jobTitle,
        		description: jobDescription
      		}
		}
    
		console.log(emp)

		axios.post(port+'create', emp).then(() => window.location = '/')

		setLoading('Uploading...')
	}

	return(
		<div>
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
					</>
				:
				//Assuming Fifty two 40-hour workweeks for hourly employees
					<>
						{inputField("Hourly", hourlyWage, setHourlyWage)}
					</>	
			}
				<div className="form-group">
          <label id="a">Schedule: </label>
					<br/>
						<div>
							<label>Day </label>
          					<select>
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
						</div>
						<input type="button" value="heele"/>
        		</div>

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