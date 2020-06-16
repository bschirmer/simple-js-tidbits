const hex = [0, 1, 2, 3, 4, 5,6 ,7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.getElementById('btn');
const colour = document.querySelector('.colour');

// event listener for the button to change the body background colour
button.addEventListener('click', () => {
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
    document.body.style.backgroundColor = randomHex;
    colour.textContent = randomHex;
});




