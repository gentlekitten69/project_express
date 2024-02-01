import React, { useState, useEffect } from 'react';
import axios from 'axios';
import shortid from 'shortid'


const Commentssection= () => {
   
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    id: shortid.generate(),
    content:''
  });
 
   
    
  useEffect(() => {
    const fetchComments = async () => {
        try {
            const response = await axios.get('http://localhost:3001/games/comments')
            console.log('test one')
            console.log(response.data)
            setComments(response.data)
            
        } catch (error) {
            console.error('Error')
        }
    };
    fetchComments();
  },[])


 

  const handleCommentChange = (e) => {
    setNewComment({...newComment, [e.target.name]: e.target.value })
  }

  const handleAddComment = async () => {
   try {
        const response = await axios.post('http://localhost:3001/games/comments', newComment)
   
   
        setComments((prevComments) => [...prevComments, response.data]);

        setNewComment({  id: shortid.generate(), content:''});
    } catch (error) {
        console.error('Error')
    }
  }
    
    const handleDelete = async (commentId) => {
        try {
            await axios.delete(`http://localhost:3001/comments`);

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
                <li key={shortid.generate()}><strong>{comment.id}</strong>{comment.content} <button onClick={() => handleDelete(comment.id)}>Delete</button></li>
               ))}
            </ul>
      
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
    

export default Commentssection;