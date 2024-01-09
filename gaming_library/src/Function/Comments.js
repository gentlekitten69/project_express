import React, { useState, useEffect } from 'react';


const Commentssection= () => {
    const [results, setResults] = useState([]);
    const [comment, setComment] = useState('');
    const [prevComment, setPrevComment] = useState('');
   
  
    const fetchComments = async () => {
             try {
                const response = await fetch(`http://localhost:3001/comments`)
                const data = await response.json();
                
                setResults(data);
                
            } catch (error) {
                console.error('Error')
        }
        setResults();
    }
   

  

                    
        
    // const handleComment = async () => {
   
    //         const response = await fetch('http://localhost:3001/comments', {
    //             method: 'POST',
    //             headers: {'Content-Type': 'application/json'},
    //             body: JSON.stringify({ text: setPrevComment }),
    //         }); 
    //     }
    
        
     
    return (
        <div>
            <h2>Comments</h2>
            <ul></ul>
            <>{fetchComments}</>
            <input type='text'
             placeholder='Comments'
             value={comment}
             onChange={(e) => setComment(e.target.value)}
            />
            
            <button>Add Comment</button>
        </div>
    )
}
    

export default Commentssection;