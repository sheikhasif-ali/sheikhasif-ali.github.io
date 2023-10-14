// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')
var icon = document.getElementById("icon");

icon.onclick = function(){
  document.body.classList.toggle("dark-theme");
  var homeHero = document.querySelector('.home-hero');
  if (document.body.classList.contains("dark-theme")){
    icon.src = "assets/png/sun.png" ;
    homeHero.style.backgroundImage = 'url("assets/jpeg/darkNoiseBG.jpg")';
    gitIco.style.filter = "invert(0)"; // Revert to original colors
    linkIco.style.filter = "invert(0)"; // Revert to original colors
  } else {
    icon.src = "assets/png/moon.png";
    homeHero.style.backgroundImage = 'url("assets/jpeg/whiteNoiseBG.jpeg")';
    gitIco.style.filter = "invert(1)"; 
    linkIco.style.filter = "invert(1)";

    }
}

var gitIco = document.getElementById("githubIcon");
var linkIco = document.getElementById("linkedInIcon");  
var switcher = document.getElementById("themeSwitch");


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
