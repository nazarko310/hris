import './Admin.css'
import {Fragment} from "react";

export default function Admin({users, calendarDate}) {

    const id = calendarDate.map(value => value.id)


    const onAdmin = async (id) => {

        const resp = await fetch('http://localhost:5000/admin/', {
            method: 'POST',
            body: JSON.stringify({id, statusVacation: 'approve'}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (resp.status === 200) {
            alert('Vacation approve');
        } else {
            alert('Bad request');
        }
    }

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            await onAdmin(id)

        } catch (e) {
            console.log(e)
        }
    }


    return (
        <Fragment>
            {
                users.map(user =>
                    calendarDate.map(value => value.statusVacation === 'register' && user.email === value.userIsLogin
                        ?
                        <form onSubmit={handleUpdate}>
                            <p>Не погоджені заявки на відпустку {user.userName}
                                <br/>
                                Дата початку: {value.startVacation}
                                <br/>

                                Дата закінчення: {value.endVacation} </p>
                            <button>Update</button>
                        </form>
                        :
                        <Fragment/>
                    )
                )
            }
        </Fragment>

    )
}
