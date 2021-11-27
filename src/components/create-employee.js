import React from 'react'
import port from "./port"
import { useState } from 'react';
import axios from 'axios';

const Create_employee = () => {
  const payTypes = [{value: "Salary"}, {value: "Hourly"}]

	var [name, setName] = useState('')
	var [pay, setPay] = useState('')
	var [position, sP] = useState('')
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
			pay: pay,
			position: position,
      attend: attend,
      address: address, 
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
          <label>Pay Type:</label>
          <select onChange={(e) => setPayType(e.target.value)} value={payType}>
            {payTypes.map(o => (
              <option value={o.value}>{o.value}</option>
            ))}
          </select>
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