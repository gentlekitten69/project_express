import React, { useState, useEffect } from 'react';
import '../style.css';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import {  Link } from 'react-router-dom';





const Genre = () => { 
    const [games, setGames] = useState([]);
    const url = `https://api.rawg.io/api/genres?&key=ef855fc72b30488f8dc0e80014dbfc6a`;
    
    useEffect(() => {
        const fetchGames = async () => {
            try {
              
                const response = await axios.get(url);
                setGames(response.data.results)

               
                } catch (error) {
                console.error('Error fetching games:', error);
            }
        };

        fetchGames();
    }, []);

 
    return(
        <div>
                    <h1 style={{fontSize:'80px'}}>Genre Types</h1>
                    <div className='card' > 
                        {games.map((game) => (
                        <Card  key={game.id} sx={{width:400, 
                            margin: '16px', backgroundColor:'#449DD1', boxShadow: '5px 15px 5px 5px '}}>
                             
                         <CardMedia
                             component='img'
                             alt= {game.name}
                             sx={{maxheight: 80, maxWidth:300}}
                             image={game.image_background} />
                         <CardContent>
                            <Typography variant='h6' fontWeight='bold' 
                                textAlign='center'>
                                {game.name}
                            </Typography>
                        </CardContent>
                        <CardActions style={{justifyContent:'center'}}>
                            <Link to={`/MoreGenre/${game.id} `}>
                            <button>More Games</button>
                            </Link>
                         </CardActions>      
                        </Card>
                      
                      ))}
                   
                    </div>
        </div>
    ) 
}

export default Genre;