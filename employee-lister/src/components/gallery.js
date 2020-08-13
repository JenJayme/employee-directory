//PARENT COMPONENT WITH DATA inc CONSTRUCT ARRAY OF ITEMS
import React from 'react';
import Employees from './data';


const Gallery = () => {
    let EmployeesWTags = [];
    for (var i = 0; i < Employees.length; i++) {
      let fullName = Employees[i].firstName + " " + Employees[i].lastName;
      let artUrl = process.env.PUBLIC_URL+"/images/"+Employees[i].photo;
      console.log(artUrl);
      EmployeesWTags.push(
        <div className="profile">
        <img key={Employees[i].index} src={artUrl} alt={fullName} className="headshots"></img>
        <h1>{fullName}</h1>
        <h4>{Employees[i].title}</h4>
        <h5>{Employees[i].department}</h5>
        <p>Phone: {Employees[i].phone}</p>
        <p>Email: {Employees[i].email}</p>
        <p>Birthday: {Employees[i].birthday}</p>
        </div>
      )
    }
    return (
      <div>
        {EmployeesWTags}
      </div>
    )
  }

export default Gallery;