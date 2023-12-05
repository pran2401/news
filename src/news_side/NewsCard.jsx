import React from 'react'
// import './newscard.css'
function NewsCard(props) {
    
    let img=<img
    className="rounded-t-lg"
    
    src= 'data:image/jpeg;base64,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8pqVBqGcCyn8C8B4m575dKNQmI0W3efkSxPE4xh2eGVu+XP8d3v0M+gHcJ+eNqUWO3KqEEZsYxFwRdWY5WF+IPIz9EWvIzG7BoVXpVXQF6Th6bfaRh2HsPMcDLZwzI52Fr9hJu3IpS7Absli2C4w1M0ypuWLdnEAfSWPoR/IH5THUwaMbsLmRhSUXdFuIx868MjKfvpgVxlJQqhatM3psTpY2zIbDgQPeBKhsPZdWhWFKuhyVDlD+0gb7PWGgvw17p18YGn9wT36qn3R7pidFSdyeF4lUoU3SsnHx3XR+uqZUV3aPZKvvvuFVxBpNRdAyKwytms1yD7Sg2906yKS9g909WEkqUSt4+s+Zxf0fbmYqjia3rNPKhpWVwwZWbMugtqDa/ECdEXYC/yp/KWS0+wqcSMsbWfMr67BTsPu/OZV2Kv3T8JNxM5I9xW8TVf+xz7FeizB1CTkKE80quPgSRNzdbcClgnrOlV3FRVBVwvVykkEEAfePvl1iZyR7iPb1bWzMisRsWlUQo6qVPEFbg634Hwkcu5eCBVujsVYMCrMtiDcGwNuIlmiHCL3RmOIrR+2bXRs1hg07I9Sp8Mo89ZsxJFL13NalgqanMtNATxIQAnxMz5RPUQD5afYiAIiIAiIgCIiAeSomNsOp5TNEA1GwCHlMZ2WnZN+IFjQGy07JkXAIOU24gGJaCjlPeUT1EAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREA//9k='
    />;
    if(props.site){
        img=<img
        className="rounded-t-lg"
        src={props.site}
        />;
    }
  return (
    <>
        <div
            id='card' className="bg-black mx-3 mt-6 flex flex-col rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <a href={props.url}>
            {img}
            </a>
            <div className="p-6">
            <h5
                className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 ">
                {props.title}
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                {props.desc}
            </p>
            </div>
        </div>
        
    </>
  )
}

export default NewsCard