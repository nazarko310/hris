import './PlannedVacations.css'
import {Fragment, useEffect, useState} from "react";
import {Header} from "../../commponents";


export default function PlannedVacations({users, calendarDate}) {




    return (
        <Fragment>
            <Header/>
            <div
                className={calendarDate.map(value => value.status === 'register' ? 'yellow' : 'red') + ' ' + 'vacation'}>
                {
                    calendarDate.map(value =>
                        users.map(
                            user => localStorage.getItem('email') === user.email
                                ?
                                <Fragment key={user.id}>
                                    <p key={user.id}>{user.userName} your vacation in
                                        status {value.status}
                                    </p>
                                    <p key={value.id}>Date of the start vacation is: {value.startVacation}</p>
                                    <p>Date of the end vacation is: {value.endVacation}</p>
                                </Fragment>
                                :
                                <Fragment key={user.id}/>
                        )
                    )
                }
            </div>

        </Fragment>
    )
}
