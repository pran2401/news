
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Blog from './blog_side/Blog'
import Forum from './forum_side/Forum'
import Navbar from './news_side/Navbar'
import Login from './blog_side/Login'
import BlogHome from './blog_side/BlogHome'
import Post from './blog_side/Post'
import News from './news_side/News'



function App() {

  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/news" element={<News />} />
          <Route path="blogs" element={<BlogHome />}>
            <Route path="blog" element={<Blog />} />
            <Route path="post" element={<Post />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="forum" element={<Forum />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
