import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { useContext } from "react";
import { AuthContext } from "../contextApi/AuthContext";
import { HomeRoute, LoginRoute } from "../contextApi/ChackAuth";


// const HomeRoute =()=>{
//     const {IsUser} = useContext(AuthContext);
//     if(!IsUser){
//         return <Navigate to="/login"/>
//     }
//     return <Home/>;

// }


// const LoginRoute =()=>{
//     const {IsUser} = useContext(AuthContext);
//     if(!IsUser){
//         return <Login/>;
//     }
//     return <Navigate to="/"/>;
// }





const route = createBrowserRouter([
    {
        path:"/login",
        element:<LoginRoute/>
    },
    {
        path:"/",
        element:<HomeRoute/>
    }
]);


export default route;