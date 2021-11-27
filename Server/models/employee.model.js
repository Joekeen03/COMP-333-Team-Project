const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let jobSchema = require("./job.model")
let modelNames = require("./modelNames")

const employeeSchema = new Schema( {
    name: '',
	payType: '',
    pay: '',
	attend: '',
	schedule: '',
	position: {
		type: jobSchema,
		required: true,
		default: () => ({})
	},
	address: '',
}, {
    timestamps: true,
});

employeeSchema.virtual("attendance", {
	type: [mongoose.Schema.Types.ObjectId],
	ref: modelNames.attendance,
	localField: "_id",
	foreignField: "employee"
})
const Employee = mongoose.model(modelNames.employee, employeeSchema)
module.exports = Employee;