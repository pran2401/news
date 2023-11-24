import { useState } from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import Blog from './Blog'
import Forum from './Forum'
import Navbar from './Navbar'
import Login from './Login'
import BlogHome from './BlogHome'
import Post from './Post'



function App() {
  
  

  return (
    <>
    
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="bloghome" element={<BlogHome />}>
            <Route path="blog" element={<Blog/>}/>
            <Route path="post" element={<Post/>}/>
            <Route path="login" element={<Login/>}/>
          </Route>
          <Route path="forum" element={<Forum/>}/>
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App
