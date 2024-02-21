import React, { useState, useEffect } from 'react'

const SearchBar = () => {
    const [ name, setName] = useState([]);
    const [ games, setGames] = useState([]);
    const url = `https://api.rawg.io/api/games?&key=ef855fc72b30488f8dc0e80014dbfc6a&search=${name}`

    useEffect(() => {
        const fetchGames = async() => {
            try {
                const response = await fetch(url)
                const data = await response.json()

                setGames(data.response)
            } catch (error) {
                console.error('Error fetching games:', error)
            }
        }
        fetchGames();
    }, []) 

    
  return (
    <div>
      
    </div>
  )
}

export default SearchBar
