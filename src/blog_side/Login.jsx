import React, { useEffect } from 'react'
import {auth,provider} from '../database/firebase'
import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import {LogContext} from '../LoginContext'
import {useContext} from 'react'
function Login() {
    const context=useContext(LogContext);
    let nav=useNavigate();
    let login=false;
    function handleLogin(){
        signInWithPopup(auth,provider).then((user)=>{
            context.setLogged(true);
            localStorage.setItem("islogin",true);
            
            nav('/blogs/blog');
        })
    }

    useEffect(()=>{
        login=localStorage.getItem('islogin');
    },[localStorage.getItem('islogin')])

  return (
    <>
        <div className="text-center">
            <p><span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" >SIGN IN WITH</span><br/></p>
            <button onClick={handleLogin}>GOOGLE</button>
        </div>
        
    </>
  )
}

export default Login