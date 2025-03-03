import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import "./ShowGames.css"
import GameCard from '../../components/GameCard/GameCard';
import NavBar from '../../components/NavBar/NavBar';
import { Link } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";


const ShowGames = () => {

    const [games, setGames] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [filters, setFilters] = useState({
        developers: [],
        // publishers: [],
        // engines: [],
        // platforms: [],
        // gameModes: [],
        // perspectives: []
    });


    //get data from api
    useEffect(() => {
        const getGamesData = async () => {
            const { data } = await axios.get('http://localhost:3000/api/games/')
            console.log(data)
            setGames(data)
        }
        getGamesData()

        const getUniqueValues = (array, key) => {
            if (key === "developers" || key === "publishers") return [...new Set(array.flatMap((game) => game[key].map((item) => item.name)))];

            return [...new Set(array.flatMap((game) => game[key]))];
        };

        setFilters({
            developers: getUniqueValues(games, "developers"),
        }, []);
    }, [])




    //get filters from url
    const developerFilter = searchParams.get("developer") || "";


    //apply filters
    const filteredGames = games.filter((game) => {
        return (
            (developerFilter
                ? game.developers.some((dev) => dev.name === developerFilter)
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


    console.log(filters.developers)
    console.log(games.developers?.[0].name)

    return (
        <div className='ShowGames-Body'>
            <NavBar></NavBar>
            <div className="ShowGames-GameMainContainer">
                <div className='ShowGames-GameCards'>
                    {
                        filteredGames.map(game => (
                            <Link to={`/game/${game.id}`} key={game.id}>
                                <GameCard key={game.id} game={game} className="ShowGames-GameCard" />
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div className="ShowGames-FilterMainContainer">
                <label>Developer:</label>
                <select onChange={(e) => updateFilter("developer", e.target.value)}>
                    <option value="">All</option>
                    {games.developers?.[0].name.map((dev) => (
                        <option key={dev} value={dev}>{dev}</option>
                    ))}
                </select>
            </div>

            <div className="blob"></div>
        </div>
    )
}



export default ShowGames
