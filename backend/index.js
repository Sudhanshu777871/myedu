const express = require("express");
const cors = require("cors");
require("./config");
const academicLogin = require("./SchemaModel/academicLogin");
const studentDataInsert = require('./SchemaModel/studentsData');
const app = express();

// apply global middleware
app.use(express.json());
app.use(cors());

// api for fetching academicDetails

app.post("/login", async (req, res) => {
  if (req.body.academicId && req.body.password) {
    let getAcademicLogin = await academicLogin
      .findOne(req.body)
      .select("-password");
    if (getAcademicLogin) {
      res.send(getAcademicLogin);
    } else {
      res.send({ result: "Invalid Credentials" });
    }
  } else {
    res.send({ result: "Please Enter All Fields" });
  }
});



// api for inserting the students data 

app.post("/student_data", async (req, res) => {
    let insertStudentData = new studentDataInsert(req.body);
    let savingData = await insertStudentData.save();
    
    if (savingData) {
      res.send(savingData);
    } 
    else {
      res.send({ result: "Invalid Credentials" });
    }
});
app.listen(7200);
