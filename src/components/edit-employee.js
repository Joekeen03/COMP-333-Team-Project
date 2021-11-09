import React from 'react'
import port from "./port"
import { useState, useEffect } from 'react';
import axios from 'axios';

const p = (s) => console.log(s)

const Edit_employee = () => {
//	var [namek, setNamek] = useState('');
//	var [pay, setPay] = useState('');
	var [loading, setLoading] = useState('Update Employee');
	var [ret, setRet] = useState();

	var name, pay, position, address;

  const id  = window.location.pathname.substring(6);

	//const getName = () => {
	//	setName(name)
	//	return name;
	//}

	const showEdit = () => {
		setRet(edit())
	}

	const showView = () => {
		setRet(view())
	}

	var onSubmit = (e) => {
		e.preventDefault();

		const emp = {
			name: name,
			pay: pay,
			position: position,
			address: address,
		}
		
		console.log(emp)

		axios.post(port+'update/'+id, emp).then(() => window.location = '/k')
		
	//	setLoading('Updating...')
	}

	useEffect(() => {
		axios.get(port+id).then(res => {
			var e = res.data

			name = e.name;
			pay = e.pay;
			position = e.position;
			address = e.address;

			showView()
		})
	}, [])

	var view = () => (
		<div>
			<div className="container text-break">
     		<div className="row d-flex justify-content-center">
            <div className="col-md-10">
             	<div className="row z-depth-2">
                 	<div className="col-sm-4 bg-info rounded-left">
        		        <div className="card-block text-center text-white">
											<div className="my-5">
											<img src={"https://randomuser.me/api/portraits/"+((Math.floor(Math.random()*2)) ? 'men':'women')+"/"+Math.floor(Math.random()*100)+".jpg"} width="250" height="250" className="" alt=""/>
                    	</div>
												<h1 className="font-weight-bold">{name}</h1>
                    		<h5>{position}</h5><input type="button" value="Edit" className="btn btn-warning" onClick={() => showEdit()}/>
                		</div>
            		</div>
            		<div className="col-sm-8 bg-white rounded-right">
									
                    	<h3 className="mt-3 text-center">Information</h3>
                    	<hr className="bg-primary"/>
                   		<h3 className="row">
											 <div className="col-sm-6">
                            	<p className="font-weight-bold">Name:</p>
                           		<p className=" text-muted">{name}</p>
                        	</div>
													<div className="col-sm-6">
                            	<p className="font-weight-bold">Salary:</p>
                           		<p className=" text-muted">{pay}</p>
                        	</div>
                        	<div className="col-sm-6">
                            	<p className="font-weight-bold">Position:</p>
                           		<p className="text-muted">{position}</p>
                        	</div>
													<div className="col-sm-6">
                            	<p className="font-weight-bold">Email:</p>
                           		<p className="text-muted">{name}</p>
                        	</div>
                        	<div className="col-sm-6">
                           		<p className="font-weight-bold">Status:</p>
                          	  <p className="text-muted">hired</p>
                        	</div>
                        	<div className="col-sm-6">
                            	<p className="font-weight-bold">Address:</p>
                            	<p className="text-muted">{address}</p>
                        	</div>
													
                    	</h3>
                    		
                	   	<hr className="bg-primary"/>
                	    <ul className="list-unstyled d-flex justify-content-center mt-4">

	               		</ul>  
              		</div>
             	</div>
            </div>
        </div>
	</div>

	
			
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
              defaultValue={name}
              onChange={(e) => {name = e.target.value}}
              />
        </div>
        <div className="form-group">
          <label>Salary: </label>
          <input 
              type="text"
							required
              className="form-control"
              defaultValue={pay}
              onChange={(e) => {pay = e.target.value}}
              />
        </div>

				<div className="form-group">
          <label>Position: </label>
          <input 
              type="text" 
							required
              className="form-control"
              defaultValue={position}
              onChange={(e) => {position = e.target.value}}
              />
        </div>

				<div className="form-group">
          <label>Address: </label>
          <input 
              type="text" 
						  required
              className="form-control"
              defaultValue={address}
              onChange={(e) => {address = e.target.value}}
              />
        </div>


        <div className="">
          <input type="submit" value={loading} className="btn btn-primary"></input>
					<input type="button" value="View" className="btn btn-warning" onClick={() => showView()}/>
        </div>
      </form>
    </div>
  )

//	(<input type="button" value="Edit" className="btn btn-warning" onClick={() => setRet(edit)}/>	<section className="container rounded p-5 bg-primary">	<div className="card-block">	<div><h2 className="text-center text-white">{name + " test"}</h2></div></div></section>)


	return((ret) ? ret:<div>Loading</div>)
//	return(view())
}

export default Edit_employee