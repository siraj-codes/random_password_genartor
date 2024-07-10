// import './index.css'
import React, { useCallback, useEffect } from 'react'
import { useState } from 'react'


const RandomPasswordGen = () => {

  const [length,setLength] =  useState(15);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");

  let passwordGenerator = useCallback( () => {

    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numberAllowed) {
      str+='0123456789'
    }

    else if (charAllowed)  {
      str+='@#$%^&*(){}[]!~`'
    }

    for (let i = 1 ; i <= length ; i++) {

      let rI = Math.floor(Math.random() * str.length)

      pass += str[rI]

    }

    setPassword(pass)



  },[length , numberAllowed , charAllowed , setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length , numberAllowed , charAllowed , passwordGenerator])

  return (
    
    
    <div className='px-14 my-12 w-full max-w-md mx-auto shadow-md rounded-lg text-green-500 '>
      <h1 className='text-center text-white bg-black my-3 text-3xl'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 text-2xl'>
        <input type="text" value={password} className='ouline-none w-full py-1 px-3'  placeholder='password' readOnly/>
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => {
              setLength(e.target.value)
          }}/>
          <label>Length {length}</label>

        </div >
        <div className='flex items-center gap-x-1'> 
          <input type="checkbox" defaultChecked={numberAllowed} id='numberInput'  onChange={()=> {
            setNumberAllowed(prev => !prev)
            
          }} />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'> 
          <input type="checkbox" defaultChecked={numberAllowed} id='charInput' onChange={()=> {
            setNumberAllowed(prev => !prev)
            
          }} />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
    
  )
}

export default RandomPasswordGen