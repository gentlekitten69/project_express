import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Commentssection= () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    id: Date.now(),
    title:'',
    content:''
  });
 
   
    
  useEffect(() => {
    const fetchComments = async () => {
        try {
            const response = await axios.get('http://localhost:3001/comments')
            setComments(response.data)
        } catch (error) {
            console.error('Error')
        }
    };
    fetchComments();
  }, []);

  const handleCommentChange = (e) => {
    setNewComment({...newComment, [e.target.name]: e.target.value })
  }

  const handleAddComment = async () => {
    try {
        const response = await axios.post('http://localhost:3001/comments', newComment);

        setComments([...comments, response.data]);

        setNewComment({ id: DataTransfer.now(), title: '', content:''});
    } catch (error) {
        console.error('Error')
    }
  }
    
    const handleDelete = async (commentId) => {
        try {
            await axios.delete(`http://localhost:3001/comments/${commentId}`);

            setComments(comments.filter((comment) => comment.id !== commentId));
        } catch (error) {
            console.error('Error Deleting Comment', error)
        }
    };
    
     
    return (
        <div>
            <h2>Comments</h2>
            <ul>
               {comments.map((comment) => (
                <li key={comment.id}>{comment.title}: {comment.content} <button onClick={() => handleDelete(comment.id)}>Delete</button></li>
               ))}
            </ul>
            <input 
                type='text'
                placeholder='Title'
                name= 'title'
                value={newComment.title}
                onChange={handleCommentChange}
             />
             <input 
                type='text'
                placeholder='comment'
                name='comment'
                value={newComment.content}
                onChange={handleCommentChange}
             />
          
            <button onClick={handleAddComment}>Add Comment</button>
        </div>
    )
}
    

export default Commentssection;