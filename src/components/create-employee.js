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
          <input  
							type="text"
							required
              className="form-control"
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
              />
        </div>

				<div className="form-group">
          <label>Salary: </label>
          <input 
              type="text" 
							required
              className="form-control"
              defaultValue={pay}
              onChange={(e) => setPay(e.target.value)}
              />
        </div>

        <div className="form-group">
          <label>Position: </label>
          <input 
              type="text" 
							required
              className="form-control"
              defaultValue={position}
              onChange={(e) => sP(e.target.value)}
              />
        </div>

				<div className="form-group">
          <label>Address: </label>
          <input 
              type="text" 
						  required
              className="form-control"
              defaultValue={address}
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