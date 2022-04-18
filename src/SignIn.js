import React, { useState } from 'react';
import { authService } from '../../firebase';

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const onChange = (e) => {
    const {target: {name, value}} = e
    if(name === "email"){
      setEmail(value)
    } else if(name === "password") {
      setPassword(value)
    }
  }
  const onSubmit = async (e) => {
    console.log("hi")
    e.preventDefault()
    try {
      await authService.signInWithEmailAndPassword(email, password)
      console.log(authService.signInWithEmailAndPassword(email,password))
    } catch(error){
      console.log(error.message)
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="email" type="text" placeholder='Email' required value={email} onChange={onChange}/>
        <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange}/>
        <input type="submit" value="Sign In"/>
      </form>
    </div>
  )
}

export default SignIn