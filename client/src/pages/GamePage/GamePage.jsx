import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';


const GamePage = () => {

    const [game, setGame] = useState([]);

    let {id} = useParams();
    console.log(id)

    useEffect(() => {
        const getGamesData = async () => {
            const { data } = await axios.get(`http://localhost:3000/api/games/${id}`)
            console.log(data)
            setGame(data)
        }
        getGamesData()
    }, [])

    return (
    <>
        <div>GamePage</div>
        <p>{game.name}</p>
    </>
  )
}

export default GamePage
