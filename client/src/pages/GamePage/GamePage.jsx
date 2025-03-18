import React from 'react'
import axios from 'axios';
import "../../style.css";
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import "./GamePage.css"
import NavBar from "../../components/NavBar/NavBar"
import YouTubeVideoId from 'youtube-video-id';
import { average } from 'color.js'
import '@justinribeiro/lite-youtube';





const GamePage = () => {

    const [game, setGame] = useState({});
    const [gamePrice, setGamePrice] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const [dominantColor, setDominantColor] = useState(null);


    let { id } = useParams();

    //get games data
    useEffect(() => {
        const getGamesData = async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/api/games/${id}`)
                setGame(data);
            } catch (err) {
                console.log(err)
            }

        };
        getGamesData()
    }, [id])

    //video id from youtb url
    const videoId = game.ytbTrailerLink ? YouTubeVideoId(game.ytbTrailerLink) : null;

    //price converter
    useEffect(() => {
        if (game.price == 0) {
            setGamePrice("Free");
        } else {
            setGamePrice("€" + game.price);
        }
    }, [game]);

    //get cover image url
    let coverImage = game ? `http://localhost:3000/${game.image}` : "";

    //date formater
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("cs-CZ", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
        });
    };

    //get color from cover image
    useEffect(() => {
        average(coverImage, { format: "hex", amount: 1, sample: 30 })
            .then(color => {
                setDominantColor(color);
            })
            .catch(err => console.error('Error getting color:', err));
    }, [coverImage]);
    document.documentElement.style.setProperty("--gameAccentColor", dominantColor);

    return (
        <div className="GamePage-body">
            <NavBar></NavBar>
            <div className="GamePage-MainContainer">
                <span className='GamePage-Title tracking-in-expand'>{game.name}</span>
                <div className="GamePage-Wrapper">
                    <div
                        className="GamePage-CoverImage"
                        style={{
                            backgroundImage: `url(${coverImage})`,
                            ...(isHovered ? { boxShadow: `0px 0px 70px 3px ${dominantColor}` } : {})
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    ></div>
                    <div className='GamePage-Container'>
                        <div>
                        <p>Genres</p>
                        <span>
                            {game?.genres?.length > 0 ? (
                                game.genres.map((genre, index) => (
                                    <React.Fragment key={genre.name}>
                                        <Link to={`/games/?genre=${genre.name}`}>{genre.name}</Link>
                                        {index < game.genres.length - 1 && ", "}
                                    </React.Fragment>
                                ))
                            ) : (
                                "No data"
                            )}
                        </span>
                        </div>
                        <div>
                            <p>Platforms</p>
                            <span>
                                {game?.platforms?.length > 0 ? (
                                    game.platforms.map((platform, index) => (
                                        <React.Fragment key={platform.name}>
                                            <Link to={`/games/?platform=${platform.name}`}>{platform.name}</Link>
                                            {index < game.platforms.length - 1 && ", "}
                                        </React.Fragment>
                                    ))
                                ) : (
                                    "No data"
                                )}
                            </span>
                        </div>
                        <div>
                            <p>Perspectives</p>
                            <span>
                                {game?.perspectives?.length > 0 ? (
                                    game.perspectives.map((perspective, index) => (
                                        <React.Fragment key={perspective.name}>
                                            <Link to={`/games/?perspective=${perspective.name}`}>{perspective.name}</Link>
                                            {index < game.perspectives.length - 1 && ", "}
                                        </React.Fragment>
                                    ))
                                ) : (
                                    "No data"
                                )}
                            </span>
                        </div>
                    </div>

                    <div className='GamePage-Container'>
                        <div>
                            <p>Developers</p>
                            <span>
                                {game?.developers?.length > 0 ? (
                                    game.developers.map((developer, index) => (
                                        <React.Fragment key={developer.name}>
                                            <Link to={`/games/?developer=${developer.name}`}>{developer.name}</Link>
                                            {index < game.developers.length - 1 && ", "}
                                        </React.Fragment>
                                    ))
                                ) : (
                                    "No data"
                                )}
                            </span>
                        </div>
                        <div>
                            <p>Publishers</p>
                            <span>
                                {game?.publishers?.length > 0 ? (
                                    game.publishers.map((publisher, index) => (
                                        <React.Fragment key={publisher.name}>
                                            <Link to={`/games/?publisher=${publisher.name}`}>{publisher.name}</Link>
                                            {index < game.publishers.length - 1 && ", "}
                                        </React.Fragment>
                                    ))
                                ) : (
                                    "No data"
                                )}
                            </span>
                        </div>
                        <div>
                            <p>Game modes</p>
                            <span>
                                {game?.gameModes?.length > 0 ? (
                                    game.gameModes.map((gameMode, index) => (
                                        <React.Fragment key={gameMode.name}>
                                            <Link to={`/games/?gameMode=${gameMode.name}`}>{gameMode.name}</Link>
                                            {index < game.gameModes.length - 1 && ", "}
                                        </React.Fragment>
                                    ))
                                ) : (
                                    "No data"
                                )}
                            </span>
                        </div>
                    </div>
                    <div className='GamePage-Container'>
                        <div>
                            <p>Engine</p>
                            <span>
                                <Link to={`/games/?engine=${game?.engines?.map(engine => engine.name)}`}>
                                    {game?.engines?.map(engine => engine.name).join(", ") || "No data"}</Link>
                            </span>
                        </div>
                        <div>
                            <p>Release date</p>
                            <span>
                                {formatDate(game.releaseDate) || "No data"}
                            </span>
                        </div>
                        <div>
                            <p>Price</p>
                            <span>
                                {gamePrice || "No data"}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="GamePage-Wrapper2">
                    <div>
                    <lite-youtube videoid={videoId} posterquality="maxresdefault" params="controls=1&showinfo=0&rel=0"  ></lite-youtube>
                    </div>
                    <div>
                    <p className='GamePage-GameDesc' >{game.desc}</p>
                    </div>
                </div>
            </div>
            <div className="blob" ></div>
        </div>
    )
}

export default GamePage
