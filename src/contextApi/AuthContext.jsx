import { useState } from "react";
import { createContext } from "react"

export const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {
        const [IsUser, setIsUser] = useState(JSON.parse(localStorage.getItem("user")) || false);
        return <AuthContext.Provider value={{ IsUser, setIsUser }}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;