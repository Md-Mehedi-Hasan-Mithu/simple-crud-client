import React, { use, useState } from 'react';
const Users = ({usersPromise}) => {
    const initialUsers = use(usersPromise);
    const [users,setUsers] = useState(initialUsers);
    const handleAddUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = { name, email };
        console.log(user);

        //create user in db
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {  
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log("Data after creating user in db",data);
            if(data.insertedId){
                user._id = data.insertedId;
                const newUsers = [...users, user];
                setUsers(newUsers);
                alert('User added successfully')
                event.target.reset();
            }
        });
    } 

  return (
    <div>   
        <div>
            <form onSubmit={handleAddUser}>
            <input type="text" name="name" />
            <br />
            <input type="email" name="email" />
            <br />
            <input type="submit" value="Add User" />

        </form>
        </div>
        {/* {View users} */}
        <div>
            <h2>Users List:</h2>
            <ul>
                {
                    users.map((user) => <li key={user._id}>{user.name} : {user.email}</li>)
                }
            </ul>
        </div>
        
    </div>
  );
};
export default Users;