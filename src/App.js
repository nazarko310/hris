import './App.css'

import Registration from "./pages/registration/Registration";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import Platform from "./pages/platform/Platform";
import {MainLayout} from "./layouts";
import {Login} from "./pages/login/Login";
import {useEffect, useState} from "react";
import CalendarPage from "./pages/calendar/CalendarPage";
import PlannedVacations from "./pages/PlannedVacations/PlannedVacations";
import Admin from "./pages/admin/Admin";

export default function App() {

    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [calendarDate, setCalendarDate] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(value => value.json())
            .then(response => {
                setUsers(response)
            });
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/planned-vacation')
            .then(value => value.json())
            .then(response => {
                setCalendarDate(response)
            });
    }, [])

    const onUserCreat = async (email, password, userName, secondName, department, position) => {

        if (!email || !password || !userName) return;

        const resp = await fetch('http://localhost:5000/registration', {
            method: 'POST',
            body: JSON.stringify({email, password, userName, secondName, department, position}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (resp.status === 200) {
            navigate('/login')
        } else if (resp.status === 400) {
            alert('User is already register')
        }

    }
    const onUserLogin = async (email, password) => {

        if (!email || !password) return;

        const resp = await fetch('http://localhost:5000/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json'
            }

        })

        if (resp.status === 200) {
            navigate('/platform');
        } else if (resp.status === 400) {
            alert('Password or email is incorrect')
        } else if (email === 'admin@gmail.com' && password === 'admin') {
            navigate('/admin')
        }

    }

    return (
        <div className='main'>
            <div className="container">
                <div className="main__inner">
                    <Routes>
                        <Route path={'/'} element={<MainLayout/>}>
                            <Route index element={<Navigate to={"/login"}/>}/>
                            <Route path='registration' element={<Registration onSubmit={onUserCreat}/>}/>
                            <Route path='login' element={<Login onSubmit={onUserLogin}/>}/>
                            <Route path='platform' element={<Platform users={users}/>}/>
                            <Route path='calendar' element={<CalendarPage users={users}/>}/>
                            <Route path='planned-vacation'
                                   element={<PlannedVacations users={users} calendarDate={calendarDate}/>}/>
                            <Route path='admin' element={<Admin users={users} calendarDate={calendarDate}/>}/>
                        </Route>
                    </Routes>

                </div>
            </div>
        </div>
    );
}
