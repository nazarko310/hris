import './App.css'


import {useDispatch, useSelector} from "react-redux";
import Registration from "./pages/registration/Registration";
import Login from "./pages/login/Login";
import {Navigate, Route, Routes} from "react-router-dom";
import Platform from "./pages/platform/Platform";
import {MainLayout} from "./layouts";

function App() {



    const onUserCreat = async (email, password, userName) => {

        if (!email || !password || !userName) return;

        const resp = await fetch('http://localhost:5000/registration', {
            method: 'POST',
            body: JSON.stringify({email, password, userName}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
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
        const data = await resp.json();

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
                            <Route path='platform' element={<Platform/>}/>
                        </Route>
                    </Routes>

                </div>
            </div>
        </div>
    );

}

export default App;
