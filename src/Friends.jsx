import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './friend'
export default function Friends(friend) {
  const [friends, setFriends] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setFriends(data))
  }, [])
  friends.map(friend => {
    // console.log(friend);
    
  })
  
  
  return (
    <div className='box'>
      <h3>Friends: {friends.length} </h3>
      {
        friends.map(friend => <Friend friend = {friend}></Friend>)
      }
    </div>
  )
}

/**
 * 1. declaration a state to hold data
 * 2. use effect with dependency array  
 * 3. use fetch to load data
 */