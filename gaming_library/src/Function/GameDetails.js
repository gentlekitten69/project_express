import React, { useState, useEffect } from "react";
import '../style.css';
import { useParams } from  'react-router-dom';
import Comments from "./Comments";


const GameDetails = () => {
    const { gameId } = useParams();
    const [games, setGame] = useState('');
    
    useEffect(() => {
        const fetchGameDetails = async () => {
            try {
                const response = await fetch(`https://api.rawg.io/api/games/${gameId}?key=ef855fc72b30488f8dc0e80014dbfc6a`);

               
              if(!response.ok) {
                    alert('Error');
                }

                const data = await response.json();
                setGame(data);
            } catch (error) {
                console.error('An Error has occured')
            }
        }
        fetchGameDetails();
    }, [gameId]);

    return (
        <div className="details">
            {games ? (
               <div key={gameId}>
               <h1>{games.name}</h1>
               <img src={games.background_image} alt={games.name}
               style={{maxWidth:'95%' , height:"40%"}}/>
               <p>Description: {games.description_raw.substr(0, 1200)}</p>
               <p>Ratings:</p>
                <ul key={gameId}>
                 {games.ratings.map((result) => (
                  <li >
                      <strong>Id:</strong> {result.id}
                     <br />
                     <strong>Total Comments:</strong> {result.count} <br />
                     <strong>Most Commented: </strong> {result.title} <br />
                     <strong>Overall percentage:</strong> {result.percent}%
                   </li>
                
                 ))}
                 </ul>
                 <Comments />
               </div>
            ) : ( <p>Loading</p>)}
        
           
        
        </div>
    )

}


export default GameDetails;


