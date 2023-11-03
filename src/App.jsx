
import './App.css'
import Person from './Person'
import BookStore from './BookStore'
import Counter from './counter'
import Team from './Team'
import Users from './Users'
import Posts from './Post'
import Friends from './Friends'

function App() {

  function handleButton() {
    alert('Button Clicked')
  }
  const handleClick2 = () => {
    alert('button 2 clicked')
  }
  const handleFour = (num) => {
    alert(num+5)
  }
  const persons = [
    {name: 'Rahim', age: 45, city: "Cumilla"},
    {name: 'Karim', age: 35, city: "Narail"},
    {name: 'Nurul', age: 40, city: "Chandpur"},
    {name: 'Abul', age: 60, city: "Rangpur"},
  ]

  const books = [
    {name: 'Physics', author:'Mahbuba Khatun', price: 150},
    {name: 'Chemistry', author:'Zahedul Islam', price: 170},
    {name: 'Biology', author:'Shahadat Hossain', price: 140},
    {name: 'Math', author:'Sayeda Nasrin', price: 130},
  ]
  

  return (
    <>
      
      <h1>React Core Concepts 2</h1>
      <Friends></Friends>
      <Posts></Posts>
      <Users></Users>
      <Team></Team>

      <Counter></Counter>
      {
        persons.map(person=><Person person = {person}></Person>)
      }
      <BookStore books = {books}></BookStore>
      {/* <Person person ={persons}></Person> */}

      {/* <button onClick={handleButton}>Click Me</button>
      <button onClick={handleClick2}>Click me 2</button>
      <button onClick={() => {
        alert('button 3 clicked')
      }}>click me 3</button>
      <button onClick={()=>handleFour(3)}>Fourth</button> */}
     
      
    </>
  )
}

export default App
