import React from 'react'
import port from "./port"
import { useState } from 'react';
import axios from 'axios';
import { inputField } from '../helpers/display';
import { dropdownField } from '../helpers/dropdown';

const Create_employee = () => {

	var [name, setName] = useState('')
	var [pay, setPay] = useState('')
  var [jobTitle, setTitle] = useState('')
  var [jobDescription, setDescription] = useState('')
	var [email, setEmail] = useState('')
	var [status, setStatus] = useState('')

	var [loading, setLoading] = useState('Add Employee')

	var onSubmit = (e) => {
		e.preventDefault();
		const emp = {
			name: name,
			pay: pay,
      jobTitle: jobTitle,
      jobDesc: jobDescription,
			email: email,
			status: status,
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
			{inputField("Salary", pay, setPay)}
			{inputField("Job Title", jobTitle, setTitle)}
			{inputField("Job Description", jobDescription, setDescription)}
      {inputField("Email", email, setEmail)}
			{inputField("Status", status, setStatus)}

        <div className="form-group py-2">
          <input type="submit" value={loading} className="btn btn-primary" />
					
        </div>
      </form>
    </div>

	)
	}

export default Create_employee;