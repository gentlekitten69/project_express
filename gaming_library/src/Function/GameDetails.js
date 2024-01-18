import React, { useState, useEffect } from "react";
import '../style.css';
import { useParams } from  'react-router-dom';
import Commentssection from "./Comments";


const GameDetails = () => {
     const { id } = useParams();
    const [games, setGame] = useState('');
    useEffect(() => {
        const fetchGameDetails = async () => {
            try {
                const response = await fetch(`https://api.rawg.io/api/games/${id}?key=ef855fc72b30488f8dc0e80014dbfc6a`);

               
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
    }, [id]);

    return (
        <div className="details">
            {games ? (
               <div>
               <h1>{games.name}</h1>
               <img src={games.background_image} alt={games.name}
               style={{maxWidth:'95%' , height:"40%"}}/>
               <p>Description: {games.description_raw.substr(0, 1200)}</p>
               <p>Ratings:</p>
               <ul>
                 {games.ratings.map((result) => (
                   <li>
                     {result.title} <br />
                     {result.percent}%
                   </li>
                 ))}
                 </ul>
                 <Commentssection />
               </div>
            ) : ( <p>Loading</p>)}
       
        </div>
    )
}


export default GameDetails;


