import './App.css'
import Users from './components/Users'
import Students from './components/Students'

const usersPromise = fetch('http://localhost:3000/users').then(res => res.json());
const studentsPromise = fetch('http://localhost:3000/students').then(res => res.json()); 

function App() {

  return (
    <>
      
      <h1>Simple Crud Client</h1>
       <Users usersPromise={usersPromise}></Users>
       <Students studentsPromise={studentsPromise}></Students>
    </>
  )
}

export default App
