import React, { useState, useEffect } from 'react'

import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore'
import { db, auth } from '../database/firebase'

function Blog() {

  const [blogs, setBlogs] = useState();
  let blogsData=[];
  const ref = collection(db, "blogs");
  let i=-1;

  useEffect(() => {
    const b = async () => {
      const data = await getDocs(ref);
      setBlogs(data.docs);
    };
    b();
  }, [])


  if(blogs){
    blogsData=blogs.map((doc)=>({...doc.data(), id: doc.id}));
    console.log(blogsData);
  }

  function handleDelete(id) {
    const del = doc(db, "blogs", id);
    deleteDoc(del);
  }
  return (
    <div>
      {blogsData?.map((obj) => {
        i++;
        return (
          <div className="p-5" key={i}>
            <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden">

              <div className="flex justify-between items-center bg-gray-300 p-4">
                <h2 className="text-lg font-semibold text-gray-800">{obj.title}</h2>
                {obj.user.id === auth.currentUser?.uid && (<button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(obj.id)}>

                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>)}
              </div>


              <div className="p-4">
                <p className="text-gray-700">{obj.content}</p>
                <br /><hr /><br />
                <p className="text-sm text-gray-500">WRITTEN BY: {obj.user.name}</p>
              </div>
            </div>
          </div>
        )
      })}

    </div>

  )
}

export default Blog