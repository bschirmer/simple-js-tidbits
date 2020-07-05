import React,  { useState, useEffect } from "react";
import { Button } from '@material-ui/core';

const SimpleColourChanger = () => {

  const colours = ["WHITE", "SILVER", "GRAY", "BLACK", "RED", "MAROON", "YELLOW", "OLIVE", "LIME",
                    "GREEN", "AQUA", "TEAL", "BLUE", "NAVY", "FUCHSIA", "PURPLE"];

  const [colour, setColour] = useState("WHITE");

  function changeBackgroundHtmlColour(){
    const randomNumber = Math.floor(Math.random() * colours.length);
    setColour(colours[randomNumber]);
  }

  const hex = [0, 1, 2, 3, 4, 5,6 ,7, 8, 9, "A", "B", "C", "D", "E", "F"];

  function changeBackgroundHexColour(){
    let hexColour = "#";
    for(let i = 0; i < 6; i++)
    {
        hexColour += hex[Math.floor(Math.random() * hex.length)];
    }
    setColour(hexColour);
  }

  useEffect(() => {
    const colourLabel = document.querySelector('.colour');
    const simpleColourChanger = document.querySelector('.SimpleColourChanger');

    simpleColourChanger.style.backgroundColor = colour;
    colourLabel.textContent = colour;
  });

  return (
    <div className="SimpleColourChanger">  
      <span className="title"> Background colour changer </span>
        <div>
            <h2>Colour :<span className="colour">WHITE</span></h2>
            <Button onClick={() => changeBackgroundHtmlColour()}>Random HTML colour</Button>
            <Button onClick={() => changeBackgroundHexColour()}>Random Hex colour</Button>
        </div>
    </div>
  );
}

export default SimpleColourChanger; 