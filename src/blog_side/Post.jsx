import React, { useState } from 'react'
import {addDoc, collection} from 'firebase/firestore'
import {db,auth} from '../database/firebase'
import {useNavigate} from 'react-router-dom'
function Post() {
    const [title,setTitle]=useState();
    const [content,setContent]=useState();
    let nav=useNavigate();
    const ref=collection(db,"blogs");
    function handleSubmit(){
        addDoc(ref,{title: title,content:content,user:{name: auth.currentUser.displayName,id: auth.currentUser.uid}});
        nav('/blogs/blog')
    }
  return (
        <div className=' flex items-center justify-center' >
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
            <h2 className="text-2xl font-semibold mb-4 text-black" style={{textAlign:'center'}}>CREATE A NEW BLOG</h2>
            <div className="mb-4">
                <label  className="block text-gray-700 text-sm font-bold mb-2">BLOG TITLE</label>
                <input type="text" id="input" name="input" className="w-full px-3 py-2 border rounded-md" onChange={(event)=>{setTitle(event.target.value)}}/>
            </div>
            <div className="mb-4">
                <label htmlFor="textarea" className="block text-gray-700 text-sm font-bold mb-2">BLOG CONTENT</label>
                <textarea id="textarea" name="textarea" className="w-full px-3 py-2 border rounded-md" onChange={(event)=>{setContent(event.target.value)}}></textarea>
            </div>
            <div class="mb-4 flex items-center justify-center">
            <button type="submit" className="bg-grey-500 text-white px-4 py-2 rounded-md" onClick={handleSubmit}>CREATE BLOG</button>
            </div>
            </div>
        </div>
  )
}

export default Post