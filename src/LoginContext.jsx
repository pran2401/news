import React from 'react'
import {createContext ,useState} from 'react'

export const LogContext=createContext();


function LoginContext(props) {
    const [logged,setLogged]=useState(localStorage.getItem("isLogin"));

  return (
    <LogContext.Provider value={{logged,setLogged}}>
        {props.children}
    </LogContext.Provider>
  )
}

export {LoginContext}