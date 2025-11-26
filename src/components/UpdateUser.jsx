import React from 'react';
import { useLoaderData } from 'react-router';   
const UpdateUser = () => {
    const user = useLoaderData();
    const handleUpdateUser = (event) => {
        event.preventDefault();  
        const name = event.target.name.value;
        const email = event.target.email.value;
        const updatedUser = { name, email };
        console.log("Updated User:", updatedUser);
        // Here you can add the fetch call to update the user in the backend
        fetch(`http://localhost:3000/users/${user._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data =>{
            console.log("Data after updating user in db",data);
            if(data.modifiedCount > 0){
                alert('User updated successfully');
            }
        })
    };
    return (
        <div>
            <h2>Update User: {user.name}</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" defaultValue={user.name} /><br/>
                <input type="email" name="email" defaultValue={user.email} /><br/>
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};
export default UpdateUser;