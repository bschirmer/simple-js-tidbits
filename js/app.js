const colours = ["green", "red", "rgba(133,122,200)", "#f15025"];
const button = document.getElementById('btn');
const colour = document.querySelector('.colour');

// event listener for the button to change the body background colour
button.addEventListener('click', () => {
    // get a random numbe between 0 - 3
    const randomNumber = Math.floor(Math.random() * colours.length);

    document.body.style.backgroundColor = colours[randomNumber];
    colour.textContent = colours[randomNumber];
});

