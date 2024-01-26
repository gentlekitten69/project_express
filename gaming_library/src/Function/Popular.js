import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../style.css';
import { Link } from 'react-router-dom';


const PopularGames = (props) => {
    const [games, setGames] = useState([{}]);
    const [page, setPage] = useState(1)
    const URL = `https://api.rawg.io/api/games?dates=2023-01-01,2023-12-31&ordering=-added&page=${page}&key=ef855fc72b30488f8dc0e80014dbfc6a`
    
    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch(URL);
                const data = await response.json();

                if (data.results) {
                    setGames((prevGames) => (page === 0 ? games : [...prevGames, ...data.results])) 
                   
                }
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        };

        fetchGames();
    }, [URL, page]);


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
          <h1 style={{fontSize:'70px'}}>New Games!</h1>
            <div className='card'style={{ display: 'flex', flexWrap:'wrap', justifyContent: 'space-evenly'}}>
                        {games.map((results) => (
                        <Card  key={results.id} sx={{maxwidth:300, 
                            margin: '16px', backgroundColor:'#ecc30b'}}>
                        <CardMedia
                            component='img'
                            alt= {results.name}
                            sx={{height: 180, maxWidth:400 }}
                            image={results.background_image} />
                       <CardContent>
                            <Typography variant='h6' fontWeight='bold' 
                                textAlign='center'>
                                {results.name}
                            </Typography>
                        </CardContent>
                       <CardActions style={{justifyContent:'center'}}>
                            <Link to={`/GameDetails/${results.id} `}>
                            <button className='loader'>Details</button>
                            </Link>
                         </CardActions>      
                        </Card>
                         ))}
                    </div>
                    <div>
                    <button className="page" onClick={handlePrevPage}>Previous Page</button>
                   <button className="page" onClick={handleLoadNewPage}>Next Page</button>
                  </div>
        </div>         
        
    )
}

export default PopularGames;