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
			wage: wage,
			position: {
        		title: jobTitle,
        		description: jobDescription
      		},
			address: address
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
					<>{inputField("Salary", pay, setPay)}</>
				:
					<>{inputField("Hourly", wage, setHourlyWage)}</>	
			}

        {inputField("Address", address, sAdd)}

        <div className="form-group py-2">
          <input type="submit" value={loading} className="btn btn-primary" />
        </div>
      </form>
    </div>

	)
	}

export default Create_employee;