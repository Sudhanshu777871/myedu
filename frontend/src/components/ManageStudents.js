import React, { useState } from "react";
import "./css/Managestudent.css";
export default function ManageStudents() {
  // state for getting value of student data
  const [studentFirstName, setStudentFirstName] = useState("");
  const [studentSecondName, setStudentSecondName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [address, setAddress] = useState("");
  const [parentName, setParentName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [loader, setLoader] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoader(true);
    let users = await fetch("http://localhost:7200/student_data", {
      method: "POST",
      body: JSON.stringify({
        studentFirstName,
        studentSecondName,
        studentClass,
        address,
        parentName,
        contactNumber,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (users) {
      setLoader(false);
      setMsg("Student Is Added Successfully");
      setTimeout(() => {
        setMsg('');
      }, 3000);
      setStudentFirstName('');
      setStudentSecondName('');
      setAddress('');
      setParentName('');
      setContactNumber('');
    }
  };

  return (
    <>

    {console.log("I am in render")}
      {/* code for modal */}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark" id="exampleModalLabel">
                Add Student
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-dark">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      value={studentFirstName}
                      onChange={(e) => {
                        setStudentFirstName(e.target.value);
                      }}
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div className="col-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      value={studentSecondName}
                      onChange={(e) => {
                        setStudentSecondName(e.target.value);
                      }}
                      placeholder="Last name"
                      required
                    />
                  </div>
                  <div className="col-6 mb-3">
                    <select
                      name="studentClass"
                      id="studentClass"
                      className="form-control"
                      onChange={(e) => {
                        setStudentClass(e.target.value);
                      }}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div className="col-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                      placeholder="Address"
                      required
                    />
                  </div>
                  <div className="col-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      value={parentName}
                      onChange={(e) => {
                        setParentName(e.target.value);
                      }}
                      placeholder="Parent Name"
                      required
                    />
                  </div>
                  <div className="col-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      value={contactNumber}
                      onChange={(e) => {
                        setContactNumber(e.target.value);
                      }}
                      placeholder="Contact Number"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-success ml-3">
                    Add Student{" "}
                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                  </button>
                  {loader ? <div className="spinner-border ml-5"></div> : ""}{" "}
                  <span className="text-success ml-4 mt-2">{msg}</span>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search Student Here..."
            />
          </div>
          <div className="col-2">
            <select name="filter" id="filter">
              <option value="all">All</option>
              <option value="class 1">Class 1</option>
              <option value="class 2">Class 2</option>
              <option value="class 3">Class 3</option>
              <option value="class 4">Class 4</option>
              <option value="class 5">Class 5</option>
              <option value="class 6">Class 6</option>
              <option value="class 7">Class 7</option>
              <option value="class 8">Class 8</option>
              <option value="class 9">Class 9</option>
              <option value="class 10">Class 10</option>
            </select>
          </div>

          <div className="col-2">
            <button
              type="button"
              className="btn btn-success addStudentBtn"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Add Student{" "}
              <i className="fa-solid fa-user" style={{ color: "#f7f7f7" }}></i>
            </button>
          </div>
        </div>
      </div>

      {/* code for showing all the data of students */}
      <div className="conatiner-fluid">
        <div className="row">
          <div className="col-12"></div>
        </div>
      </div>
    </>
  );
}
