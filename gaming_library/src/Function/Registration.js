import React, { useState, useEffect } from 'react'
import '../style.css'

const Registration = () => {
  const [ username, setUsername ] = useState('');

  const handleLogin = async () => {
   try {
    const response = await fetch ('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application.json'
      },
      body: JSON.stringify({username})
    });

      if ( response.ok) {
        const data = await response.json();
      }
   } catch (error) {
      alert('An Error has occured')
   }
 }

  return (
    <div className='box'>
          <input 
                type='text'
                placeholder="username"
                value={username}        
                onChange={(e) => setUsername(e.target.value)}
              />
          <button onClick={handleLogin}> Login </button>    
    </div>
  )
}

export default Registration
