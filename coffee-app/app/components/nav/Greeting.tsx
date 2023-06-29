'use client';
import React from 'react'
import { useState, useEffect } from 'react'


const Greeting = () => {
    const [time, setTime] = useState('');
    const [greeting, setGreeting] = useState('');
  
    const name = 'Jordan'

    useEffect(() => {
      const getCurrentTime = () => {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();
  
        if (currentHour >= 5 && currentHour < 12) {
          setGreeting(`Good morning, ${name} 🌤`);
        } else if (currentHour >= 12 && currentHour < 18) {
          setGreeting(`Good afternoon, ${name} ☀️`);
        } else {
          setGreeting(`Good evening, ${name} 🌙`);
        }
  
        setTime(currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      };
  
      getCurrentTime();
    }, []);
  return (
    <p
        className='
            font-Obviously
            font-semibold
            uppercase
            text-xl
            hidden
            lg:block
        '
    >{greeting}</p>
  )
}

export default Greeting