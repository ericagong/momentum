const backgrounds = [
    "background1.jpg",
    "background2.jpg",
    "background3.jpg",
    "background4.jpg",
    "background5.jpg",
    "background6.jpg",
    "background7.jpg",
    "background8.jpg",
    "background9.jpg",
    "background10.jpg",
    "background11.jpg",
];

function getBackground() {
    const ranNum = Math.floor(Math.random() * backgrounds.length);
    const todayBackground = backgrounds[ranNum];

    const background = document.createElement("img"); // Create html image from JS
    background.src = `img/${todayBackground}`;
    background.alt = `img/background`;
    background.classList.add('backgroundImage');
    
    document.body.appendChild(background); // Attach element to html body
}

getBackground();