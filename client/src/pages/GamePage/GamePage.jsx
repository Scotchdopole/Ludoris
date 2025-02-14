import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import "./GamePage.css"
import NavBar from "../../components/NavBar/NavBar"




const GamePage = () => {

    const [game, setGame] = useState([]);

    let {id} = useParams();

    useEffect(() => {
        const getGamesData = async () => {
            const { data } = await axios.get(`http://localhost:3000/api/games/${id}`)
            console.log(data)
            setGame(data)
        }
        getGamesData()
    }, [])

    const coverImage = `http://localhost:3000/${game.image}`


    return (
    <div className="GamePage-body">
        <NavBar></NavBar>
        <p>{game.name}</p>
        <img src={coverImage} alt="cover image" />
    </div>
  )
}

export default GamePage
