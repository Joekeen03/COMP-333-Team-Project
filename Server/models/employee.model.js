const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema( {
    name: '',
    pay: '',
		attend: '',
		schedule: '',
		position: '',
		address: '',  
}, {
    timestamps: true,
});

const Employee = mongoose.model('Employee', employeeSchema)
module.exports = Employee;