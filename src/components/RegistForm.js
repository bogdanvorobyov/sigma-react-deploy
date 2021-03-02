import React from 'react'

const RegistForm = () => {
    return (
        <div className='regist-form'>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Your name</label>
                    <input type="name" className="form-control" id="Name"/>
                </div>     
                <div className="mb-3">
                    <label htmlFor="InputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="InputPassword1"/>
                        <span id="passwordHelpInline" className="form-text">
                        Must be 8-20 characters long.
                        </span>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPassword2" className="form-label">Password</label>
                    <input type="password" className="form-control" id="InputPassword2"/>
                    <span id="passwordHelpInline" className="form-text">
                        Repeate please the password.
                    </span>
                </div>
                <div className="mb-3">
                    <label htmlFor="Selectrole" className="form-label">Choose who are you</label>
                    <select name="role"  className="form-control" id="Selectrole">
                        <option value="student">student</option>
                        <option value="teacher">teacher</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="Selectcourse" className="form-label">Choose course where you want to study/teach</label>
                    <select name="course"  className="form-control" id="Selectcourse">
                        <option value="Criminallaw" data-cathedra='law' data-group='01-01'>Criminal law</option>
                        <option value="Civillaw" data-cathedra='law' data-group='01-02'>Civil law</option>
                        <option value="Statelaw" data-cathedra='law' data-group='01-03'>State law</option>
                        <option value="Javascript" data-cathedra='IT' data-group='02-01'>Javascript</option>
                        <option value="Pyhton" data-cathedra='IT' data-group='02-02'>Pyhton</option>
                        <option value="PHP" data-cathedra='IT' data-group='02-03'>PHP</option>
                        <option value="English" data-cathedra='Langluages' data-group='03-01'>English</option>
                        <option value="French" data-cathedra='Langluages' data-group='03-02'>French</option>
                        <option value="Ukrainian" data-cathedra='Langluages' data-group='03-03'>Ukrainian</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
        </div>
    )
}

export default RegistForm