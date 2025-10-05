
import './App.css'
import Counter from './counter'
import Batsman from './batsman'
import Users from './users-api'
import Friends from './friends'
import { Suspense } from 'react'


const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())

// fetch for friends
 const fetchFriends = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
 }


function App() {

  const friendsPromise = fetchFriends();



  function handleClick() {
    alert("i am clicked.")
  }

  const handleClick3 = () => {
    alert("clicked 3")
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum)
  }

  return (
    <>
     
      <h1>Vite + React</h1>

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      <Suspense fallback={<h3>Friends are coming for treat</h3>}>
      <Friends friendsPromise={friendsPromise}></Friends>

      </Suspense>


     <Batsman></Batsman>


      <Counter></Counter>







      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick3}>click me 3</button>

      <button onClick={() => handleAdd5(7)}>click add 5</button>

      
      
     
    </>
  )
}

export default App
