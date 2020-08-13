import React from 'react';
import Employees from './data';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

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
    <BootstrapTable keyField='id' data={Employees} columns={columns} />