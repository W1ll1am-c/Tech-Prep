// Define card data
const cards = [
    { name: "Satyr", front: "image/satyr.PNG", back: "image/pp.png" },
    { name: "Cerberus", front: "image/c.png", back: "image/pp.png" },
    { name: "Theta", front: "image/th.png", back: "image/pp.png" },
    { name: "Tau", front: "image/ta.png", back: "image/pp.png" },
    { name: "Gorgon", front: "image/g.png", back: "image/pp.png" },
    { name: "Banana Comeback", front: "image/bc.png", back: "pp.png" },
    { name: "Potion Comeback", front: "image/pp.png", back: "image/pp.png" },
    { name: "Meander", front: "image/m.PNG", back: "image/pp.png" },
    { name: "Unlucky Comeback", front: "image/uc.png", back: "image/pp.png" },
    { name: "Scale Comeback", front: "image/sc.png", back: "image/pp.png" }
];

let currentIndex = 0;

// DOM Elements
const cardFrontImage = document.getElementById("card-front-image");
const cardBackImage = document.getElementById("card-back-image");
const cardName = document.getElementById("card-name");
const prevButton = document.getElementById("prev-card");
const nextButton = document.getElementById("next-card");

// Function to update card display
function updateCard(index) {
    const card = cards[index];
    cardFrontImage.src = card.front;
    cardBackImage.src = card.back;
    cardName.textContent = card.name;
}

// Event listeners for navigation
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCard(currentIndex);
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCard(currentIndex);
});

// Initialize the first card
updateCard(currentIndex);