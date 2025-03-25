import React from 'react'
import "./NavBar.css"
import { useEffect, useRef, useState } from "react";
import "../../style.css"
import { AiOutlineSearch } from "react-icons/ai";
import fuse from "fuse.js"
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../../authContext";

export default function NavBar() {

  const [games, setGames] = useState([]);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { isLoggedIn, userId } = useAuth();



  useEffect(() => {
    const getGamesData = async () => {
      const { data } = await axios.get('http://localhost:3000/api/games/')
      setGames(data)
    }
    getGamesData()
  }, [])


  //fuse.js search
  const Fuse = new fuse(games, {
    keys: ["name", "desc", "developers", "publishers", "engines", "genres"],
    threshold: 0.6,
    isCaseSensitive: false,
    ignoreDiacritics: true,

  });

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
    } else {
      const searchResults = Fuse.search(query).map(r => r.item);
      setResults(searchResults.slice(0, 5));
    }
  }, [query, games]);

  const searchRef = useRef(null);


  //search bar keyboard controls
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        searchRef.current?.focus();
        searchRef.current?.select();
      }

      if (event.key === "Escape") {
        event.preventDefault();
        searchRef.current?.blur();
      }

      if (event.key === "Enter" && results.length > 0) {
        navigate(`/game/${results[0].id}`);
        setQuery("")
      }
    };


    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [results, navigate]);



  return (
    <div className="NavBar-Body">
      <div className='NavBar-Main'>
        <div className="NavBar-MainContainer">
          <div className="NavBar-SearchBox">
            <div className="NavBar-SearchBoX-Input">
              <AiOutlineSearch className='NavBar-SearchIcon' />
              <input ref={searchRef} value={query} onChange={(e) => setQuery(e.target.value)} className='NavBar-SearchBar' type="text" placeholder='Search' />
              <div className="NavBar-SearchBar-Shortcut-cotainer">
                <div className="NavBar-SearchBar-Shortcut">CTRL</div>
                <span>+</span>
                <div className="NavBar-SearchBar-Shortcut">K</div>
              </div>
            </div>
          </div>
          <div className="NavBar-Column">
          </div>
          <div className="NavBar-Buttons">
            <Link to="/games">
              <button className={`NavBar-Button`}>EXPLORE</button>
            </Link>
            <Link to="/about">
              <button className={`NavBar-Button`}>ABOUT</button>
            </Link>
            <Link to="/">
              <button className={`NavBar-Button`}>HOME</button>
            </Link>
            {isLoggedIn ? (
              <Link to={`/profile/${userId}`}>
                <button className="NavBar-Button">PROFILE</button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="NavBar-Button">LOGIN</button>
              </Link>
            )}  
          </div>
        </div>
        <div className="NavBar-SearchResultContainer">
          <ul>
            {results.map((game) => (
              <li key={game.id} style={{ paddingBottom: "12px" }}>
                <Link to={`/game/${game.id}`}>{game.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  )
}
