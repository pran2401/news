import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import { auth, provider } from '../database/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { LogContext } from '../LoginContext'
import { useContext } from 'react'

function NavBlog() {

  const context = useContext(LogContext);
  let nav = useNavigate();

  function handleSignout() {
    signOut(auth).then(() => {
      localStorage.setItem('islogin', false);
      context.setLogged(false);
      nav('/blogs/login')
    })
  }

 

  return (
    <div className='text-center'>

      <button className='m-5 bg-white text-black'><Link to="blog" >Blogs</Link></button>

      {!context.logged ? <button className='m-5 bg-white text-black'><Link to="login" >Login</Link></button> : <><button className='m-5 bg-white text-black'><Link to="post" >CREATE A BLOG</Link></button><button className='bg-red-700' onClick={handleSignout}>LOG OUT</button></>}

    </div>
  )
}

export default NavBlog