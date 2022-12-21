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
    const [secondName, setSecondName] = useState('')
    const [department, setDepartment] = useState('')
    const [position, setPosition] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password || !confirmPassword || !userName) return;
        if (confirmPassword !== password) {
            alert('Паролі не співпадають');
            return;
        }


        try {
            await onSubmit(email, password, userName, secondName, department, position)
            setEmail('')
            setPassword('')
            setConfirmPassword('')
            setUserName('')
            setSecondName('')
            setDepartment('')
            setPosition('')
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className='registration__inner'>
            <form className='form' onSubmit={handleSubmit} action={'/platform'} method='post'>
                <p className='form__title'>Sign up</p>
                <div className="form__userName from-inputBlock">
                    <label htmlFor='userName'>Name<span>*</span></label>
                    <input type='text'
                           value={userName} onChange={({target: {value}}) => setUserName(value)} id='userName'/>
                </div>
                <div className="form__secondName from-inputBlock">
                    <label htmlFor='secondName'>Second name<span>*</span></label>
                    <input type='text'
                           value={secondName} onChange={({target: {value}}) => setSecondName(value)} id='secondName'/>
                </div>
                <div className="form__department from-inputBlock">
                    <label htmlFor='department'>Department<span>*</span></label>
                    <input type='text'
                           value={department} onChange={({target: {value}}) => setDepartment(value)} id='department'/>
                </div>
                <div className="form__position from-inputBlock">
                    <label htmlFor='position'>Position<span>*</span></label>
                    <input type='text'
                           value={position} onChange={({target: {value}}) => setPosition(value)} id='department'/>
                </div>
                <div className="form__email from-inputBlock">
                    <label htmlFor='email'>Email<span>*</span></label>
                    <input type='email' value={email} onChange={({target: {value}}) => setEmail(value)} id='email'/>
                </div>
                <div className="form__password from-inputBlock">
                    <label htmlFor='password'>Password<span>*</span></label>
                    <input type='password' value={password} onChange={({target: {value}}) => setPassword(value)}
                           id='password'/>
                </div>
                <div className="form__confirm from-inputBlock">
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
