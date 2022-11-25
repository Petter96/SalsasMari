import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../Styles/main.css";

function Navbar(){
    const navRef = useRef();

    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <div>
        <header>
            <h3 href="/#">
                <img src="./Logo.jpg" width='80'/>
            </h3>
            <nav ref={navRef}>
                <a href="/#">Comprar</a>
                <a href="/#">Quienes somos</a>
                <a href="/#">Bitácora</a>
                <a href="/#">Acceso</a>
                <button className="nav-btn  nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
        
        </div>
    );
}

export default Navbar;