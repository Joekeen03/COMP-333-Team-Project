import React from 'react'
import port from "./port"
import { useState } from 'react';
import axios from 'axios';

const Create_employee = () => {
	var [name, setName] = useState('')
	var [pay, setPay] = useState('')
	var [position, sP] = useState('')
	var [attend, sA] = useState('')
	var [schedule, sS] = useState('')
	var [address, sAdd] = useState('')
	var [loading, setLoading] = useState('Add Employee')

	var onSubmit = (e) => {
		e.preventDefault();

		const emp = {
			name: name,
			pay: pay,
			position: position
		}
		
		console.log(emp)

		axios.post(port+'create', emp).then(() => window.location = '/')

		setLoading('Uploading...')
	}

	return(
		<div>
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
								<option value="asfggd">tuesday</option>
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