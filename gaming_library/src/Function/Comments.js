import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';




const Comments= () => {
   
  const { gameId } = useParams();  
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    name:'',
    content:'',
    gameId: parseInt(gameId),
   });
 
   
    
  useEffect(() => {
    const fetchComments = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/games/comments/${gameId}`)
            console.log("reponse.data: ", response.data);
            setComments(response.data)
            
        } catch (error) {
            console.error('Error')
        }
    };
    fetchComments();
  },[gameId])
  

    const handleCommentChange = (e) => {
        setNewComment({...newComment, [e.target.name]: e.target.value })
    }

  const handleAddComment = async () => {
   try {
        const response = await axios.post(`http://localhost:3001/games/comments/newcomment`, newComment)

        console.log("add comment response.data", response.data);
   
   
        setComments((prevComments) => [...prevComments, response.data]);

        setNewComment({  name: '', content:'', gameId: parseInt(gameId)});
    } catch (error) {
        console.error('Error')
    }
  }
    
    const handleDelete = async (commentId) => {
        try {
            await axios.delete(`http://localhost:3001/games/comments/${commentId}`);

            setComments(comments.filter((comment) => commentId !== comment.id));
        } catch (error) {
            console.error('Error Deleting Comment', error)
        }
    };
    
     
    return (
        <div>
            <h2>Comments</h2>
            <ul>
               {comments.map((comment) => (
                <li key={comment.id}><strong>{comment.name}</strong> :  {comment.content}  
                <button onClick={(e) => handleDelete(comment.id)}>Delete</button></li>
               ))}
            </ul>
            <input
              type= 'text'
              placeholder='username'
              name='name'
              value={newComment.name} 
              onChange={handleCommentChange}
            />   

             <input 
              type='text'
              placeholder='content'
              name='content'
              value={newComment.content}
              onChange={handleCommentChange}
             />
             <button onClick={handleAddComment}>Add Comment</button>
        </div>
    )
}
    

export default Comments;