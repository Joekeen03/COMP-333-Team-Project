const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let employeeSchema = require("./employee.model")

const adminSchema = new Schema( {
    employee: {
        type: employeeSchema,
        required: true
    },
}, {
    timestamps: true,
});

const Admin = mongoose.model('Admin', adminSchema)
module.exports = Admin;