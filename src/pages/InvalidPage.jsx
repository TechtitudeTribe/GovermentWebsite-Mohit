import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function InvalidPage() {
const [timer,setTimer] = useState(5)
const navigate = useNavigate()
if (timer<=0) {
      navigate('/')  
  }
useEffect(()=>{

      let interval = setInterval(()=>{

                    setTimer(prev=>prev-1)

      },1000)
      return ()=> clearInterval(interval)
},[])
  return (
    <div className='w-fit m-auto my-10 text-2xl font-medium'>
      <h3>Looks like you have followed a invlid or expired link</h3>
      <p>Redirecting to Homepage in {timer} seconds</p>
    </div>
  )
}
