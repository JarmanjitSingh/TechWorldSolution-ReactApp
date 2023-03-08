import { useLocation, Link } from "react-router-dom";
import React, { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link'

function Header() {
  
  let location = useLocation();
  useEffect(() => {
    if(location.pathname === "/contact"){
      document.title = "TechWorld - Contact"
    }
    else if(location.pathname === "/services"){
      document.title = "TechWorld - Services"
    }
    else{
      document.title = "Tech World"
    }
    }, [location]);
    
  return (
    <nav>
        <h1>TechWorld</h1>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <Link to={"/contact"}>Contact</Link>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#brands"}>Brands</HashLink>
            <Link to={"/services"}>Services</Link>
        </main>
    </nav>
  )
}

export default Header
