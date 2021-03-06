import React from "react";
import { Button } from '@material-ui/core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger} from "@fortawesome/free-solid-svg-icons";
import { faXbox, faTwitter, faFacebook, faLinkedin, faTwitch, faReddit } from "@fortawesome/free-brands-svg-icons";
import img from '../../resources/chief.png';
import './sideBar.css';

const SideBar = () => {

    function toggleSideBar(){
        const sidebar = document.querySelector(".side-bar-container");
        sidebar.classList.toggle("show-sidebar");
    }

    function closeSidebar(){
        const sidebar = document.querySelector(".side-bar-container");
        sidebar.classList.remove("show-sidebar");
    }

    return(
        <div className="side-bar">
            <Button className="side-bar-toggle-btn" onClick={() => toggleSideBar()}><FontAwesomeIcon icon={faHamburger} /></Button>
            <div className="side-bar-container">
                <img src={img} className="logo" alt="chief"/>
                <Button className="side-bar-close-btn" onClick={() => closeSidebar()}><FontAwesomeIcon icon={faXbox}/></Button>
                
                <ul className="side-bar-links">
                    <li>
                    <a href="index.html">home</a>
                    </li>
                    <li>
                    <a href="">about</a>
                    </li>
                    <li>
                    <a href="">projects</a>
                    </li>
                    <li>
                    <a href="">contact</a>
                    </li>
                </ul>
                <ul className="side-bar-social-icons">
                    <li>
                        <a href="https://www.twitter.com">
                            <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com">
                            <FontAwesomeIcon icon={faFacebook}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com">
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitch.com">
                            <FontAwesomeIcon icon={faTwitch}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.reddit.com">
                            <FontAwesomeIcon icon={faReddit}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}


export default SideBar;
