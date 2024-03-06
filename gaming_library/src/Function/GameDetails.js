import React, { useState, useEffect } from "react";
import '../style.css';
import { useParams } from  'react-router-dom';
import Comments from "./Comments";
import Card from 'react-bootstrap/Card';


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
        <Card class='col' style={{padding:'50px'}}>
          {games ? ( 
               <div key={gameId} style={{display:'flex', flexflow:'row wrap'}}>
                    <Card.Img src={games.background_image} alt={games.name}
                        style={{maxWidth:'50%' , margin: 'auto', padding:'0 15px 0 0'}}/>
                    <Card.Text className="description" style={{fontSize:'25px', padding: '0 15px 0px 15px', height: '100%'}}>
                        <h1>{games.name}</h1>
                       <strong>Description:</strong> {games.description_raw.split('Español')[0]}
                    </Card.Text>
                    <ul key={gameId} style={{height: '100%'}}>
                    <Card.Body > 
                    <p style={{fontSize:'30px'}}>Ratings:</p>
                    {games.ratings.map((result) => (
                     <li style={{fontSize:'25px', fontFamily:'sans-serif', padding:'0 5px 0 0'}}>
                      <strong>Id:</strong> {result.id}
                      <br />
                      <strong>Total Comments:</strong>  {result.count} <br />
                      <strong>Most Commented: </strong>  {result.title} <br />
                      <strong>Overall percentage:</strong>  {result.percent}%
                     </li>
                    ))}
            </Card.Body>   
                 </ul>
               </div>
            ) : ( <p>Loading</p>)}
            <div style={{fontSize:'35px', fontFamily:'sans-serif'}}>
                    <Comments />
            </div>   
        </Card>
    )

}


export default GameDetails;


