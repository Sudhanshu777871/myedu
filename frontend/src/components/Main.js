import React from "react";
import "./css/Main.css";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Outlet, Link } from "react-router-dom";
export default function Main() {
  // code for changing mode through redux
  const mode = useSelector((state) => state.myMode);

  // function for side options of side bar
  const sideOptions = (...para) => {
    return (
      <>
        <button
          className="btn btn-danger sideOptionsBtn"
          type="button"
          data-toggle="collapse"
          data-target={`#${para[1]}`}
          aria-expanded="false"
          aria-controls={`${para[1]}`}
          style={{ marginBottom: para[2] + "px" }}
        >
          {para[0]}{" "}
          <i className="fa-solid fa-circle-chevron-down downArrowSign"></i>
        </button>

        <div
          className="collapse"
          id={`${para[1]}`}
          style={{ marginBottom: para[2] + "px" }}
        >
          <div className="card card-body">
            <ul>
              {para[3].map(({ optionName, optionUrl }) => {
                return (
                  <li key={uuidv4()}>
                    <Link to={`/${optionUrl}`}>
                      {" "}
                      <i className="fa-solid fa-angle-right"></i>{" "}
                      <span className="text-decoration-none liItems">
                        {optionName}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          {/* side navbar col */}
          <div
            className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 sideNabvarCol"
            style={
              mode
                ? { backgroundColor: "black" }
                : { backgroundColor: "rgb(3, 31, 54)" }
            }
          >
            <div className="d-flex flex-column pt-2 text-white min-vh-100">
              {/* button for overview */}

              <Link to="/">
                {" "}
                <button className="btn btn-danger sideOptionsBtn" type="button">
                  {" "}
                  Home <i className="fa-solid fa-house downArrowSign"></i>{" "}
                </button>
              </Link>
              {sideOptions("Fee Management", "fee_management", "0", [
                { optionName: "Fee Structure", optionUrl: "fee_structure" },
                {
                  optionName: "Total Fee Collection",
                  optionUrl: "total_fee_collection",
                },
                {
                  optionName: "Student Fee Data",
                  optionUrl: "student_fee_data",
                },
                { optionName: "Fee Remainder", optionUrl: "fee_remainder" },
              ])}
              {sideOptions(
                "Attendance Management",
                "attendance_management",
                "0",
                [
                  {
                    optionName: "Track Attendance",
                    optionUrl: "track_attendance",
                  },
                  { optionName: "Sort Attendance", optionUrl: "option_url" },
                  {
                    optionName: "Medical / Other Issue",
                    optionUrl: "medical_other_issue",
                  },
                ]
              )}
              {sideOptions("Staff Management", "staff_management", "0", [
                { optionName: "Attendance", optionUrl: "attendance" },
                { optionName: "Salary", optionUrl: "salary" },
                { optionName: "Record", optionUrl: "record" },
                { optionName: "Setting", optionUrl: "staff_setting" },
              ])}
              {sideOptions("Parent Control", "parent_control", "0", [
                {
                  optionName: "Child Attendance",
                  optionUrl: "child_attendance",
                },
                { optionName: "Child Repote", optionUrl: "child_repote" },
                { optionName: "Messages", optionUrl: "message" },
                { optionName: "Child Fees", optionUrl: "child_fees" },
              ])}
              {sideOptions("Remote Access", "remote_access", "0", [
                { optionName: "Setting", optionUrl: "remote_setting" },
              ])}
              {sideOptions("Automation", "automation", "0", [
                { optionName: "Holidy", optionUrl: "holiday" },
                { optionName: "Fees Remainder", optionUrl: "fees_management" },
                { optionName: "Custome Message", optionUrl: "custome_message" },
                {
                  optionName: "Attendance Remainder",
                  optionUrl: "attendance_remainder",
                },
                { optionName: "Event Remainder", optionUrl: "event_remainder" },
                {
                  optionName: "PTM/Exam Remainder",
                  optionUrl: "ptm_exam_remainder",
                },
                {
                  optionName: "Homework Remainder",
                  optionUrl: "homework_remainder",
                },
                { optionName: "Settings", optionUrl: "automation_settings" },
              ])}
              {sideOptions("Custom", "custom", "30", [
                { optionName: "Library System", optionUrl: "library_system" },
              ])}
            </div>
          </div>

          <div
            className="col p-0 m-0"
            style={
              mode
                ? { backgroundColor: "rgb(4, 22, 52)", color: "white" }
                : { backgroundColor: "white" }
            }
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
