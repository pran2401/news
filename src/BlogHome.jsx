import React from 'react'
import NavBlog from './NavBlog'
import { Outlet } from 'react-router-dom'

function BlogHome({logged,setLogged}) {
  return (
    <>
        <NavBlog />
        <Outlet/>
    </>
  )
}

export default BlogHome