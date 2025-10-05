
import './App.css'
import Counter from './counter'
import Batsman from './batsman'

function App() {

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
     <Batsman></Batsman>


      <Counter></Counter>







      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick3}>click me 3</button>

      <button onClick={() => handleAdd5(7)}>click add 5</button>

      
      
     
    </>
  )
}

export default App
