const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const punchTimeSchema = new Schema({
    clockedIn : {
        type: Boolean,
        required: true
    },
    // Time since the start of the week, in minutes
    time : {
        type: Number,
        required: true
    }
}, {
    timestamps : true
})

module.exports = punchTimeSchema;