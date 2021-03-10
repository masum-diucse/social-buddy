import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetails = () => {
    const {id}=useParams();
    const [postDetails,setPostDetails]=useState([]);
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPostDetails(data))
    },[id])
    return (
        <div>
           {
               postDetails.map(pd=>{
                   const details=`                   
                        ${pd.name}
                        ${pd.email}
                        ${pd.body}                
                    `;
                 return  <div className="post-container">{details} </div>;
               })
           }
        </div>
    );
};

export default PostDetails;