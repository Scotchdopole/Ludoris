import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'


const ShowGames = () => {

    const [game, setGame] = useState([]);


    useEffect(() => {
        const getGamesData = async () => {
            const { data } = await axios.get('http://localhost:3000/api/games/allGames')
            console.log(data)
            setGame(data)
        }
        getGamesData()
    }, [])



    return (
    <>
        <div>ShowGames</div>
        <p>{game.name}</p>
        <p>{game.developers?.[0]?.name}</p>
    </>
  )
}

export default ShowGames
