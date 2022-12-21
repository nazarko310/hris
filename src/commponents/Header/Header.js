import logo from "../../sourse/logo.png";
import {Link} from "react-router-dom";
import './Header.css'
import PlannedVacations from "../../pages/PlannedVacations/PlannedVacations";


const Header = () => {
    function localStorageClear() {
        localStorage.clear()
        return;
    }

    return (
        <header className='header'>
            <div className="header__inner">
                <div className='header__logo'>
                    <img src={logo} alt="logo"/>
                </div>
                <nav className="nav">
                    <Link to={'/platform'} className='nav__link'>Platform</Link>
                    <Link to={'/calendar'} className='nav__link'>Calendar</Link>
                    <Link to={'/planned-vacation'} className='nav__link'>PlannedVacations</Link>
                    <Link to={'/login'} className='nav__link' onClick={localStorageClear}>Log out</Link>
                </nav>
            </div>
        </header>
    )
}

export {Header}