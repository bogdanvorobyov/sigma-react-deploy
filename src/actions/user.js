
import axios from 'axios'
import {setUser} from "../store/userReducer";

export const registration = async (email,password, name,course, group, status,cathedra) => {
    try {
        const response = await axios.post(`https://sigma-server.herokuapp.com/api/auth/registration`, {
            email,
            password,
            name,
            course,
            group, 
            status,
            cathedra
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const login =  (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`https://sigma-server.herokuapp.com/api/auth/login`, {
                email,
                password
            })
            dispatch(setUser(response.data))
            localStorage.setItem('token', response.data.user.token)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const auth =  () => {
    return async dispatch => {
        try {
            const response = await axios.get(`https://sigma-server.herokuapp.com/api/auth/auth`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data))
            localStorage.setItem('token', response.data.user.token)
        } catch (e) {
            localStorage.removeItem('token')
        }
    }
}






