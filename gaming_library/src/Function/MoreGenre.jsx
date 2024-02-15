import React, { useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import '../style.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  Link } from 'react-router-dom';


// results[0].games
const MoreGenre = () => {
  const { id } = useParams(); 
 const [games, setGames] = useState([{}]);
 const [ genre, setGenre] = useState()
  
 
  const url =`https://api.rawg.io/api/games?genres=${id}&key=ef855fc72b30488f8dc0e80014dbfc6a`
  

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setGames(data.results);      
      } catch (error) {
        console.error('Error fetching games')
      }
    };
    fetchGames()
  }, [])


  return (
    <div>   
      <h1>Similar Games {genre}</h1>
        <div className='card'> 
          {games.map((game) => (
            <Card key={game.id} sx={{maxwidth:310,
             margin:'16px', backgroundColor:'#449DD1', boxShadow:'5px 15px 5px 5px'}}>
                <CardMedia 
                  component='img'
                  alt= {game.name}
                  sx={{height: 180, maxWidth:350}}
                  src={game.background_image}
                />
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
    </div>
     )
}


export default MoreGenre


 
