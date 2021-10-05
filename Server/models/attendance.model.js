const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let punchTimeSchema = require("./punchTime.model")
let modelNames = require("./modelNames")

// Record of attendance for one week.
const attendanceRecordSchema = new Schema({
    timeStamps : {
        type: [punchTimeSchema],
        required: true
    },
    "employee" : {
        type: mongoose.Schema.Types.ObjectId,
        ref: modelNames.employee
    }
}, {
    timestamps : true
})

const AttendanceRecordModel = mongoose.model(modelNames.attendance, attendanceRecordSchema);
module.exports = AttendanceRecordModel