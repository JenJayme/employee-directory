//PARENT COMPONENT WITH DATA inc CONSTRUCT ARRAY OF ITEMS
import React from 'react';
import Employees from './data';
import { Table } from 'react-bootstrap';


const EmployeeTable = () => {
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
            <p><strong>{fullName}</strong></p>
          </td>

          <td>
            <p>{Employees[i].title}</p>
          </td>

          <td>
            <p>{Employees[i].department}</p>
          </td>

          <td>
            <p>{Employees[i].phone}</p>
          </td>

          <td>
            <p>{Employees[i].email}</p>
          </td>

          <td>
            <p>{Employees[i].birthday}</p>
          </td>

          <td>
            <p>{Employees[i].id}</p>
          </td>

        </tr>
    )
  }
  return (

<Table striped bordered hover>
  <thead>
    <tr className="rowhead">
      <th>Photo</th>
      <th>Name</th>
      <th>Title</th>
      <th>Department</th>
      <th>Phone</th>
      <th>Email</th>
      <th>Birthday</th>
      <th>Employee ID</th>
    </tr>
  </thead>
  <tbody>
  {EmployeesWTags}
  </tbody>
</Table>

  )
}

export default EmployeeTable;