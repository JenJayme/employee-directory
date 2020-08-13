//PARENT COMPONENT WITH DATA inc CONSTRUCT ARRAY OF ITEMS
import React from 'react';
import Employees from './data';
import { Table, tr, td, th, thead, tbody } from 'react-bootstrap';

const Gallery = () => {
  let EmployeesWTags = [];
  for (var i = 0; i < Employees.length; i++) {
    let fullName = Employees[i].firstName + " " + Employees[i].lastName;
    let artUrl = process.env.PUBLIC_URL + "/images/" + Employees[i].photo;
    console.log(artUrl);
    EmployeesWTags.push(
        <tr>
          <td>
            <img key={Employees[i].index} src={artUrl} alt={fullName} className="headshots"></img>
          </td>

          <td>
            <p>{fullName}</p>
          </td>

          <td>
            <p>{Employees[i].title}</p>
          </td>

          <td>
            <p>{Employees[i].department}</p>
          </td>

          <td>
            <p>Phone: {Employees[i].phone}</p>
          </td>

          <td>
            <p>Email: {Employees[i].email}</p>
          </td>

          <td>
            <p>Birthday: {Employees[i].birthday}</p>
          </td>
        </tr>
    )
  }
  return (

<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Title</th>
      <th>Department</th>
      <th>Birthday</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Photo</th>
    </tr>
  </thead>
  <tbody>
  {EmployeesWTags}
  </tbody>
</Table>

  )
}

export default Gallery;