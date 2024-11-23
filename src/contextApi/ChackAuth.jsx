import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import Login from "../pages/Login";
import Home from "../pages/Home";

export const HomeRoute =()=>{
    const {IsUser} = useContext(AuthContext);
    if(!IsUser){
        return <Navigate to="/login"/>
    }
    return <Home/>;
}


export const LoginRoute =()=>{
    const {IsUser} = useContext(AuthContext);
    if(!IsUser){
        return <Login/>;
    }
    return <Navigate to="/"/>;
}
