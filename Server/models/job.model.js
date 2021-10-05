const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema( {
    title: {
        type: String,
        required: true,
        default: "No Position"
    },
    description: {
        type: String,
        required: true,
        default: "No  Position"
    },
}, {
    timestamps: true,
});
jobSchema.createDefault = () => {
    return {title: "Blank", description: "Blank"}
}
module.exports = jobSchema;