import React from 'react'

const AuthForm = () => {
    return (
        <div className="auth-form">
                <div className="mb-3">
                    <label htmlFor="InputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="InputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="Check1"/>
                    <label className="form-check-label" htmlFor="Check1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
        </div>
    )
}

export default AuthForm