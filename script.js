// Function to add fade-in effects on scroll
function fadeInOnScroll() {
    const fadeRightElements = document.querySelectorAll(".scroll-fade");
    const fadeLeftElements = document.querySelectorAll(".scroll-fade-left");

    fadeRightElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            element.style.opacity = 1;
            element.style.transform = "translateX(0)";
        }
    });

    fadeLeftElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            element.style.opacity = 1;
            element.style.transform = "translateX(0)";
        }
    });
}

// Trigger the fade-in effect when the user scrolls
window.addEventListener("scroll", fadeInOnScroll);

// Random Line Functionality
const randomLines = [
    // "MØh1ŧ Di Bund Ch Lunn Dita",
    // "MØh1ŧ Di Maa Da Bhosda!!",
    // "MØh1ŧ Nang Saala Chuda",
    // "MØh1ŧ Dujeya Di Chiza Len Wala (Bund Ch V)!",
    // "MØh1ŧ Besharam Sala Dujeya Di Chiza Toddan Wala",
    // "MØh1ŧ Di Maa De Lann Dita Bina Condom To!",
    // "MØh1ŧ Sarre Da Khaansura",

        "MØh1ŧ ਦੀ ਬੂੰਦ ਚ ਲੁੰ ਦਿਤਾ",
        "MØh1ŧ ਦੀ ਮਾਂ ਦਾ ਭੋਸੜਾ!!",
        "MØh1ŧ ਨੰਗ ਸਾਲਾ ਚੂਦਾ",
        "MØh1ŧ ਦੂਜਿਆਂ ਦੀਆਂ ਚੀਜ਼ਾਂ ਲੈਣ ਵਾਲਾ (ਬੂੰਦ ਚ ਵੀ)!",
        "MØh1ŧ ਬੇਸ਼ਰਮ ਸਾਲਾ ਦੂਜਿਆਂ ਦੀਆਂ ਚੀਜ਼ਾਂ ਤੋੜਣ ਵਾਲਾ",
        "MØh1ŧ ਦੀ ਮਾਂ ਦੇ ਲੁੰ ਦਿਤਾ ਬਿਨਾ Condom ਤੋ!",
        "MØh1ŧ ਸਾਰੇ ਦਾ ਖਾਂਸੁਰਾ"
    
];

function displayRandomLine() {
    const randomLineElement = document.getElementById("random-line");
    const randomLine = randomLines[Math.floor(Math.random() * randomLines.length)];
    randomLineElement.textContent = randomLine;
    randomLineElement.style.display = "block";
    randomLineElement.style.opacity = 0;

    // Fade-in effect for random line
    setTimeout(() => {
        randomLineElement.style.opacity = 1;
    }, 100);
}

// Call random line function on page load
window.onload = function () {
    displayRandomLine();
};



// dark mode

    const themeToggleButton = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Load the theme from local storage if available
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.classList.toggle('light-mode', savedTheme === 'light');
        themeToggleButton.textContent = savedTheme === 'light' ? '🌙' : '☀️';
    }

    // Toggle theme on button click
    themeToggleButton.addEventListener('click', () => {
        const isLightMode = htmlElement.classList.toggle('light-mode');
        themeToggleButton.textContent = isLightMode ? '🌙' : '☀️';
        localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
    });

// Select elements
const disclaimerOverlay = document.getElementById("disclaimer-overlay");
const agreeButton = document.getElementById("agree-btn");
const disagreeButton = document.getElementById("disagree-btn");

// Ensure the buttons are found
if (disclaimerOverlay && agreeButton && disagreeButton) {
    console.log("Elements found successfully.");

    // "I Agree" Button - Hides the disclaimer
    agreeButton.addEventListener("click", () => {
        console.log("I Agree button clicked."); // Debugging log
        disclaimerOverlay.style.display = "none"; // Hide the disclaimer
    });

    // "Leave" Button - Redirects to another page
    disagreeButton.addEventListener("click", () => {
        console.log("Leave button clicked."); // Debugging log
        window.location.href = "https://www.google.com"; // Redirect
    });
} else {
    console.error("One or more elements (disclaimerOverlay, agreeButton, disagreeButton) not found.");
}




//warning:
// Select the button in the permanent overlay
const amrButton = document.getElementById("amr-btn");


// Add an event listener to log a message when the button is clicked
amrButton.addEventListener("click", () => {
    console.log("amr button clicked. The overlay cannot be removed by clicking this button.");
});



// remove this after sometime (no interaction code)
// Disable dragging for all elements on the website
document.addEventListener("dragstart", (event) => {
    event.preventDefault(); // Prevent dragging
});

// Disable right-click context menu to block saving images or inspecting
document.addEventListener("contextmenu", (event) => {
    event.preventDefault(); // Disable right-click
});

