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
    // "Mohit Di Bund Ch Lunn Dita",
    // "Mohit Di Maa Da Bhosda!!",
    // "Mohit Nang Saala Chuda",
    // "Mohit Dujeya Di Chiza Len Wala (Bund Ch V)!",
    // "Mohit Besharam Sala Dujeya Di Chiza Toddan Wala",
    // "Mohit Di Maa De Lann Dita Bina Condom To!",
    // "Mohit Sarre Da Khaansura",

        "Mohit ਦੀ ਬੂੰਦ ਚ ਲੁੰ ਦਿਤਾ",
        "Mohit ਦੀ ਮਾਂ ਦਾ ਭੋਸੜਾ!!",
        "Mohit ਨੰਗ ਸਾਲਾ ਚੂਦਾ",
        "Mohit ਦੂਜਿਆਂ ਦੀਆਂ ਚੀਜ਼ਾਂ ਲੈਣ ਵਾਲਾ (ਬੂੰਦ ਚ ਵੀ)!",
        "Mohit ਬੇਸ਼ਰਮ ਸਾਲਾ ਦੂਜਿਆਂ ਦੀਆਂ ਚੀਜ਼ਾਂ ਤੋੜਣ ਵਾਲਾ",
        "Mohit ਦੀ ਮਾਂ ਦੇ ਲੁੰ ਦਿਤਾ ਬਿਨਾ Condom ਤੋ!",
        "Mohit ਸਾਰੇ ਦਾ ਖਾਂਸੁਰਾ"
    
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

