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
                        <div>
                        <p>Genres</p>
                            <span>
                                {game?.genres?.map(genre => genre.name).join(", ") || "No genres"}
                            </span>
                            </div>
                            <div>
                        <p>Platforms</p>
                            <span>
                                {game?.platforms?.map(platform => platform.name).join(", ") || "No platforms"}
                            </span>
                            </div>
                            <div>
                        <p>Engine</p>
                            <span>
                                {game?.engines?.map(engine => engine.name).join(", ") || "No engines"}
                            </span>
                            </div>
                    </div>

                    <div className='GamePage-Container'>

                    </div>
                </div>
        </div>
    </div>
  )
}

export default GamePage
