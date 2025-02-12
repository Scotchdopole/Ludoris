import React from 'react'
import "./NavBar.css"
import { useEffect, useRef } from "react";
import "../../style.css"
import { AiOutlineSearch } from "react-icons/ai";


export default function NavBar() {

    


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
    
    <div className='NavBar-Main'>
        <div className="NavBar-SearchBox">
        <AiOutlineSearch className='NavBar-SearchIcon' />
            <input ref={searchRef} className='NavBar-SearchBar' type="text" placeholder='Search'/>
            <div className="NavBar-SearchBar-Shortcut-cotainer">
                <div className="NavBar-SearchBar-Shortcut">CTRL</div>
                <span>+</span>
                <div className="NavBar-SearchBar-Shortcut">K</div>
            </div>
        </div>
        <div className="NavBar-Column">
        </div>
        <div className="NavBar-Buttons">
            <button className='NavBar-Button'>EXPLORE</button>
            <button className='NavBar-Button'>ABOUT</button>
        </div>   
    </div>
  )
}
