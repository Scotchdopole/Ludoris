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

    console.log(game.ytbTrailerLink)

    const getIdFromYtUrl = (ytUrl) => {
        const match = ytUrl.match(/(?:youtube\.com\/(?:.*[?&]v=|.*\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        return match ? match[1] : null;
      };
      

      if (typeof game.ytbTrailerLink !== "string") {
        console.error("ytbTrailerLink not a string", game.ytbTrailerLink);
      } else {
        const videoId = getIdFromYtUrl(game.ytbTrailerLink.trim());
        console.log(videoId);
      }
      

    

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
            <div className="GamePage-Wrapper2">
            {/* <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} 
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe> */}
            </div>
        </div>
    </div>
  )
}

export default GamePage
