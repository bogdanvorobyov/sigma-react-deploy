import React from 'react'
import {useSelector} from 'react-redux'




function GetInfo (){
  const user = useSelector(state => state.user.currentUser.user)

  let information =''
    

    if (user.status ==='student'){ 
        information = <div>
            <div>Your group - {user.student.group} </div>
            <div>Your course - {user.student.course} </div>
        </div>

     }
     else if(user.status ==='teacher'){ 
        information = <div>
        <div>Your cathedra - {user.teacher.cathedra}</div>
        <div>Your course - {user.teacher.course} </div>
    </div>
    }

    
    return (
        <div className="info-about-user" >
            <h2>Hello, {user.user.name}!</h2>
            <div>Your status - {user.status} </div>
            {information}
        </div>
    )
}

export default GetInfo