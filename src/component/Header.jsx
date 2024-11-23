import React, { useContext } from 'react'
import { AuthContext } from '../contextApi/AuthContext'

const Header = () => {
    const {IsUser, setIsUser} = useContext(AuthContext)

    const HandelLogOut =()=>{
        setIsUser(false);
        localStorage.clear();
    }
  return (
    <header>
        <div className="logo">Logo</div>
        <h4>{IsUser.email}</h4>
        <button onClick={HandelLogOut}>LogOut</button>
    </header>
  )
}

export default Header