import React from 'react'
import { useState } from 'react'

const RandomPasswordGen = () => {

  const [length,setLength] =  useState(15);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");


  return (
    <>
    <h1 className='text-4xl text-center'>Password Generator</h1>
    </>
  )
}

export default RandomPasswordGen