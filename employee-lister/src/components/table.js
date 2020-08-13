import React from 'react';
import Employees from './data';
import BootstrapTable from 'react-bootstrap-table-next';



const columns = [{
        dataField: 'id',
        text: 'Employee ID'
    }, {
        dataField: 'firstName',
        text: 'First Name'
    }, {
        dataField: 'lastName',
        text: 'Last Price'
    }, {
        dataField: 'title',
        text: 'Job Title'
    }, {
        dataField: 'department',
        text: 'Department'
    }, {
        dataField: 'birthday',
        text: 'Birthday'
    }, {
        dataField: 'email',
        text: 'Email'
    }, {
        dataField: 'phone',
        text: 'Phone'
    }, {
        dataField: 'photo',
        text: 'Photo'
    }];

export default () =>
    <BootstrapTable keyField='id' data={products} columns={columns} />