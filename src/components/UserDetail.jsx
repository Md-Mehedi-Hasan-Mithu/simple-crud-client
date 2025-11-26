import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetail = () => {
    const user = useLoaderData();
    console.log(user);
    return (
        <div>
            <h2>User Details</h2>    
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>ID: {user._id}</p>
        </div>
    );
};
export default UserDetail;