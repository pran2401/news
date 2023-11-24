import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import './navblog.css'
import {auth,provider} from './firebase'
import {signOut} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import {LogContext} from './LoginContext'
import {useContext} from 'react'

function NavBlog() {

  const context=useContext(LogContext);
  let nav=useNavigate();

  function handleSignout(){
      signOut(auth).then(()=>{
        localStorage.clear();
        context.setLogged(false);
        nav('/bloghome/login')
      })
  }

  return (
    <div className='navblog'> 
      
      <button className='btn'><Link to="blog" >Blogs</Link></button>
        
      {!context.logged ?<button className='btn'><Link to="login" >Login</Link></button> : <><button className='btn'><Link to="post" >CREATE A BLOG</Link></button><button className='bg-red-700' onClick={handleSignout}>LOG OUT</button></>}
               
    </div>
  )
}

export default NavBlog