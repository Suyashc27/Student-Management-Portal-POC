import React, { useState, useEffect } from 'react'
import { Label } from 'reactstrap';
// import Button from "@mui/material/Button";
import button from 'reactstrap';

import bookimage from '../../Pictures/book.gif'
import classes from "../../Home/landing.module.css";

export default function AddSubjects() {

    const [subject_id, setSubjectId] = useState("");
    const [subject_name, setSubjectName] = useState("");
    const [standard_id, setStandardId] = useState("");
    const [token, setToken] = useState(null)
    let data = localStorage.getItem("data")
    useEffect(() => {

        const temp = JSON.parse(data)
        setToken(temp.token)

    }, [])
    const addSubjects = () => {

        const standard = {
            standard_id
        }
        const subject = { subject_id, subject_name, standard };


        fetch("http://localhost:8080/admin/addsubject", {
            method: "POST",


            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },

            body: JSON.stringify(subject),
        }).then((response) => {
            console.log(response);
        });
    }
    const [checkSubjectValidate, setcheckSubjectValidate] = useState(true)
    const [checkStdIdValidate, setcheckStdIdValidate] = useState(true)
    const [checkAllValidate, setcheckAllValidate] = useState(true)

    const subjectValidate = (e) => {
        setSubjectName(e.target.value)
        if (e.target.value.length === 0) {
            setcheckSubjectValidate(false)

        }

        else {
            setcheckSubjectValidate(true)
            setcheckAllValidate(false || !checkStdIdValidate)
        }
    }
    const stdIdValidate = (e) => {
        setStandardId(e.target.value)
        if (e.target.value.length === 0) {
            setcheckStdIdValidate(false)
        }
        else {
            setcheckStdIdValidate(true)
            setcheckAllValidate(false || !checkSubjectValidate)
        }
    }

    return (
        <div className={classes.addsubjectcontainer}>

            <div className={classes.addsubjectmain}>

                <div className={classes.addsubjectform}>
                    <form className={classes.formBody}>
                        <div className={classes.formrow}>
                            <div className={checkSubjectValidate ? classes.hidden : classes.textRight + " text-danger"}>This field is required!!</div>
                            <Label className={classes.labelBody}>Subject Name: </Label>
                            <input className={classes.inputBody}
                                type="text"
                                id="subname"
                                name="subname"
                                placeholder="Subject Name"
                                required
                                value={subject_name}
                                onChange={subjectValidate}
                            />
                        </div>




                        <div className={classes.formrow}>
                            <div className={checkStdIdValidate ? classes.hidden : classes.textRight + " text-danger"}>This field is required!!</div>
                            <Label className={classes.labelBody}>Standard Id: </Label>
                            <input className={classes.inputBody}
                                type="text"
                                id="standardid"
                                name="standardid"
                                placeholder="Standard Id"
                                required
                                value={standard_id}
                                onChange={stdIdValidate}
                            />
                        </div>
                        <button className={classes.btnBody} onClick={addSubjects} disabled={false || checkAllValidate || subject_name.length === 0 || standard_id.length === 0}>Add Subjects</button>
                    </form>

                </div>
                <div className={classes.addsubjectimage}>
                    <img src={bookimage}></img>
                </div>

            </div >

        </div >
    )

}