import React, { useCallback } from 'react'
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

  return (
    <>
    <h1 className='text-4xl text-center'>Password Generator</h1>
    </>
  )
}

export default RandomPasswordGen