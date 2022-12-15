
import './Platform.css'

import {Header} from "../../commponents/Header";

export default function Platform() {

    return (
        <>
           <Header/>
            <div>{localStorage.getItem('email')}</div>
        </>
    )
}
