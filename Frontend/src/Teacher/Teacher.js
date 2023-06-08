import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import NavbarComponent from '../Components/NavbarComponent'

function Teacher() {

    const [token, setToken] = useState(null)
    let data = localStorage.getItem("data")
    const [login, setLogin] = useState(false)
    const [user, setUser] = useState(undefined)
   

    const isLoggedIn = () => {
        if (data === null) return false
        else return true
    }
    const getUserDetail = () => {
        if (isLoggedIn()) {
            return JSON.parse(localStorage.getItem("data")).user

        }
        else
            return false
    }

    useEffect(() => {

        const temp = JSON.parse(data)
        setToken(temp.token)

        setLogin(isLoggedIn())
        setUser(getUserDetail())

    }, [login])

    return (
        <div>
            {
                login && (
                    <>
                        {
                            user.role_type === "TEACHER" && (
                                <>
                                    <NavbarComponent name={user.first_name}/>
                                    <Outlet />
                                </>
                            )
                        }
                    </>
                )
            }
        </div>
    )
}

export default Teacher
