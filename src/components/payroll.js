import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import port from "./port"
import { getDeduction } from "../helpers/calculations";


var temp = [];

const Employee = (props) => (
    <tr>
        <td>{props.employee.name}</td>
        <td>{props.employee.hours_worked}</td>
<<<<<<< Updated upstream
        <td>{props.employee.pay}</td>
        <td>{props.employee.schedule}</td>
=======
        {props.employee.salaryWage ? 
            <td>${Math.round(props.employee.salaryWage)}</td>
            :
            <td>${Math.round(props.employee.hourlyWage)}</td>
        }
        <td>${getDeduction(props.employee.basePay, .23)}</td>
        {props.employee.salaryWage ?
            <td>${Math.round(props.employee.basePay - getDeduction(props.employee.basePay, .23))}</td>
            :
            <td></td>
        }
>>>>>>> Stashed changes
        <td></td>
    </tr>
)

const Payroll  = () => {
    var [employees, setEmployees] = useState([]);

    const list_employees = () => (
        employees.map(i => {
            return <Employee employee={i} key={i._id}/>
        })
    )
    
    useEffect(() => {
        axios.get(port)
        .then(res => {
            setEmployees(res.data);
            temp = [...res.data]
        })
        .catch(e => console.log(e));
    }, [])

    return (
        <div>
            <div className="d-md-flex justify-content-between align-items-center">
                <input 
                    className="" 
                    placeholder="Search Employee"
                    type="text"
                    onChange={e => setEmployees(temp.filter(i => i.name.toLowerCase().includes(e.target.value.toLowerCase)))}
                />
                <div>Pay Period:</div>
            </div>
            <table responsive className="table align-items-stretch">
                <thead className="thead-light">
                    <tr>
                        <td>Employees</td>
                        <td>Total Hours</td>
                        <td>Gross Pay</td>
                        <td>Deductions</td>
                        <td>Net Pay</td>
                    </tr>
                </thead>
                <tbody >
                    {list_employees()}
                </tbody>
            </table>
        </div>
    );
}

export default Payroll