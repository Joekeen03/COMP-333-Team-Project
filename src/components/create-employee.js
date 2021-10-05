import React from 'react'
import port from "./port"
import { useState } from 'react';
import axios from 'axios';
import { inputField } from '../helpers/display';

const Create_employee = () => {
	var [name, setName] = useState('')
	var [pay, setPay] = useState('')
  var [jobTitle, setTitle] = useState('')
  var [jobDescription, setDescription] = useState('')
	var [attend, sA] = useState('')
	var [address, sAdd] = useState('')
	var [loading, setLoading] = useState('Add Employee')

	var onSubmit = (e) => {
		e.preventDefault();
		const emp = {
			name: name,
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
        <label id="p">Position: </label>
        {inputField("Job Title", jobTitle, setTitle)}
        {inputField("Job Description", jobDescription, setDescription)}
        {inputField("Salary", pay, setPay)}
        {inputField("Attendance", attend, sA)}

				<div className="form-group">
          <label id="a">Schedule: </label>
					<br/>
							<div>
								<label>Day </label>
          		<select>
								<option value="asd">Monday</option>
								<option value="asfggd">Tuesday</option>
								<option value="asd">Wednesday</option>
								<option value="asfggd">Thursday</option>
								<option value="asd">Friday</option>
								<option value="asfggd">Saturday</option>
								<option value="asd">Sunday</option>
							</select>
							<label>Time</label>
							<select>
								<option value="asd">Monday</option>
								<option value="asfggd">Tuesday</option>
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