import React, { useEffect, useState } from 'react'
import axios from 'axios'


import NewsCard from './NewsCard';

function News() {

    const [newsdata, setNewsdata] = useState();
    const [searchValue, setSearchValue] = useState('india');
    const api = `https://newsapi.org/v2/top-headlines?q=${searchValue}&apiKey=5005c6bf3b0f428bad6b83c55104b12a`;
    let Search_val = '';
    
    useEffect(() => {
        axios.get(api)
            .then((res) => setNewsdata(res.data.articles))
            .catch(error => { console.log(error) })

    }, [searchValue]);

    console.log(newsdata);




    function handleChange(event) {
        Search_val = event.target.value;

    }

    function handleClick() {
        setSearchValue(Search_val);
        console.log(api);
    }

    return (
        <div><br />
            <p className='text-center p-5'>
                <input className="border-2 border-gray-300 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search" onChange={(event) => handleChange(event)} />
                <button onClick={handleClick}>SEARCH</button>

            </p>
            <div className="grid-cols-1 sm:grid md:grid-cols-4 ">
                {newsdata?.map((a) => {
                    return (
                        <>
                            <NewsCard url={a.url} site={a.urlToImage} title={a.title} desc={a.description} />
                        </>

                    );
                })}
            </div>
        </div>
    )
}

export default News