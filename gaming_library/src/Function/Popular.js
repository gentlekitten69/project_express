import React, { useState, useEffect } from 'react';
import '../style.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const PopularGames = () => {
    const [games, setGames] = useState([{}]);
    const [page, setPage] = useState(1)
    const url = `https://api.rawg.io/api/games?dates=2023-01-01,2023-12-31&page=${page}&key=ef855fc72b30488f8dc0e80014dbfc6a&page_size=16`
   
   
    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();

                if (data.results) {
                    setGames((prevGames) => (page === 1 ? data.results : [...prevGames, ...data.results])) 
                   
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
        setPage(page + 1) 
    };
   

    return (
        <div>
          <h1 style={{fontSize:'80px'}}>Recently Released Games</h1>
            <div class='card'>
                {games.map((game) => (
            <Card  key={game.id} sx={{maxwidth:400, 
                    margin: '16px', backgroundColor:'#449DD1', boxShadow:'5px 15px 5px 5px'}}>
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
                 <Link to={`/GameDetails/${game.id} `}>
                   <button className='loader'>Details</button>
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

export default PopularGames;