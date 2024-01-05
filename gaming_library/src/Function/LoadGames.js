import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const LoadGames = (props) => {
    const [games, setGames] = useState([]);
    const [selectedGame, setSelectedGame] = useState(null);
    const [page, setPage] = useState(1);
    const [results, setResults] = useState([])
   
    let navigate = useNavigate();

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

    const getGameDetails = async (id) => {
        try {
          const response = await fetch(`https://api.rawg.io/api/games/${id}?key=ef855fc72b30488f8dc0e80014dbfc6a`)
            
          const data = await response.json();

          if (data.results) {
            setSelectedGame(data);
            console.log(data);
          }
        } catch (error) {
          console.error('Error')
        }
     
    }
  
 
    
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
                            <button onClick={async () => {
                                await getGameDetails(game.id);
                                navigate(`/GameDetails/${game.id} ${getGameDetails}`);
                                }}>Details</button>
                         </CardActions>      
                        </Card>
                         ))}
                    </div>
                   <button className="loader" onClick={handleLoadMore}>Load Games</button>
                </div> 
      );
    };


export default LoadGames;
