// ---
const hamMenuBtn = document.querySelector(".header__main-ham-menu-cont");
const smallMenu = document.querySelector(".header__sm-menu");
const headerHamMenuBtn = document.querySelector(".header__main-ham-menu");
const crbuttons = document.querySelectorAll("[data-carousel-button]");

crbuttons.forEach((cbutton) => {
  cbutton.addEventListener("click", () => {
    const offset = cbutton.dataset.carouselButton === "next" ? 1 : -1;
    const slides = cbutton
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

const headerHamMenuCloseBtn = document.querySelector(
  ".header__main-ham-menu-close"
);
const headerSmallMenuLinks = document.querySelectorAll(".header__sm-menu-link");

var gitIco = document.getElementById("githubIcon");
var googlePlayIco = document.getElementById("googlePlayIcon")
var linkIco = document.getElementById("linkedInIcon");
var switcher = document.getElementById("themeSwitch");
var noise = document.getElementById("noisePattern");
var hamOpen = document.getElementById("hamOpen");
var hamClose = document.getElementById("themeSwitch");

var icon = document.getElementById("icon");
var darkMode;
icon.onclick = function () {
  console.log("the darkmode is working");
  document.body.classList.toggle("dark-theme");

  var homeHero = document.querySelector(".home-hero");
  if (document.body.classList.contains("dark-theme")) {
    darkMode = true;
    icon.src = "assets/png/sun.png";
    // homeHero.style.backgroundImage = 'url("assets/jpeg/darkNoiseBG.jpg")';
    homeHero.style.backgroundImage = "invert(0)";
    gitIco.style.filter = "invert(0)"; // Revert to original colors
    linkIco.style.filter = "invert(0)";
    googlePlayIco.style.filter = "invert(1)" // Revert to original colors
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
    googlePlayIco.style.filter = "invert(0)"
    hamOpen.style.filter = "invert(0)";
    hamClose.style.filter = "invert(0)";
    toggleDarkModeSlowly();
  }
};

var image = document.querySelector(".home-hero");
var darkMode = document.body.classList.contains("dark-theme"); // Check if dark mode is active
var imageSources = {
  light: "assets/jpeg/whiteFade.jpg",
  dark: "assets/jpeg/darkFade.jpg",
};
function toggleDarkModeSlowly() {
  icon.classList.add("active");
  setTimeout(() => {
    icon.classList.remove("active");
  }, 300);

  var opacity = 1;
  var interval = 20; // Adjust this value for the transition speed (in milliseconds)

  var fadeOut = setInterval(function () {
    opacity -= 0.45; // Adjust the increment as needed for a smoother/faster transition
    image.style.opacity = opacity;

    if (opacity <= 0) {
      clearInterval(fadeOut); // Stop the fade-out effect

      // Toggle between two background images
      /* if (darkMode) {
        image.style.backgroundImage = "url(assets/jpeg/darkFade.jpg)";
      } else {
        image.style.backgroundImage = "url(assets/jpeg/whiteFade.jpg)";
      } */

      fadeIn();
    }
  }, interval);

  function fadeIn() {
    opacity = 0;
    var fadeInInterval = setInterval(function () {
      opacity += 0.04; // Adjust the increment as needed for a smoother/faster transition
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

hamMenuBtn.addEventListener("click", () => {
  if (smallMenu.classList.contains("header__sm-menu--active")) {
    smallMenu.classList.remove("header__sm-menu--active");
  } else {
    smallMenu.classList.add("header__sm-menu--active");
  }
  if (headerHamMenuBtn.classList.contains("d-none")) {
    headerHamMenuBtn.classList.remove("d-none");
    headerHamMenuCloseBtn.classList.add("d-none");
  } else {
    headerHamMenuBtn.classList.add("d-none");
    headerHamMenuCloseBtn.classList.remove("d-none");
  }
});

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener("click", () => {
    smallMenu.classList.remove("header__sm-menu--active");
    headerHamMenuBtn.classList.remove("d-none");
    headerHamMenuCloseBtn.classList.add("d-none");
  });
}

// ---
const headerLogoConatiner = document.querySelector(".header__logo-container");

headerLogoConatiner.addEventListener("click", () => {
  location.href = "index.html";
});

const menuButton = document.getElementById("menu");
let lastScrollPosition = 0;

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const scrollDirection =
    scrollPosition - lastScrollPosition > 0 ? "down" : "up"; // Determine scroll direction

  if (scrollDirection === "down") {
    menuButton.classList.add("hidden_menu");
  } else {
    menuButton.classList.remove("hidden_menu");
  }

  lastScrollPosition = scrollPosition;
});

// Neuomorphic Two-Level Navigation Script - Self-contained with unique namespace 'nm'
(function () {
  // Initialize when DOM is ready
  function nmInitNavigation() {
    // Primary navigation elements
    const primaryBtns = document.querySelectorAll(".nm-primary-tab-btn");
    const primaryIndicator = document.querySelector(".nm-primary-indicator");

    // Secondary navigation containers
    const secondaryTabsContainers =
      document.querySelectorAll(".nm-secondary-tabs");

    // Content containers
    const categoryContents = document.querySelectorAll(".nm-category-content");

    // Track current states
    let currentCategory = "android";
    const projectStates = {
      android: "android-project1",
      flutter: "flutter-project1",
      other: "other-project1",
    };

    // Variables to track touch events
    let touchStartX = 0;
    let touchEndX = 0;

    // Detect if device is mobile (screen width <= 768px)
    function isMobileDevice() {
      return window.innerWidth <= 768;
    }

    // Update the primary indicator position
    function updatePrimaryIndicator(index) {
      if (window.innerWidth <= 480) {
        // On very small screens, just highlight the active tab
        primaryBtns.forEach((btn, i) => {
          if (i === index) {
            btn.style.color = "#4a69bd";
          } else {
            btn.style.color = "";
          }
        });
      } else {
        // Normal indicator behavior
        primaryIndicator.style.transform = `translateX(${index * 100}%)`;
      }
    }

    // Update secondary indicator for a specific tab group
    function updateSecondaryIndicator(tabGroup, index) {
      const indicator = tabGroup.querySelector(".nm-secondary-indicator");
      if (!indicator) return; // In case indicator is hidden on small screens

      const totalTabs = tabGroup.querySelectorAll(
        ".nm-secondary-tab-btn"
      ).length;
      const tabWidth = 100 / totalTabs;

      if (window.innerWidth <= 480 && totalTabs > 3) {
        // For very small screens with many tabs, calculate position based on row/column
        const row = Math.floor(index / 2); // 2 tabs per row on small screens
        const col = index % 2;
        indicator.style.transform = `translate(${col * 100}%, ${row * 100}%)`;
        indicator.style.width = "50%"; // Two tabs per row, each 50% width
        indicator.style.height = `calc((100% - ${
          (totalTabs / 2 - 1) * 0.3
        }rem) / ${Math.ceil(totalTabs / 2)})`;
      } else {
        // Normal indicator behavior
        indicator.style.transform = `translateX(${index * 100}%)`;
        indicator.style.width = `calc(${tabWidth}% - 0.53rem)`;
      }
    }

    // Switch primary category
    function switchCategory(category) {
      if (category === currentCategory) return;

      // Update active primary button and indicator
      primaryBtns.forEach((btn, index) => {
        if (btn.dataset.nmCategory === category) {
          btn.classList.add("nm-active");
          updatePrimaryIndicator(index);
        } else {
          btn.classList.remove("nm-active");
        }
      });

      // Hide all secondary tabs and show the selected one
      secondaryTabsContainers.forEach((container) => {
        if (container.id === `nm-${category}-tabs`) {
          container.classList.add("nm-active");
        } else {
          container.classList.remove("nm-active");
        }
      });

      // Hide all category content and show the selected one
      categoryContents.forEach((content) => {
        if (content.id === `nm-${category}-content`) {
          content.classList.add("nm-active");
        } else {
          content.classList.remove("nm-active");
        }
      });

      // Show active project content
      showActiveProject(category, projectStates[category]);

      // Update current category
      currentCategory = category;
    }

    // Show active project
    function showActiveProject(category, projectId) {
      // Find all project contents for the category
      const projectContents = document.querySelectorAll(
        `#nm-${category}-content .nm-project-content`
      );

      // Hide all projects and show the selected one
      projectContents.forEach((content) => {
        if (content.id === projectId) {
          content.classList.add("nm-active");
        } else {
          content.classList.remove("nm-active");
        }
      });

      // Update project state
      projectStates[category] = projectId;

      // Update secondary tabs active status
      const secondaryBtns = document.querySelectorAll(
        `#nm-${category}-tabs .nm-secondary-tab-btn`
      );
      secondaryBtns.forEach((btn, index) => {
        if (btn.dataset.nmProject === projectId) {
          btn.classList.add("nm-active");

          // Update the indicator position
          const tabGroup = document.querySelector(`#nm-${category}-tabs`);
          updateSecondaryIndicator(tabGroup, index);
        } else {
          btn.classList.remove("nm-active");
        }
      });
    }

    // Initialize event listeners
    function initEventListeners() {
      // Primary tab click event
      primaryBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const category = btn.dataset.nmCategory;
          switchCategory(category);
        });
      });

      // Secondary tab click events for each category
      secondaryTabsContainers.forEach((container) => {
        const category = container.id.replace("nm-", "").replace("-tabs", "");
        const btns = container.querySelectorAll(".nm-secondary-tab-btn");

        btns.forEach((btn) => {
          btn.addEventListener("click", () => {
            const projectId = btn.dataset.nmProject;
            showActiveProject(category, projectId);
          });
        });
      });

      // Add swipe gestures for mobile
      initSwipeGestures();

      // Handle window resize event
      window.addEventListener("resize", handleResize);
    }

    // Handle resize events to update indicators
    function handleResize() {
      // Update primary indicator position
      primaryBtns.forEach((btn, index) => {
        if (btn.classList.contains("nm-active")) {
          updatePrimaryIndicator(index);
        }
      });

      // Update all secondary indicators position
      secondaryTabsContainers.forEach((container) => {
        if (container.classList.contains("nm-active")) {
          const btns = container.querySelectorAll(".nm-secondary-tab-btn");
          btns.forEach((btn, index) => {
            if (btn.classList.contains("nm-active")) {
              updateSecondaryIndicator(container, index);
            }
          });
        }
      });
    }

    // Initialize swipe gestures for mobile
    function initSwipeGestures() {
      // Only add touch events on mobile devices
      if (!isMobileDevice()) return;

      const nmContainer = document.querySelector(".nm-container");

      // Add touch event listeners
      nmContainer.addEventListener(
        "touchstart",
        (e) => {
          touchStartX = e.changedTouches[0].screenX;
        },
        false
      );

      nmContainer.addEventListener(
        "touchend",
        (e) => {
          touchEndX = e.changedTouches[0].screenX;
          handleSwipe();
        },
        false
      );

      // Handle swipe direction
      function handleSwipe() {
        const swipeThreshold = 50; // Min distance for a swipe
        const swipeDistance = touchEndX - touchStartX;

        // Ignore small movements
        if (Math.abs(swipeDistance) < swipeThreshold) return;

        // Get array of category names
        const categories = Array.from(primaryBtns).map(
          (btn) => btn.dataset.nmCategory
        );
        const currentIndex = categories.indexOf(currentCategory);

        if (swipeDistance > 0) {
          // Swipe right - go to previous category
          const prevIndex =
            (currentIndex - 1 + categories.length) % categories.length;
          switchCategory(categories[prevIndex]);
        } else {
          // Swipe left - go to next category
          const nextIndex = (currentIndex + 1) % categories.length;
          switchCategory(categories[nextIndex]);
        }
      }
    }

    // Project swiping
    function initProjectSwipeGestures() {
      if (!isMobileDevice()) return;

      const contentContainers = document.querySelectorAll(
        ".nm-category-content"
      );

      contentContainers.forEach((container) => {
        container.addEventListener(
          "touchstart",
          (e) => {
            touchStartX = e.changedTouches[0].screenX;
          },
          false
        );

        container.addEventListener(
          "touchend",
          (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleProjectSwipe(container);
          },
          false
        );
      });

      function handleProjectSwipe(container) {
        const swipeThreshold = 50;
        const swipeDistance = touchEndX - touchStartX;

        if (Math.abs(swipeDistance) < swipeThreshold) return;

        const category = container.id
          .replace("nm-", "")
          .replace("-content", "");
        const projects = Array.from(
          container.querySelectorAll(".nm-project-content")
        ).map((p) => p.id);
        const currentIndex = projects.indexOf(projectStates[category]);

        if (swipeDistance > 0) {
          // Swipe right - go to previous project
          const prevIndex =
            (currentIndex - 1 + projects.length) % projects.length;
          showActiveProject(category, projects[prevIndex]);
        } else {
          // Swipe left - go to next project
          const nextIndex = (currentIndex + 1) % projects.length;
          showActiveProject(category, projects[nextIndex]);
        }
      }
    }

    // Initialization
    initEventListeners();
    initProjectSwipeGestures();

    // Initial setup - show default category and project
    switchCategory(currentCategory);
  }

  // Run after DOM is fully loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", nmInitNavigation);
  } else {
    nmInitNavigation();
  }
})();

document.addEventListener('DOMContentLoaded', function() {
  collapseBtn()
});

function collapseBtn() {
  const collapseBtn = document.getElementById('navCollapseBtn');
  const header = document.getElementById('menu');
  if (collapseBtn || header) {
    collapseBtn.addEventListener('click', function() {
      header.classList.toggle('header--collapsed');
    });
  }
} 
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});

