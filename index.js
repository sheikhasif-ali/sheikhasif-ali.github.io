// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const crbuttons = document.querySelectorAll("[data-carousel-button]")

crbuttons.forEach(cbutton => {
  cbutton.addEventListener("click", () => {
    const offset = cbutton.dataset.carouselButton === "next" ? 1 : -1
    const slides = cbutton
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
  )
  const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')
  
  var gitIco = document.getElementById("githubIcon");
  var linkIco = document.getElementById("linkedInIcon");  
  var switcher = document.getElementById("themeSwitch");
  var noise = document.getElementById("noisePattern")
  var hamOpen = document.getElementById("hamOpen");
  var hamClose = document.getElementById("themeSwitch");
  
  
  var icon = document.getElementById("icon");
  var darkMode;
  icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    
    var homeHero = document.querySelector('.home-hero');
    if (document.body.classList.contains("dark-theme")){
      darkMode = true;
      icon.src = "assets/png/sun.png" ;
      // homeHero.style.backgroundImage = 'url("assets/jpeg/darkNoiseBG.jpg")';
      homeHero.style.backgroundImage = "invert(0)";
      gitIco.style.filter = "invert(0)"; // Revert to original colors
      linkIco.style.filter = "invert(0)"; // Revert to original colors
      hamOpen.style.filter = "invert(1)";
      hamClose.style.filter = "invert(1)";
      toggleDarkModeSlowly();
    } else {
      darkMode = false;
    icon.src = "assets/png/moon.png";
    // homeHero.style.backgroundImage = 'url("assets/jpeg/whiteNoiseBG.jpeg")';
    homeHero.style.backgroundImage = "invert(1)";
    gitIco.style.filter = "invert(1)"; 
    linkIco.style.filter = "invert(1)";
    hamOpen.style.filter = "invert(0)";
    hamClose.style.filter = "invert(0)";
    toggleDarkModeSlowly();
    
  }
}

var image = document.querySelector('.home-hero');
// var darkMode = document.body.classList.contains("dark-theme"); // Check if dark mode is active
var imageSources = {
  light: "assets/jpeg/whiteFade.jpg",
  dark: "assets/jpeg/darkFade.jpg"
};
function toggleDarkModeSlowly() {
  icon.classList.add("active");
  setTimeout(() => {
    icon.classList.remove("active");
  }, 300);
  
  var opacity = 1;
  var interval = 22; // Adjust this value for the transition speed (in milliseconds)
  
  var fadeOut = setInterval(function () {
    opacity -= 0.025; // Adjust the increment as needed for a smoother/faster transition
    image.style.opacity = opacity;
    
    if (opacity <= 0) {
          clearInterval(fadeOut); // Stop the fade-out effect

          // Toggle between two background images
          if (darkMode) {
            image.style.backgroundImage = 'url(assets/jpeg/darkFade.jpg)';
          } else {
            image.style.backgroundImage = 'url(assets/jpeg/whiteFade.jpg)';
          }

          fadeIn();
        }
  }, interval);
  
  function fadeIn() {
      opacity = 0;
      var fadeInInterval = setInterval(function () {
          opacity += 0.0099; // Adjust the increment as needed for a smoother/faster transition
          image.style.opacity = opacity;

          if (opacity >= 1) {
              clearInterval(fadeInInterval); // Stop the fade-in effect
          }
        }, interval);
  }
}




let inverted = false;

switcher.addEventListener("click", () => {
  if (inverted) {
    inverted = false;
      } else {
        inverted = true;
    }
  });
  
  
  
  
  
  hamMenuBtn.addEventListener('click', () => {
    if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})




const menuButton = document.getElementById('menu');
let lastScrollPosition = 0;

window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const scrollDirection = scrollPosition - lastScrollPosition > 0 ? 'down' : 'up'; // Determine scroll direction
  
  if (scrollDirection === 'down') {
    menuButton.classList.add('hidden_menu');
  } else {
    menuButton.classList.remove('hidden_menu');
  }
  
  lastScrollPosition = scrollPosition;
});

