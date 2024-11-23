import React, { useContext, useState } from 'react'
import { AuthContext } from '../contextApi/AuthContext';

const Login = () => {
    const {setIsUser} = useContext(AuthContext);
    const [input, setInput] = useState({
        email:"",
        password:""
    });
    const handelOnSubmit =(e)=>{
        e.preventDefault();
        const user ={
            email:input.email,
            password:input.password
        };
        setIsUser(user);
        localStorage.setItem("user",JSON.stringify(user));
    }
  return (
    <div className='login'>
            <form onSubmit={handelOnSubmit}>
                <div className='input_box'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={(e)=>setInput(prev=>({...prev,[e.target.name] : e.target.value}))} placeholder='email' />
                </div>
                <div className='input_box'>
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" onChange={(e)=>setInput(prev=>({...prev,[e.target.name] : e.target.value}))} placeholder='password'/>
                </div>

                <button type='submit'>Login</button>
            </form>
    </div>
  )
}

export default Login