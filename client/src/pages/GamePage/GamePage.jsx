import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import YouTubeVideoId from 'youtube-video-id';
import { average } from 'color.js';
import '@justinribeiro/lite-youtube';
import NavBar from "../../components/NavBar/NavBar";
import "../../style.css";
import "./GamePage.css";

const GamePage = () => {
    const [game, setGame] = useState({});
    const [gamePrice, setGamePrice] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const [dominantColor, setDominantColor] = useState(null);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);
    const { id } = useParams();
    const [showMessage, setShowMessage] = useState(true);

    useEffect(() => {
        const getGamesData = async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/api/games/${id}`);
                setGame(data);
            } catch (err) {
                console.error("Error fetching game data:", err);
                setError("Failed to load game data");
            }
        };
        getGamesData();
    }, [id]);

    useEffect(() => {
        setGamePrice(game.price === 0 ? "Free" : `€${game.price}`);
    }, [game.price]);

    const coverImage = game.image ? `http://localhost:3000/${game.image}` : "";

    useEffect(() => {
        if (coverImage) {
            average(coverImage, { format: "hex", amount: 1, sample: 1000 })
                .then(setDominantColor)
                .catch(err => console.error('Error getting color:', err));
        }
    }, [coverImage]);

    useEffect(() => {
        const checkGameCompleted = async () => {
            const token = localStorage.getItem('token');
            if (!token) return;

            try {
                const decodedToken = jwtDecode(token);
                const userId = decodedToken.userId || decodedToken.sub || decodedToken.id || decodedToken._id;

                if (!userId) {
                    console.error("User ID not found in token:", decodedToken);
                    return;
                }

                const response = await axios.get(`http://localhost:3000/api/user/${userId}/games`, {
                    headers: { 'Authorization': `Bearer ${token}` },
                });

                const completedGameIds = response.data.map((game) => String(game.id));
                setIsCompleted(completedGameIds.includes(String(id)));
            } catch (error) {
                console.error("Error checking game completion:", error);
                setError("Failed to check game completion status");
            }
        };

        checkGameCompleted();
    }, [id]);

    const handleSwitchChange = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            setError("Please login to mark games as completed.");
            return;
        }

        try {
            const decodedToken = jwtDecode(token);
            const userId = decodedToken.userId || decodedToken.sub || decodedToken.id || decodedToken._id;

            if (!userId) {
                setError("User ID not found in token");
                return;
            }

            const newCompletionStatus = !isCompleted;
            const url = `http://localhost:3000/api/user/${userId}/${newCompletionStatus ? 'add-game' : 'remove-game'}`;
            const method = newCompletionStatus ? 'post' : 'delete';
            const data = { gameId: id };

            await axios({
                method,
                url,
                data,
                headers: { 'Authorization': `Bearer ${token}` }
            });

            setIsCompleted(newCompletionStatus);
            setSuccess(newCompletionStatus ? "Game marked as completed!" : "Game removed from completed list.");
        } catch (error) {
            console.error("Error updating game completion:", error);
            setError("Failed to update game status");
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("cs-CZ", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
        });
    };

    //message timer
    useEffect(() => {
        if (error || success) {
            setShowMessage(true);

            const timer = setTimeout(() => {
                setShowMessage(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [error, success]);

    const videoId = game.ytbTrailerLink ? YouTubeVideoId(game.ytbTrailerLink) : null;
    return (
        <div className="GamePage-body">
            <NavBar></NavBar>
            <div className="GamePage-MainContainer">
                <div className='GamePage-TitleContainer'>
                    <div className='GamePage-GameTitle'>
                        <span className='GamePage-Title tracking-in-expand'>{game.name}</span>
                    </div>
                    <div className="GamePage-Message-Container">
                        {showMessage && (
                            error ? (
                                <div className="GamePage-Error-Message">{error}</div>
                            ) : success ? (
                                <div className="GamePage-Success-Message">{success}</div>
                            ) : (
                                <div className="GamePage-Message-Placeholder" ></div>
                            )
                        )}
                    </div>
                    <div className='GamePage-CheckBoxContainer'>
                        <label htmlFor="">{isCompleted ? "Completed" : "Mark as Completed"}</label>
                        <label className='GamePage-Switch'>
                            <input type="checkbox" checked={isCompleted} onChange={handleSwitchChange} />
                            <span className='GamePage-Slider'></span>
                        </label>
                    </div>
                </div>
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
