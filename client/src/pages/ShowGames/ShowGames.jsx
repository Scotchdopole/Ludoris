import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import "./ShowGames.css"
import GameCard from '../../components/GameCard/GameCard';
import NavBar from '../../components/NavBar/NavBar';


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
    <div className='ShowGames-Body'>
        <NavBar></NavBar>
        <div className="ShowGames-GameMainContainer">
        <div className='ShowGames-GameCard'>
            {
                game.map(game => (
                    <GameCard key={game.id} game={game} />
                ))
            }
        </div>
        </div>
        <div className="blob" ></div>
    </div>
  )
}

export default ShowGames
