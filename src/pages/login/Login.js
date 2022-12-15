import './Login.css'
import '../index.css'

import {useState} from "react";
import {Link} from "react-router-dom";


import photo from "../../sourse/photo_2022-12-10_00-27-36.jpg";


export default function Login({onSubmit}) {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')


    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) return;
        // navigate('/platform')

        try {
            await onSubmit(email, password)
            setEmail('')
            setPassword('')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='login__inner'>
            <form className='form form-login' onSubmit={handleLogin}>
                <p className='form__title'>Log in</p>
                <div className="form__email">
                    <label htmlFor='email'>Email<span>*</span></label>
                    <input type='email' value={email} onChange={({target: {value}}) => setEmail(value)} id='email'
                           required/>
                </div>
                <div className="form__password">
                    <label htmlFor='password'>Password<span>*</span></label>
                    <input type='password' value={password} onChange={({target: {value}}) => setPassword(value)}
                           id='password' required/>
                </div>
                <button type='submit' disabled={!email || !password} className='form__button'>Log in</button>
                <div className='redirect redirect-login'>
                    <p>Don't have an account?</p>
                    <Link to='/registration' className='redirect-link'>Register your account</Link>
                </div>
            </form>
            <div className="logo">
                <img src={photo} alt=""/>
            </div>
        </div>


    )
}