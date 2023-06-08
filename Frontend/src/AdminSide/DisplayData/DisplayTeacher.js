import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";
import TopNavBar from "../NavBars/TopNavBar";
import NestedSideBar from "../NavBars/NestedSideBar";
import { getTeacher } from "../Admin/AdminService";
import classes from "./Display.module.css";
import { Outlet } from "react-router-dom";

export default function DisplayTeacher(props) {
  const [rows, setRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getTeacher().then((response) => {
      setRows(response);
    });
  }, []);

  const columns = [
    { field: "id", headerName: "Teacher ID" },

    { field: "first_name", headerName: "First name", width: 120 },

    { field: "last_name", headerName: "Last name", width: 120 },

    { field: "username", headerName: "User Name" },

    { field: "qualification", headerName: "Qualification" ,width: 120},

    { field: "gender", headerName: "Gender",width: 80 },

    { field: "email", headerName: "Email Id" ,width: 250},

    { field: "dob", headerName: "DOB" },

    { field: "contact", headerName: "Contact No" },
  ];

  let tempRows = [];
  rows
    .filter((val) => {
      if (searchTerm === "") return val;
      else if (
        val.user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.user.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.user.username.toLowerCase().includes(searchTerm.toLowerCase())
      )
        return val;
    })
    .forEach((data) => {
      var temp = {
        id: data.teacher_id,
        first_name: data.user.first_name,
        last_name: data.user.last_name,
        username: data.user.username,
        qualification: data.qualification,
        gender: data.user.gender,
        email: data.user.email,
        dob: data.user.dob,
        contact: data.user.contact,
      };
      tempRows.push(temp);
    });

  return (
    <div>
      <Outlet/>
        <div
          className="centerContainer"
          style={{ padding: "100px", marginLeft: "180px" }}
        >
          <div className={classes.DisplayHead}>
            <input
              className={classes.searchBar}
              type="search"
              placeholder="Search..."
              onChange={(e) => setSearchTerm(e.target.value)}
            ></input>
            <h1>{props.name}</h1>
          </div>


          {rows && (
            <DataGrid
              rows={tempRows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              // checkboxSelection
              columnBuffer={9}
              style={{ height: "300px", width: "1150px" }}
            />
          )}
        </div>
      </div>
  );
}
