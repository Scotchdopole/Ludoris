import React from 'react'
import "./NavBar.css"
import { useEffect, useRef } from "react";
import "../../style.css"


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
        <input ref={searchRef} className='NavBar-SearchBar' type="text"/>
        
    </div>
  )
}
