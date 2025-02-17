import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import GameCard from '../../components/GameCard/GameCard';


const ShowGames = () => {

    const [game, setGame] = useState([]);


    useEffect(() => {
        const getGamesData = async () => {
            const { data } = await axios.get('http://localhost:3000/api/games/')
            console.log(data)
            setGame(data)
        }
        getGamesData()
    }, [])



    return (
    <>
        <div>ShowGames</div>
        <div>
            {
                game.map(game => (
                    <GameCard key={game.id} game={game} />
                ))
            }
        </div>
    </>
  )
}

export default ShowGames
