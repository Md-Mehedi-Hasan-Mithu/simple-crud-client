import React from 'react';
import { useLoaderData } from 'react-router';
const StudentDetails = () => {
    const student = useLoaderData();
    console.log(student);
    return (
        <div>
            <h2>Student Details</h2>    
            <p>Name: {student.name}</p>
            <p>Email: {student.email}</p>
            <p>ID: {student.id}</p>
        </div>
    );
};
export default StudentDetails;