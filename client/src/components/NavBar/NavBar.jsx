import React from 'react'
import "./NavBar.css"
import { useEffect, useRef, useState } from "react";
import "../../style.css"
import { AiOutlineSearch } from "react-icons/ai";
import fuse from "fuse.js"
import axios from 'axios';
import { use } from 'react';


export default function NavBar() {

  const [games, setGames] = useState([]);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");


  useEffect(() => {
    const getGamesData = async () => {
      const { data } = await axios.get('http://localhost:3000/api/games/')
      console.log(data)
      setGames(data)
    }
    getGamesData()
  }, [])



  const Fuse = new fuse(games, {
    keys: ["name"],
    threshold: 0.3,
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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        searchRef.current?.focus();
      }
    };


    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);



  return (
    <>
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
          <button className='NavBar-Button'>EXPLORE</button>
          <button className='NavBar-Button'>ABOUT</button>
        </div>
      </div>
      <div className="NavBar-SearchResultContainer">
      <ul>
              {results.map((game) => (
                <li key={game.id}>{game.name}</li>
              ))}
            </ul>
      </div>
      </div>
      
      </div>
    </>
  )
}
