import React from 'react'
import port from "./port"
import { useState, useEffect } from 'react';
import axios from 'axios';

const Edit_employee = () => {
	var [name, setName] = useState('')
	var [pay, setPay] = useState('')
	var [loading, setLoading] = useState('Update Employee')
	var [ret, setRet] = useState();

  const id  = window.location.pathname.substring(6)

	var onSubmit = (e) => {
		e.preventDefault();

		const emp = {
			name: name,
			pay: pay
		}
		
		console.log(emp)

		axios.post(port+'update/'+id, emp).then(() => window.location = '/')
		
		setLoading('Updating...')
	}

	useEffect(() => {
		axios.get(port+id).then(res => {
			var e = res.data
			setName(e.name) 
			setPay(e.pay)	

			setRet(edit)
		})
	}, [])

	var tempState;

	var view = () => (
		<div>
			<input type="button" value="Edit" className="btn btn-warning" onClick={() => setRet(edit)}/>
			<section className="container rounded p-5 bg-primary">
				<div className="card-block">
					<div>
						
						<h2 className="text-center text-white">{name + " test"}</h2>
					</div>
				</div>
			</section>
			
		</div>
	)

	var edit = () => (
		<div>
      <h3>Edit Employee</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group"> 
          <label>Name: </label>
          <input  
							type="text"
              required
              className="form-control"
              value={name + " test"}
              onChange={(e) => setName(e.target.value)}
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

        <div className="py-2 ">
          <input type="submit" value={loading} className="btn btn-primary "></input>
					<input type="button" value="View" className="btn btn-warning mx-2" onClick={() => setRet(view)}/>
        </div>
      </form>
    </div>
  )

	return((ret) ? ret:<div>s</div>)
}

export default Edit_employee