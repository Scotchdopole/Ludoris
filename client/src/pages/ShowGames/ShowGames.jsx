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
        publishers: []
        // engines: [],
        // platforms: [],
        // gameModes: [],
        // perspectives: []
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
                    return [...new Set(array.flatMap((game) => game[key]))];
                };

                setFilters({
                    developers: getUniqueValues(data, "developers"),
                    publishers: getUniqueValues(data, "publishers"),
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


    //apply filters
    const filteredGames = games.filter((game) => {
        return (
            (developerFilter
                ? game.developers.some((dev) => dev.name === developerFilter)
                : true) &&
            (publisherFilter
                ? game.publishers.some((pub) => pub.name === publisherFilter)
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


    return (
        <div className='ShowGames-Body'>
            <NavBar></NavBar>
            <div className='ShowGames-MainContainer'>
                <div className="ShowGames-FilterMainContainer">
                    <label>Developer:</label>
                    <Select
                        className="custom-select"
                        classNamePrefix="react-select"
                        options={developerOptions}
                        onChange={(selectedOption) => updateFilter("developer", selectedOption ? selectedOption.value : "")}
                        isClearable
                        placeholder="Search developers..."

                    />

                    <label>Publisher:</label>
                    <Select
                        className="custom-select"
                        classNamePrefix="react-select"  
                        options={publisherOptions}
                        onChange={(selectedOption) => updateFilter("publisher", selectedOption ? selectedOption.value : "")}
                        isClearable
                        placeholder="Search publisher..."
                    />
                </div>
                <div className="ShowGames-GameMainContainer">
                    <div className='ShowGames-GameCards'>
                        {
                            filteredGames.map(game => (
                                <Link to={`/game/${game.id}`} key={game.id}>
                                    <GameCard key={game.id} game={game} className="ShowGames-GameCard"  />
                                </Link>
                            ))
                        }
                    </div>

                </div>
                <div style={{ width: "15%" }}></div>


                <div className="blob"></div>
            </div>
        </div>
    )
}



export default ShowGames
