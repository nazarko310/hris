import './App.css'


import {useDispatch, useSelector} from "react-redux";
import Registration from "./pages/registration/Registration";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import Platform from "./pages/platform/Platform";
import {MainLayout} from "./layouts";
import {useEffect} from "react";
import {Login} from "./pages/login/Login";

export default function App() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onUserCreat = async (email, password, userName) => {

        if (!email || !password || !userName) return;

        const resp = await fetch('http://localhost:5000/registration', {
            method: 'POST',
            body: JSON.stringify({email, password, userName}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (resp.status === 200) {
            navigate('/login')
        } else {
            alert('User is already register')

        }
        const data = await resp.json();

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
        } else {
            alert('Password or email is incorrect')
        }

        const data = await resp.json();

    }

    useEffect(() => {
        onUserLogin();
    }, [])


    return (
        <div className='main'>
            <div className="container">
                <div className="main__inner">
                    <Routes>
                        <Route path={'/'} element={<MainLayout/>}>
                            <Route index element={<Navigate to={"/login"}/>}/>
                            <Route path='registration' element={<Registration onSubmit={onUserCreat}/>}/>
                            <Route path='login' element={<Login onSubmit={onUserLogin}/>}/>
                            <Route path='platform' element={<Platform/>}/>
                        </Route>
                    </Routes>

                </div>
            </div>
        </div>
    );

}
