import React, { Component} from "react";
import { Button } from '@material-ui/core';

class SimpleColourChanger extends Component{
    componentDidMount(){
      const colours = ["WHITE", "SILVER", "GRAY", "BLACK", "RED", "MAROON", "YELLOW", "OLIVE", "LIME",
                       "GREEN", "AQUA", "TEAL", "BLUE", "NAVY", "FUCHSIA", "PURPLE"];
      const basicColoursButton = document.getElementById('basicColours');
      const colour = document.querySelector('.colour');
      const simpleColourChanger = document.querySelector('.SimpleColourChanger');
  
      // event listener for the button to change the body background colour
      basicColoursButton.addEventListener('click', () => {
          // get a random numbe between 0 - 3
          const randomNumber = Math.floor(Math.random() * colours.length);
  
          simpleColourChanger.style.backgroundColor = colours[randomNumber];
          colour.textContent = colours[randomNumber];
      });

      const hex = [0, 1, 2, 3, 4, 5,6 ,7, 8, 9, "A", "B", "C", "D", "E", "F"];
      // event listener for the button to change the body background colour
      const hexColoursButton = document.getElementById('hexColours');
      hexColoursButton.addEventListener('click', () => {
          // get a random hex value
          let randomHex = (() => {
                  let hexColour = "#";
                  for(let i = 0; i < 6; i++)
                  {
                      hexColour += hex[Math.floor(Math.random() * hex.length)];
                  }
                  return hexColour;
              })();

          // change the background to the random colour
          simpleColourChanger.style.backgroundColor = randomHex;
          colour.textContent = randomHex;
      });
    }
    
    render(){
      return(
        <div className="SimpleColourChanger">
          <span className="title"> Background colour changer </span>
            <div>
                <h2>Colour :<span className="colour">WHITE</span></h2>
                <Button id="basicColours">Random HTML colour</Button>
                <Button id="hexColours">Random Hex colour</Button>
            </div>
        </div>
      );
    }
  }
 
export default SimpleColourChanger; 