import React from 'react'
import { registration } from '../actions/user'
import RegistForm from '../components/RegistForm'


const Registr = () => {

    const formRegHandler = (event) =>{ 
        event.preventDefault()
        let elem = event.target.elements
        let email = elem.InputEmail1.value;
        let password =  elem.InputPassword1.value;
        let name = elem.Name.value;
        let course = elem.Selectcourse.value;
        let group = elem.Selectcourse.selectedOptions[0].getAttribute("data-group");
        let status=elem.Selectrole.value;
        let cathedra = elem.Selectcourse.selectedOptions[0].getAttribute("data-cathedra");  
        registration(email, password,name,course,group, status, cathedra)
    }

    return (
        <div className="home-par">
            <form  onSubmit={formRegHandler}>
                <RegistForm/>
            </form>
        </div>
    )
}

export default Registr