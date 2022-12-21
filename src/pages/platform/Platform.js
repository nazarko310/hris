import './Platform.css'
import user_logo from "../../sourse/user.png"
import user_logo2 from "../../sourse/user2.png"


import {Header} from "../../commponents";
import {Fragment} from "react";


export default function Platform({users}) {



    return (
        <Fragment>
            <Header/>
            <div className="intro">
                <div className="intro__bg">
                    {
                        users.map(user => localStorage.getItem('email') === user.email
                            ?
                            <div key={user.id} className='userLogin'>
                                <img className='userLogin__img' src={user_logo} alt="user_logo"/>
                                <p className='userLogin__name'>Hello {user.userName}</p>
                                <p className='userLogin__position'>{user.position}</p>
                            </div>
                            : <Fragment key={user.id}></Fragment>)
                    }
                </div>
            </div>
            <div className="team">
                <h2 className='team__title'>Your team</h2>
                <div className='team__inner'>
                    {
                        users.map(user =>
                            <div key={user.id} className='team__element'>
                                <img className='userLogin__img' src={user_logo2} alt="user_logo"/>
                                <p className='userLogin__name'>{user.userName} {user.secondName}</p>
                                <p className='userLogin__position'>{user.position}</p>
                            </div>)
                    }
                </div>
            </div>

        </Fragment>
    )
}
