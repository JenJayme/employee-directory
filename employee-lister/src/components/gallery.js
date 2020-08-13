//PARENT COMPONENT WITH DATA inc CONSTRUCT ARRAY OF ITEMS
import React from 'react';
import Employees from './data';
import { Card } from 'react-bootstrap';

const Gallery = () => {
  let EmployeesWTags = [];
  for (var i = 0; i < Employees.length; i++) {
    let fullName = Employees[i].firstName + " " + Employees[i].lastName;
    let artUrl = process.env.PUBLIC_URL + "/images/" + Employees[i].photo;
    console.log(artUrl);
    EmployeesWTags.push(
    <div>
      <Card>
        <Card.img variant="top" key={Employees[i].index} src={artUrl} alt={fullName} className="headshots"></Card.img>
        <Card.Body>
        <Card.Title>{fullName}</Card.Title>

        <Card.Text>

          <p>Title: {Employees[i].title}</p>

          <p>Department: {Employees[i].department}</p>

          <p>Phone: {Employees[i].phone}</p>

          <p>Email: {Employees[i].email}</p>

          <p>Birthday: {Employees[i].birthday}</p>

          </Card.Text>
        </Card.Body>
      </Card>
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