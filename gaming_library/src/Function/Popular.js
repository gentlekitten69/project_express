import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const PopularGames = () => {

    const [games, setGames] = useState([]);
    const URL = `http://api.rawg.io/api/games?dates=2023-01-01,2023-12-31&ordering=-added&key=ef855fc72b30488f8dc0e80014dbfc6a`

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch(URL);
                const data = await response.json();

                if (data.results) {
                   setGames();
                   
                }
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        };

        fetchGames();
    }, [URL]);

    return (
        <div>
            
            <div className='card'style={{ display: 'flex', flexWrap:'wrap', justifyContent: 'space-evenly'}}>
                        {games.map((game) => (
                        <Card  key={game.id} sx={{maxwidth:300, 
                            margin: '16px', backgroundColor:'blueviolet'}}>
                        <CardMedia
                            component='img'
                            alt= {game.name}
                            sx={{height: 180, maxWidth:400 }}
                            image={game.background_image} />
                       <CardContent>
                            <Typography variant='h6' fontWeight='bold' 
                                textAlign='center'>
                                {game.name}
                            </Typography>
                        </CardContent>
                       <CardActions style={{justifyContent:'center'}}>
                            <Link to={`/GameDetails/${game.id} `}>;
                            <button>Details</button>
                            </Link>
                         </CardActions>      
                        </Card>
                         ))}
                    </div>
        </div>
    )
}

export default PopularGames;