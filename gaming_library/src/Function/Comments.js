import React, { useState, useEffect } from 'react';

const Commentssection = ()=> {
    const [commentText, setCommentText] = useState();

    useEffect(() => {
        const fetchComments = async () => {
             try {
             const response = await fetch('http://localhost:3001/comments')

             if (!response.ok){
                alert('Error');
             }
             const data = await response.json();
             setCommentText(data);
            } catch (error) {
                console.error('Error')
        }
    }
    fetchComments();
  }, [])

      
        
//     const handleComment = async () => {
//         try {
//             const response = await fetch('http://localhost:3001/comments', {
//                 method: 'POST',
//                 headers: {'Content-Type': 'application/json'},
//                 body: JSON.stringify({ text: commentText }),
//             }); 
//             if (response.status) {
//                 const newComment = await response.json();
//                 console.log('Comment Added', newComment);
//             } else {
//             console.log('Error');
//             }
//         } catch (error) {
//             console.error('Error')
//         }
    
    return (
        <div>
            <h2>Comments</h2>
            <ul>{Comment[commentText]}</ul>
            <input type='text'
             placeholder='Comments'
            />
            
            <button>Add Comment</button>
        </div>
    )
}

export default Commentssection;