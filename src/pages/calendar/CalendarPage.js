import './Calendar.css';
import {Header} from "../../commponents";
import {Fragment, useState} from "react";
import Calendar from 'react-calendar';

export default function CalendarPage({users}) {

    const [data, setData] = useState(new Date());

    const startVacation = data[0];
    const endVacation = data[1];
    const userIsLogin = localStorage.getItem('email')


    const onCalendarCreat = async (startVacation, endVacation, userIsLogin) => {


        const resp = await fetch('http://localhost:5000/calendar', {
            method: 'POST',
            body: JSON.stringify({startVacation, endVacation, userIsLogin}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (resp.status === 200) {
            alert('The job application has been sent for processing')
        } else if (resp.status === 400) {
            alert('Checking the entered data');
        } else if (resp.status === 416) {
            alert('Vacation has already been taken, contact the manager');
        }
    }

    const handleVacation = async (e) => {
        e.preventDefault();
        if (!startVacation || !endVacation) return;

        try {
            await onCalendarCreat(startVacation.toDateString(), endVacation.toDateString(), userIsLogin)

        } catch (e) {
            console.log(e)
        }


    }

    return (
        <Fragment>
            <Header/>
            <div className='calendar__inner'>
                <div className='calendar__inner-element'>
                    <Fragment>
                        {
                            users.map(user => userIsLogin === user.email
                                ?
                                <h1 className={"calendar__inner-title"} key={user.id}>Good afternoon {user.userName},
                                    choose a vacation time convenient for you!</h1>
                                : <Fragment key={user.id}></Fragment>)
                        }
                    </Fragment>
                    <form onSubmit={handleVacation}>
                        {data.length > 0 ? (
                            <Fragment>
                                <p className='calendar__inner-text'>
                                    <span className='bold'>You want to confirm the start of your vacation: </span>
                                    <span>{data[0].toDateString()}</span>
                                </p>
                                <p className={'calendar__inner-text'}>
                                    <span className='bold'>End of your vacation: </span>
                                    <span>{data[1].toDateString()}</span>
                                </p>
                            </Fragment>
                        ) : (
                            <p className='calendar__inner-text'>
                                <span className='bold'>Default selected date: </span>
                                <i>{data.toDateString()}</i>
                            </p>
                        )}
                        <button className='calendar__inner-btn' disabled={!startVacation || !endVacation}>Confirm
                        </button>
                    </form>
                </div>
                <Calendar onChange={setData} value={data} selectRange={true} locale={'en-EN'} minDate={new Date()}/>
            </div>
        </Fragment>
    )
}
