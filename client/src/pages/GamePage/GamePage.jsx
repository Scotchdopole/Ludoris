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

    console.log(game.image)

    const coverImage = `http://localhost:3000/${game.image}`


    return (
    <div className="GamePage-body">
        <NavBar></NavBar>
        <div className="GamePage-MainContainer">
            <span className='GamePage-Title'>{game.name}</span>
                <div className="GamePage-Wrapper">
                    <div className="GamePage-ImageContainer">
                        <img className='GamePage-CoverImage' src={coverImage} alt="cover image" />
                    </div>
                    <div className='GamePage-Container'>
                        <p>{game.genres?.[0]?.name}</p>
                    </div>

                    <div className='GamePage-Container'>

                    </div>
                </div>
        </div>
    </div>
  )
}

export default GamePage
