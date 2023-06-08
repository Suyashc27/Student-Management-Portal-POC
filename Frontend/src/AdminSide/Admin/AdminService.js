import axios from "axios";
import { useState } from "react";




const token = JSON.parse(localStorage.getItem("data"))

// export const common = () => {
//     const temp = JSON.parse(localStorage.getItem("data")).token
//     setToken(temp.token)
//     console.log(token)

// }

export const client = axios.create({

    baseURL: `http://localhost:8080/`,

    mode: "no-cors",

    headers: {

        "Content-type": "application/json",

        'Authorization': `Bearer ${token && token.token}`,

        'Access-Control-Allow-Origin': '*'

    }

});


// export const addStudent = (student) => {
//     console.log(student)
//     return client("http://localhost:8080/admin/addstudent", {
//         method: "POST",
//         headers: { "Content-Type": "application/json", },
//         body: JSON.stringify(student)
//     })
// }

export const getStudent = (props) => {


    return client.get("http://localhost:8080/admin/getstudent")
        .then(res => { return res.data })

}
export const getStudentById = (id) => {
    return client.get("http://localhost:8080/admin/getstudent/" + id)
        .then(res => { return res.data })
}
export const updateStudent = (student, id) => {
    return fetch("http://localhost:8080/admin/updatestudent/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student)
    })
        .then(res => { return res.data })
}

export const getTeacher = (props) => {
    return client.get("http://localhost:8080/admin/getteacher")
        .then(res => { return res.data })
}
export const getTeacherById = (id) => {
    return client.get("http://localhost:8080/admin/getteacher/" + id)
        .then(res => { return res.data })
}

export const getSubject = (id) => {
    return client.get("http://localhost:8080/student/getSubject/" + id)
        .then(res => { return res.data })

}
export const getStudentforTeacher = (id) => {
    return client.get("http://localhost:8080/teacher/getStudent/" + id)
    .then(res=>{return res.data})
}
export const getHomeworkforStudent = (id) => {
    return client.get("http://localhost:8080/student/getHomework/" + id)
    .then(res=>{return res.data})
}
export const loginUser = (logindetail) => {
    return client.post('http://localhost:8080/api/v1/auth/login', logindetail)

        .then((response) => response.data)
}