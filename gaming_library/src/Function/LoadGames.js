import React, {useState, useEffect} from 'react';
import '../style.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  Link } from 'react-router-dom';

const LoadGames = () => {
    const [games, setGames] = useState([]);
    const [page, setPage] = useState(1);
    const url = `https://api.rawg.io/api/games?&key=ef855fc72b30488f8dc0e80014dbfc6a&metacritic=75,100&page=${page}&page_size=16`;

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();

                if (data.results) {
                    setGames((prevGames) => (page === 1 ? data.results : [ ...prevGames, ...data.results]));
                   
                }
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        };

        fetchGames();
    }, [url, page]);

 
   
              
    const handlePrevPage = () => {
        setGames([]);
        setPage(page - 1)
    };
 
    const handleLoadNewPage = () => {
        setGames([]);
        setPage(page + 1);
    };
   

    return  (
            <div>
                 <h1 style={{fontSize:'80px'}}>Unlimited Games</h1>
                    <div className='card' > 
                        {games.map((game) => (
                        <Card  key={game.id} sx={{width:400, 
                            margin: '16px', backgroundColor:'#449DD1', boxShadow: '5px 15px 5px 5px '}}>
                        <CardMedia
                            component='img'
                            alt= {game.name}
                            sx={{maxheight: '100%', maxWidth:400}}
                            image={game.background_image} />
                       <CardContent>
                            <Typography variant='h6' fontWeight='bold' 
                                textAlign='center'>
                                {game.name}
                            </Typography>
                        </CardContent>
                       <CardActions style={{justifyContent:'center'}}>
                            <Link to={`/GameDetails/${game.id} `}>
                            <button>Details</button>
                            </Link>
                         </CardActions>      
                        </Card>
                         ))}
                    </div>
                     <button className="page" onClick={handlePrevPage}>Previous Page</button>
                     <button className="page" onClick={handleLoadNewPage}>Next Page</button>
                </div> 
      );
    }                          

export default LoadGames;
