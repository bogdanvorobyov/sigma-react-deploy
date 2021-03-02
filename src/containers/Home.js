import React from 'react'
import {useSelector} from 'react-redux'
import GetInfo from './GetInfo'

const Home = () => {

    const isAuth = useSelector(state => state.user.isAuth)


    return (
        <div className="home-par">
           {!isAuth &&
           <div className='welcom'>
                <p>Welcom to university education portal</p>
                <p>Please login!</p>
           </div>}
           {isAuth &&
                <GetInfo/>
            }
        </div>
    )
}

export default Home