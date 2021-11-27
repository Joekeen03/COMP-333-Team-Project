import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import port from "./port"

var temp = [];

const Employee = (props) => (
    <tr>
        <td>{props.employee.name}</td>
        <td>{props.employee.hours_worked}</td>
        <td>{props.employee.pay}</td>
        <td>{props.employee.schedule}</td>
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
            <table responsive className="table align-items-stretch">
                <thead className="thead-light">
                    <tr>
                        <td>
                            <input className="" placeholder="Search Employee"
                            type="text"
                            onChange={e => setEmployees(temp.filter(i => i.name.toLowerCase().includes(e.target.value.toLowerCase)))}
                            />
                        </td>
                        <td>
                            <td>
                            </td>
                        </td>
                        <td>
                            <div>
                                Pay Period: 
                            </div>
                        </td>
                        <td>
                        </td>
                        <td>
                            <div
                                >Hello
                            </div>
                        </td>
                    </tr>
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