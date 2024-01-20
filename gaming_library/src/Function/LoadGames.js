import React, {useState, useEffect} from 'react';
import '../style.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  Link } from 'react-router-dom';




const LoadGames = (props) => {
    const [games, setGames] = useState([]);
     const [page, setPage] = useState(1);

    const url = `https://api.rawg.io/api/games?&key=ef855fc72b30488f8dc0e80014dbfc6a&ordering=-metacritic&page=${page}`;

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();

                if (data.results) {
                    setGames((prevGames) => (page === 0 ? data.results : [ ...prevGames, ...data.results]));
                   
                }
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        };

        fetchGames();
    }, [url, page]);

 
   
              
    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1)
    };
 
   

    return  (
            <div>
                 <h1>Your Favorite Games</h1>
                  
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
                   <button className="loader" onClick={handleLoadMore}>Load Games</button>
                </div> 
      );
    }                          

export default LoadGames;
