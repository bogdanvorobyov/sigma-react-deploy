import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {logout} from "../store/userReducer";

const Header = () => {

    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    return (
        <div >  
            <nav className='nav-par navbar navbar-light bg-light'>
             <Link to="/" className="navbar-text nav-link"> Home </Link>
             {!isAuth &&<Link to="/login" className="navbar-text nav-link"> Login </Link>}
             {!isAuth &&<Link to='/registration' className="navbar-text nav-link">Registration</Link>}
             {isAuth &&<div className="navbar__login" onClick={() => dispatch(logout()) }>Выход</div> }

            </nav>            
        </div>
    )
}

export default Header