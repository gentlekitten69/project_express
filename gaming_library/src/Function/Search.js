import { useEffect, useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
    const [games, setGames] = useState([]);
    const [searchValue, setSearchValue] = useState({ name: '', genre: ''});

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await axios.get('http://localhost:3001/games' , {
                    params: searchValue,
                })
                setGames(response.data)
            } catch (error) {
                console.error('Error')
            }
        };
        fetchGames();
     }, [searchValue]);

        const handleSearch = () => {
        setSearchValue(searchValue);
     }
            return (
                <div>
                  <input  
                  tpye='text'
                  value={searchValue.name} 
                  placeholder='Search Your Game'
                  onChange={(e) => setSearchValue({ ...searchValue, name: e.target.value})}
                  />

                  <button onClick={handleSearch}>Search Games</button>

                </div>
            )
          
    }
        export default SearchBar;