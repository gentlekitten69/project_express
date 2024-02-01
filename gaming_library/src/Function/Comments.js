import React, { useState, useEffect } from 'react';
import axios from 'axios';
import shortid from 'shortid'


const Commentssection= () => {
   
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    name:'',
    content:'',
    id: ''
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

        setNewComment({  name: '', content:'', id:''});
    } catch (error) {
        console.error('Error')
    }
  }
    
    const handleDelete = async (commentId) => {
        try {
            await axios.delete(`http://localhost:3001/games/comments`);

            setComments(comments.filter((comment) => comment.id !== commentId));
        } catch (error) {
            console.error('Error Deleting Comment', error)
        }
    };
    
     
    return (
        <div>
            <h2>Comments</h2>
            <ul>
               {comments.map((comments) => (
                <li><strong>{comments.name}</strong> :  {comments.content}   
                {comments.id}
                <button onClick={() => handleDelete(comments.id)}>Delete</button></li>
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
    

export default Commentssection;