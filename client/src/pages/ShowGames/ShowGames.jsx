import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import "./ShowGames.css"
import GameCard from '../../components/GameCard/GameCard';
import NavBar from '../../components/NavBar/NavBar';
import { Link } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
import Select from "react-select";



const ShowGames = () => {

    const [games, setGames] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [filters, setFilters] = useState({
        developers: [],
        publishers: [],
        engines: [],
        platforms: [],
        gameModes: [],
        genres: [],
        perspectives: []
    });



    //get data from api
    useEffect(() => {
        const getGamesData = async () => {
            try {
                const { data } = await axios.get('http://localhost:3000/api/games/');
                setGames(data);
                const getUniqueValues = (array, key) => {
                    if (key === "developers" || key === "publishers") {
                        return [...new Set(array.flatMap((game) => game[key].map((item) => item.name)))];
                    }
                    if (key === "engines") {
                        return [...new Set(array.flatMap((game) => game.engines.map((engine) => engine.name)))];
                    }

                    if (key === "platforms") {
                        return [...new Set(array.flatMap((game) => game.platforms.map((platform) => platform.name)))];
                    }

                    if (key === "gameModes") {
                        return [...new Set(array.flatMap((game) => game.gameModes.map((gameMode) => gameMode.name)))];
                    }

                    if (key === "genres") {
                        return [...new Set(array.flatMap((game) => game.genres.map((genre) => genre.name)))];
                    }

                    if (key === "perspectives") {
                        return [...new Set(array.flatMap((game) => game.perspectives.map((perspective) => perspective.name)))];
                    }


                    return [...new Set(array.flatMap((game) => game[key]))];
                };

                setFilters({
                    developers: getUniqueValues(data, "developers"),
                    publishers: getUniqueValues(data, "publishers"),
                    engines: getUniqueValues(data, "engines"),
                    platforms: getUniqueValues(data, "platforms"),
                    gameModes: getUniqueValues(data, "gameModes"),
                    genres: getUniqueValues(data, "genres"),
                    perspectives: getUniqueValues(data, "perspectives"),
                });

            } catch (error) {
                console.error("error loading games:", error);
            }
        };

        getGamesData();
    }, []);



    //get filters from url
    const developerFilter = searchParams.get("developer") || "";
    const publisherFilter = searchParams.get("publisher") || "";
    const engineFilter = searchParams.get("engine") || "";
    const platformFilter = searchParams.get("platform") || "";
    const gameModeFilter = searchParams.get("gameMode") || "";
    const genreFilter = searchParams.get("genre") || "";
    const perspectiveFilter = searchParams.get("perspective") || "";



    //apply filters
    const filteredGames = games.filter((game) => {
        return (
            (developerFilter
                ? game.developers.some((dev) => dev.name === developerFilter)
                : true) &&
            (publisherFilter
                ? game.publishers.some((pub) => pub.name === publisherFilter)
                : true) &&
            (engineFilter
                ? game.engines.some((eng) => eng.name === engineFilter)
                : true) &&
            (platformFilter
                ? game.platforms.some((plat) => plat.name === platformFilter)
                : true) &&
            (gameModeFilter
                ? game.gameModes.some((mode) => mode.name === gameModeFilter)
                : true) &&
            (genreFilter
                ? game.genres.some((gen) => gen.name === genreFilter)
                : true) &&
            (perspectiveFilter
                ? game.perspectives.some((per) => per.name === perspectiveFilter)
                : true)
        )
    })



    //update filters
    const updateFilter = (key, value) => {
        const newParams = new URLSearchParams(searchParams);
        if (value) {
            newParams.set(key, value);
        } else {
            newParams.delete(key);
        }
        setSearchParams(newParams);
    };


    //react select
    const developerOptions = filters.developers.map((dev) => ({
        value: dev,
        label: dev,
    }));

    const publisherOptions = filters.publishers.map((pub) => ({
        value: pub,
        label: pub,
    }));

    const engineOptions = filters.engines.map((eng) => ({
        value: eng,
        label: eng,
    }));
    const platformOptions = filters.platforms.map((plat) => ({
        value: plat,
        label: plat,
    }));

    const gameModeOptions = filters.gameModes.map((mode) => ({
        value: mode,
        label: mode,
    }));

    const genreOptions = filters.genres.map((gen) => ({
        value: gen,
        label: gen,
    }));
    
    const perspectiveOptions = filters.perspectives.map((per) => ({
        value: per,
        label: per,
    }));

    const sortedGames = [...filteredGames].sort((a, b) => 
        a.name.localeCompare(b.name)
    );

    return (
        <div className='ShowGames-Body'>
            <NavBar></NavBar>
            <div className='ShowGames-MainContainer'>
                <div className="ShowGames-FilterMainContainer">
                    <div>
                        <label>Developer:</label>
                        <Select
                            className="custom-select"
                            classNamePrefix="react-select"
                            options={developerOptions}
                            onChange={(selectedOption) => updateFilter("developer", selectedOption ? selectedOption.value : "")}
                            value={developerOptions.find(option => option.value === searchParams.get("developer")) || null}
                            isClearable
                            placeholder="Any"
                        />
                    </div>
                    <div>
                        <label>Publisher:</label>
                        <Select
                            className="custom-select"
                            classNamePrefix="react-select"
                            options={publisherOptions}
                            onChange={(selectedOption) => updateFilter("publisher", selectedOption ? selectedOption.value : "")}
                            value={publisherOptions.find(option => option.value === searchParams.get("publisher")) || null}
                            isClearable
                            placeholder="Any"
                        />
                    </div>
                    <div>
                        <label>Engine:</label>
                        <Select
                            className="custom-select"
                            classNamePrefix="react-select"
                            options={engineOptions}
                            onChange={(selectedOption) => updateFilter("engine", selectedOption ? selectedOption.value : "")}
                            value={engineOptions.find(option => option.value === searchParams.get("engine")) || null}
                            isClearable
                            placeholder="Any"
                        />
                    </div>
                    <div>
                        <label>Platform:</label>
                        <Select
                            className="custom-select"
                            classNamePrefix="react-select"
                            options={platformOptions}
                            onChange={(selectedOption) => updateFilter("platform", selectedOption ? selectedOption.value : "")}
                            value={platformOptions.find(option => option.value === searchParams.get("platform")) || null}
                            isClearable
                            placeholder="Any"
                        />
                    </div>
                    <div>
                        <label>Game mode:</label>
                        <Select
                            className="custom-select"
                            classNamePrefix="react-select"
                            options={gameModeOptions}
                            onChange={(selectedOption) => updateFilter("gameMode", selectedOption ? selectedOption.value : "")}
                            value={gameModeOptions.find(option => option.value === searchParams.get("gameMode")) || null}
                            isClearable
                            placeholder="Any"
                        />
                    </div>
                    <div>
                        <label>Genres:</label>
                        <Select
                            className="custom-select"
                            classNamePrefix="react-select"
                            options={genreOptions}
                            onChange={(selectedOption) => updateFilter("genre", selectedOption ? selectedOption.value : "")}
                            value={genreOptions.find(option => option.value === searchParams.get("genre")) || null}
                            isClearable
                            placeholder="Any"
                        />
                    </div>
                    <div>
                        <label>Perspectives:</label>
                        <Select
                            className="custom-select"
                            classNamePrefix="react-select"
                            options={perspectiveOptions}
                            onChange={(selectedOption) => updateFilter("perspective", selectedOption ? selectedOption.value : "")}
                            value={perspectiveOptions.find(option => option.value === searchParams.get("perspective")) || null}
                            isClearable
                            placeholder="Any"
                        />
                    </div>
                    <button onClick={() => setSearchParams(new URLSearchParams())}>
                        Clear Filters
                    </button>
                </div>
                <div className="ShowGames-GameMainContainer">
                    <div className='ShowGames-GameCards tracking-in-expand'>
                        {
                            sortedGames.map(game => (
                                <Link to={`/game/${game.id}`} key={game.id}>
                                    <GameCard key={game.id} game={game} className="ShowGames-GameCard" />
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className="blob"></div>
            </div>
        </div >
    )
}



export default ShowGames
