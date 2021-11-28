import React from 'react'
import port from "./port"
import { useState } from 'react';
import axios from 'axios';
import { inputField } from '../helpers/display';
import { dropdownField } from '../helpers/dropdown';

const Create_employee = () => {
  	const payTypes = [
		{value: "Hourly"}, 
		{value: "Salary"}
	]

	var [name, setName] = useState('')
	var [pay, setPay] = useState('')
	var [wage, setHourlyWage] = useState('')
  	var [jobTitle, setTitle] = useState('')
  	var [jobDescription, setDescription] = useState('')
	var [attend, sA] = useState('')
	var [address, sAdd] = useState('')
	var [loading, setLoading] = useState('Add Employee')
  	var [payType, setPayType] = useState(payTypes[0].value)

	var onSubmit = (e) => {
		e.preventDefault();
		const emp = {
			name: name,
      		payType: payType,
			pay: pay,
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
			{inputField}
			{inputField("Job Title", jobTitle, setTitle)}
			{inputField("Job Description", jobDescription, setDescription)}
			{dropdownField("Pay Type", payType, setPayType, payTypes)}
			{(payType === "Salary") ?
					<div className="form-group"> 
						<label>Salary: </label>
						<input  
						type="text"
						required
						className="form-control"
						defaultValue={pay}
						onChange={(e) => {setPayType(e.target.value)}}
						/>
					</div>
				:
					<div className="form-group"> 
						<label>Hourly Wage: </label>
						<input  
						type="text"
						required
						className="form-control"
						defaultValue={wage}
						onChange={(e) => {setHourlyWage(e.target.value)}}
						/>
					</div>		
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

        {inputField("Address", address, sAdd)}

        <div className="form-group py-2">
          <input type="submit" value={loading} className="btn btn-primary" />
        </div>
      </form>
    </div>

	)
	}

export default Create_employee;