const mongoose = require('mongoose');
// code for making schema
const mySchema = new mongoose.Schema({
    studentFirstName:String,
    studentSecondName:String,
    studentClass:String,
    address:String,
    parentName:String,
    contactNumber:Number
})

// code for making model
const myModel = mongoose.model('students_details', mySchema);
module.exports = myModel;