const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema( {
    name: '',
	payType: '',
    pay: '',
	attend: '',
	schedule: '',
	hours_worked: '',
	position: {type: String, default: 'ADSF'},
	address: [[]],  
	test: []
}, {
    timestamps: true,
});

const Employee = mongoose.model('Employee', employeeSchema)
module.exports = Employee;