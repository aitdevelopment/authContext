import React, { useContext } from 'react'
import { AuthContext } from './contextApi/AuthContext'
import { RouterProvider } from 'react-router-dom';
import route from './Route/Route';
import "./App.css"

const App = () => {

  const {IsUser, setIsUser} = useContext(AuthContext);

  console.log(IsUser)
  return (
      <RouterProvider router={route}/>
  )
}

export default App