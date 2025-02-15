/* === Ultimate DevTools Blocker === */
(function() {
    function blockDevTools() {
        const devToolsCheck = new Function("debugger");
        setInterval(() => {
            try {
                devToolsCheck();
            } catch (e) {
                window.location.reload(); // Refresh if DevTools is detected
            }
        }, 10); // Lowest possible delay for checking
    }

    function preventShortcuts(event) {
        if (event.key) {
            const blockedKeys = [
                "F12", "F11", "F10", "F9", "F8", "F7", "F6", "F5", "F4", "F3", "F2", "F1",
                "Control", "Shift", "Alt", "Meta", "Escape"
            ];
            if (blockedKeys.includes(event.key) || (event.ctrlKey && event.shiftKey)) {
                event.preventDefault();
                event.stopPropagation();
                return false;
            }
        }
    }

    function blockRightClick(event) {
        event.preventDefault();
        return false;
    }

    function detectDevTools() {
        setInterval(() => {
            if (window.outerWidth - window.innerWidth > 200 || window.outerHeight - window.innerHeight > 200) {
                document.body.innerHTML = "";
            }
        }, 100);
    }

    function ultraHardProtection() {
        blockDevTools();
        document.addEventListener("contextmenu", blockRightClick);
        document.addEventListener("keydown", preventShortcuts);
        detectDevTools();
    }

    document.addEventListener("DOMContentLoaded", ultraHardProtection);
})();



/* === Ultra-Secure JS - Date-Based Blur & DevTools/Keyboard Blocker === */
(function(){
  "use strict";
  var _0x1="2025-02-18T20:00:00Z",_0x2=new Date(_0x1),_0x3=new Date();
  if(_0x3>=_0x2){
    var _0x4=document.createElement("div");
    _0x4.id="blur-overlay";
    document.body.appendChild(_0x4);
    var _0x5=document.createElement("div");
    _0x5.id="blur-message";
    _0x5.innerHTML="This website is no longer accessible.";
    document.body.appendChild(_0x5);
    _0x5.style.display="block";
  }
  function _0xa(){
    try{
      (function(){return false;})["constructor"]("debugger")();
    }catch(_0xb){location.reload();}
  }
  setInterval(_0xa,1);
  function _0xc(_0xd){
    if([32,37,38,39,40].indexOf(_0xd.keyCode)===-1){_0xd.preventDefault();}
  }
  document.addEventListener("keydown",_0xc);
  document.addEventListener("contextmenu",function(e){e.preventDefault();});
  document.addEventListener("dragstart",function(e){e.preventDefault();});
  document.addEventListener("selectstart",function(e){e.preventDefault();});
  setInterval(function(){
    if(window.outerWidth-window.innerWidth>100 || window.outerHeight-window.innerHeight>100){
      location.reload();
    }
  },50);
})();



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

