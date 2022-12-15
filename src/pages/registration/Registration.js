import './Registration.css'
import '../index.css'
import {useState} from "react";
import {Link} from "react-router-dom";
import photo from "../../sourse/photo_2022-12-10_00-27-36.jpg";


export default function Registration({onSubmit}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [userName, setUserName] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password || !confirmPassword || !userName) return;
        if (confirmPassword !== password) {
            alert('Паролі не співпадають');
            return;
        }


        try {
            await onSubmit(email, password, userName)
            setEmail('')
            setPassword('')
            setConfirmPassword('')
            setUserName('')
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className='registration__inner'>
            <form className='form' onSubmit={handleSubmit} action={'/platform'} method='post'>
                <p className='form__title'>Sign up</p>
                <div className="form__userName">
                    <label htmlFor='userName'>Name<span>*</span></label>
                    <input type='text'
                           value={userName} onChange={({target: {value}}) => setUserName(value)} id='userName'/>
                </div>
                <div className="form__email">
                    <label htmlFor='email'>Email<span>*</span></label>
                    <input type='email' value={email} onChange={({target: {value}}) => setEmail(value)} id='email'/>
                </div>
                <div className="form__password">
                    <label htmlFor='password'>Password<span>*</span></label>
                    <input type='password' value={password} onChange={({target: {value}}) => setPassword(value)}
                           id='password'/>
                </div>
                <div className="form__confirm">
                    <label htmlFor='confirmPassword'>Confirm password<span>*</span></label>
                    <input type='password' value={confirmPassword}
                           onChange={({target: {value}}) => setConfirmPassword(value)} id='confirmPassword'/>

                </div>
                <button type='submit'
                        disabled={!email || !password || !confirmPassword || !userName}
                        className='form__button'>
                    Sign up
                </button>
                <div className='redirect'>
                    <p>Already have an account?</p>
                    <Link to='/login' className='redirect-link'>Log in to your account</Link>
                </div>
            </form>
            <div className="logo">
                <img src={photo} alt=""/>
            </div>
        </div>


    )
}
