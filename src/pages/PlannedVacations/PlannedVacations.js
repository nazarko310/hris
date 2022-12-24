import './PlannedVacations.css'
import {Fragment} from "react";
import {Header} from "../../commponents";


export default function PlannedVacations({users, calendarDate}) {

    return (
        <Fragment>
            <Header/>
            <div>
                {

                    calendarDate.map(value =>
                        users.map(
                            user =>
                                <Fragment>
                                    {
                                        localStorage.getItem('email') === value.userIsLogin&&
                                        localStorage.getItem('email') === user.email
                                            ?
                                            <Fragment key={user.id}>
                                                <p key={user.id}>{user.userName} your vacation in
                                                    status {value.statusVacation}
                                                </p>
                                                <p key={value.id}>Date of the start vacation
                                                    is: {value.startVacation}</p>
                                                <p>Date of the end vacation is: {value.endVacation}</p>
                                            </Fragment>
                                            :
                                            <Fragment></Fragment>
                                        }

                                        </Fragment>
                                        )
                                        )
                                    }
                                </div>

                    </Fragment>
                    )
                }
