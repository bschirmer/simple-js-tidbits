import React, { Component } from "react";
import { Button } from '@material-ui/core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger} from "@fortawesome/free-solid-svg-icons";
import { faXbox, faTwitter, faFacebook, faLinkedin, faTwitch, faReddit } from "@fortawesome/free-brands-svg-icons";
import img from '../resources/chief.png';

class SideBar extends Component {
    
    componentDidMount(){
        const sidebar = document.querySelector(".side-bar-container");
        const sidebarToggleBtn = document.querySelector(".side-bar-toggle-btn");

        sidebarToggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle("show-sidebar");
        });

        const sidebarCloseBtn = document.querySelector(".side-bar-close-btn");
        sidebarCloseBtn.addEventListener('click', () => {
            sidebar.classList.remove("show-sidebar");
        });


    }
    
    render(){
        return(
            <div className="side-bar">
                <Button className="side-bar-toggle-btn"><FontAwesomeIcon icon={faHamburger} /></Button>
                <div className="side-bar-container">
                    <img src={img} className="logo" alt="chief"/>
                    <Button className="side-bar-close-btn"><FontAwesomeIcon icon={faXbox}/></Button>
                    
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
}

export default SideBar;
