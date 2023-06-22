const mongoose = require('mongoose');
// code for making schema
const mySchema = new mongoose.Schema({
    academicName:String,
    academicPlan:String,
    academicContact:Number,
    academicAddress:String,
    academicId:String,
    password:String
})

// code for making model
const myModel = mongoose.model('academic_details', mySchema);
module.exports = myModel;