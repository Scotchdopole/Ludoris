import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import "./GamePage.css"
import NavBar from "../../components/NavBar/NavBar"
import YouTubeVideoId from 'youtube-video-id';




const GamePage = () => {

    const [game, setGame] = useState([null]);

    let {id} = useParams();

    useEffect(() => {
        const getGamesData = async () => {
            try{
                const {data} = await axios.get(`http://localhost:3000/api/games/${id}`)
                console.log(data);
                setGame(data);
            } catch (err){
                console.log(err)
            }
            
        };
        getGamesData()
    }, [id])

  

    
    const videoId = game.ytbTrailerLink ? YouTubeVideoId(game.ytbTrailerLink) : null;




    

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
                                {game?.genres?.map(genre => genre.name).join(", ") || "No data"}
                            </span>
                            </div>
                            <div>
                        <p>Platforms</p>
                            <span>
                                {game?.platforms?.map(platform => platform.name).join(", ") || "No data"}
                            </span>
                            </div>
                            <div>
                        <p>Perspectives</p>
                            <span>
                                {game?.perspectives?.map(perspective => perspective.name).join(", ") || "No data"}
                            </span>
                            </div>
                    </div>

                    <div className='GamePage-Container'>
                        <div>
                        <p>Developers</p>
                            <span>
                                {game?.developers?.map(developer => developer.name).join(", ") || "No data"}
                            </span>
                            </div>
                            <div>
                        <p>Publishers</p>
                            <span>
                                {game?.publishers?.map(publisher => publisher.name).join(", ") || "No data"}
                            </span>
                            </div>
                            <div>
                        <p>Engine</p>
                            <span>
                                {game?.engines?.map(engine => engine.name).join(", ") || "No data"}
                            </span>
                            </div>
                    </div>
                    <div className='GamePage-Container'>
                    <div>
                        <p>Developers</p>
                            <span>
                                {game?.developers?.map(developer => developer.name).join(", ") || "No data"}
                            </span>
                            </div>
                            <div>
                        <p>Publishers</p>
                            <span>
                                {game?.publishers?.map(publisher => publisher.name).join(", ") || "No data"}
                            </span>
                            </div>
                            <div>
                        <p>Price</p>
                            <span>
                                {game.price || "No data"}
                            </span>
                            </div>
                    </div>
                </div>
            <div className="GamePage-Wrapper2">
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    </div>
  )
}

export default GamePage
