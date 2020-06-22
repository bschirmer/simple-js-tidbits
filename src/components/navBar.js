import React, { Component } from "react";
import { faHamburger  } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faLinkedin, faTwitch, faReddit } from "@fortawesome/free-brands-svg-icons";
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Navbar extends Component{

    componentDidMount(){
        const navToggle = document.querySelector(".nav-toggle");
        const links = document.querySelector(".links");
        const socials = document.querySelector(".social-icons");

        navToggle.addEventListener('click', (e) => {
            links.classList.toggle('show-links');
        });
    }

    render()
    {
        return(
            <div className="navBar">
                <div className="nav-header">
                    <img src={require("../resources/chief.png")} className="logo" alt="the chief"/>
                    <Button className="nav-toggle"><FontAwesomeIcon icon={faHamburger}/></Button>
                </div>
                <ul className="links">
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
                <ul className="social-icons">
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
        );
    }
}

export default Navbar;