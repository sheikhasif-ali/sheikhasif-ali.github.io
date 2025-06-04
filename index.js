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
var googlePlayIco = document.getElementById("googlePlayIcon");
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
    googlePlayIco.style.filter = "invert(1)"; // Revert to original colors
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
    googlePlayIco.style.filter = "invert(0)";
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

document.addEventListener("DOMContentLoaded", function () {
  collapseBtn();
});

function collapseBtn() {
  const collapseBtn = document.getElementById("navCollapseBtn");
  const header = document.getElementById("menu");
  if (collapseBtn || header) {
    collapseBtn.addEventListener("click", function () {
      header.classList.toggle("header--collapsed");
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

// Project data structure
const projectData = {
  android: [
    {
      name: "Friends Of CJN",
      media:
        '<video controls autoplay height="100%" width="100%"><source src="assets/videos/friendsOfCjn.mp4" type="video/mp4" />Your browser does not support the video tag.</video>',
      description: `<span style="font-weight:bold; color:#2c3e50;">Friends of CJN</span> is an <span style="color:#16a085;">all-in-one job search companion app</span> that integrates directly with the CJN Website. Whether you're job-hunting or tracking your recruitment progress, this app streamlines everything into a simple experience.

<br><br>

<span style="color:#2980b9;">Key Features:</span><br>
<span style="color:#8e44ad;">•</span> Create and edit a personalized user profile.<br>
<span style="color:#8e44ad;">•</span> Navigate distinct sections for each recruitment stage: <span style="color:#c0392b;">Assessment</span>, <span style="color:#d35400;">Training</span>, <span style="color:#27ae60;">Interview</span>, and <span style="color:#f39c12;">Job Offer</span>.<br>
<span style="color:#8e44ad;">•</span> Stay updated with a 24/7 job feed on the <span style="font-weight:bold;">Dashboard</span> and apply instantly.<br><br>

<a href="https://play.google.com/store/apps/details?id=com.bpsi.friendsofcjn" target="_blank" style="color:#2980b9; text-decoration:underline;">View on Play Store</a>
`,
      tech: ["Java","Kotlin","XML"],
    },
    {
      name: "Fashion Parade",
      media:
        '<video controls autoplay height="100%" width="100%"><source src="assets/videos/fashionParade.mp4" type="video/mp4" />Your browser does not support the video tag.</video>',
      description: `<span style="font-weight:bold; color:#2c3e50;">Fashion Parade</span> is a talent discovery platform built around <span style="color:#e84393;">Vidumes (video résumés)</span>. It’s a sleek, interactive space for recruiters and talent hunters to explore, rate, and analyze candidates visually.

<br><br>

<span style="color:#2980b9;">What sets it apart?</span><br>
<span style="color:#8e44ad;">•</span> <span style="font-weight:bold;">Secure login/signup</span> for a personalized experience.<br>
<span style="color:#8e44ad;">•</span> Watch high-quality Vidumes of aspiring candidates.<br>
<span style="color:#8e44ad;">•</span> Rate and compare candidates based on user feedback.<br>
<span style="color:#8e44ad;">•</span> Explore <span style="color:#27ae60;">candidate details</span>: skills, college, and experience.<br><br>
<span style="font-style:italic;">A one-stop hub to connect talent with opportunity.</span>
`,
      tech: ["Java","Kotlin","XML"],
    },
    {
      name: "CJN Tablet",
      media:
        '<video controls autoplay height="100%" width="100%"><source src="assets/videos/cjnTablet.mp4" type="video/mp4" />Your browser does not support the video tag.</video>',
      description: `<span style="font-weight:bold; color:#2c3e50;">CJN Tablet</span> is a companion app designed for tablets, bringing a <span style="color:#16a085;">job-first experience</span> that's deeply integrated with both the CJN Website and the Friends of CJN ecosystem.

<br><br>

<span style="color:#2980b9;">Features include:</span><br>
<span style="color:#8e44ad;">•</span> Smooth <span style="font-weight:bold;">login</span>.<br>
<span style="color:#8e44ad;">•</span> Real-time job feed to explore new opportunities.<br>
<span style="color:#8e44ad;">•</span> Use <span style="color:#d35400;">QR codes</span> to jump straight into assessment or interview rooms.<br>
<span style="color:#8e44ad;">•</span> Read authentic <span style="color:#27ae60;">feedback</span> from other users.<br>
<span style="color:#8e44ad;">•</span> Analyze <span style="color:#f39c12;">stats</span> that provide insights about job trends and offers.<br><br>

<a href="https://play.google.com/store/apps/details?id=com.cjn.tabletcjn" target="_blank" style="color:#2980b9; text-decoration:underline;">View on Play Store</a>
`,
      tech: ["Java","Kotlin","XML"],
    },
    {
      name: "Hue Calculator",
      media:
        '<video controls autoplay height="100%" width="100%"><source src="assets/videos/hueCalculator.mp4" type="video/mp4" />Your browser does not support the video tag.</video>',
      description: `
                        <p>Unleash a calculator that bursts with <span style="color: red">c</span><span style="color: orange">o</span><span style="color: rgb(0, 149, 255)">l</span><span style="color: green">o</span><span style="color: rgb(255, 0, 230)">r</span>! Watch as the buttons <strong>change color with every click</strong>, transforming your calculations into a captivating visual experience.</p>
                        <p>Plus, explore <strong>Light and Dark modes</strong> to match your environment or preference. Calculate with style and watch your numbers come to life!</p>
                        <p><a href="https://play.google.com/store/apps/details?id=com.huecalculator">Playstore</a></p>
                    `,
      tech: ["Kotlin"],
    },
    {
      name: "Chatty",
      media:
        '<video controls autoplay height="100%" width="100%"><source src="assets/videos/chatyyLinkedin.mov" type="video/mp4" />Your browser does not support the video tag.</video>',
      description: `
                        <p><strong>Chatty</strong> is a sleek Android chat application built with <span style="color: #dd2c00"><strong>Firebase</strong></span>, offering real-time messaging, secure user authentication.</p>
                        <p>Leveraging Firebase Realtime Database and Cloud Messaging, Chatty ensures instant message delivery. Chatty provides a modern and user-friendly communication platform.</p>
                        <p>Designed Material Design principles, it ensures maintainability, scalability, and an intuitive user experience.</p>
                    `,
      tech: ["Kotlin", "XML", "Firebase"],
    },
    {
      name: "Classified Project",
      media:
        '<img src="/api/placeholder/230/400" alt="Android Project 3" style="width: 100%; height: 100%; object-fit: cover;" />',
      description: `
                        <p>Will add something here soon.</p>
                    `,
      tech: ["Kotlin", "AI", "SOME COOL API"],
    },
  ],
  flutter: [
    {
      name: "S.Rocks.Music",
      media:
        '<video controls autoplay height="100%" width="100%"><source src="assets/videos/srocksmusic.mp4" type="video/mp4" />Your browser does not support the video tag.</video>',
      description: `
                        <p>This was a project assignment for the position of Flutter Developer Intern at <span style="font-weight:bold; color:#a0013b;">S.Rocks.Music</span>. The objective was to recreate the Home Screen from one of their apps using Flutter, to showcase my skills using flutter, firebase and its workings.</p>
                        <p><a href="https://github.com/sheikhasif-ali/srocksmusic_assignment">Github</a></p>
                    `,
      tech: ["Flutter", "Dart", "Firebase", "MVVM","get_it"],
    },
    {
      name: "Noted",
      media:
        '<video controls autoplay height="100%" width="100%"><source src="assets/videos/noted.webm" type="video/mp4" />Your browser does not support the video tag.</video>',
      description: `
                        <p>A note-taking application built using <strong>Flutter</strong> and <strong>Firebase</strong>. The app features Firebase integration for user registration, login, and authentication, ensuring secure user access.</p>
                        <p>Additionally, I implemented cloud storage for user notes using Firebase, allowing data synchronization across devices. For local storage, I used SQLite to ensure data accessibility even when offline, providing users with a seamless experience.</p>
                        <p>I also used Bloc for state management, and used a mix of MVVM and Clean Architecture.</p>
                        <p>It is still a Work In Progress and I intend to add more features in the future, and even publish it.</p>
                    `,
      tech: ["Flutter", "Dart", "Firebase"],
    },
    {
      name: "NewsWala",
      media:
        '<video controls autoplay height="100%" width="100%"><source src="assets/videos/newsWala.webm" type="video/mp4" />Your browser does not support the video tag.</video>',
      description: `
                        <p>A News App made using <strong style="color: #43d3f6">Flutter</strong> and Dart as a project to learn the tech. Made specifically for mobile devices. The app fetches and displays the latest news using the NEWS API.</p>
                        <p>The project uses <strong style="color: #43d3f6">Flutter</strong> as the UI framework, with Dart running the logic of the app. API requests are made using the <strong>Dio</strong> package to fetch data from the NEWS API. Contains a Search Feature to find specific stories.</p>
                        <p><a href="https://github.com/sheikhasif-ali/news_wala">Source Code & Download</a></p>
                    `,
      tech: ["Flutter", "Dart"],
    },
    {
      name: "Masterstroke",
      media:
        '<img alt="Masterstroke" style="width: 100%; height: 100%; object-fit: cover;" />',
      description: `
                        <p>A work-in-progress app I'm building from scratch for Downtown IELTS & Immigration, integrating state of the art AI integrations.</p>
                    `,
      tech: ["Flutter", "Dart", "Bloc", "go_router", "Clean Architecture"],
    },
    {
      name: "IMotive by Andaz",
      media:
        '<video controls autoplay height="100%" width="100%"><source src="assets/videos/srocksmusic.mp4" type="video/mp4" />Your browser does not support the video tag.</video>',
      description: `
                        <p>This was a project assignment for the position of Flutter Developer Intern at <span style="font-weight:bold; color:#a0013b;">IMotive</span>. The objective was to recreate the Home Screen from one of their apps using Flutter, to showcase my skills using flutter, firebase and its workings.</p>
                        <p><a href="https://github.com/sheikhasif-ali/andaz-assesment">Github</a></p>
                    `,
      tech: ["Flutter", "Dart", "Firebase", "MVVM","get_it"],
    },
  ],
  other: [
    {
      name: "Portfolio Website",
      media:
        '<img src="assets/png/portfolio.png" alt="You are browsing it." style="width: 100%; height: 100%; object-fit: cover;" />',
      description: `
                        <p>A responsive portfolio website showcasing my projects and skills. Built with <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>.</p>
                        <p>The site features smooth scrolling, dynamic content loading. It's optimized for all devices and screen sizes.</p>
                        <p>I implemented custom animations and transitions.</p>
                    `,
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Digital Wellbeing-Stats",
      media:
        '<img src="assets/png/wellbeingStat.png" alt="Software Screenshot" style="width: 100%; height: 100%; object-fit: cover;" />',
      description: `
                        <p>In this <strong>Pure Java</strong> Project, I created an application which processes time data created by an <a href="https://github.com/christiankyle-ching/DigitalWellbeingForWindows">existing app</a> and tells the user how much time they have spent using a particular Software in <strong>Windows</strong>.</p>
                        <p>The user can select a range between which the data should be presented for and can also limit, so the user sees only those apps which have crossed the limit.</p>
                        <p><a href="https://github.com/sheikhasif-ali/Wellbeing-Stats">Source Code & Download</a></p>
                    `,
      tech: ["Java"],
    },
    {
      name: "AuthorGram",
      media:
        '<video controls autoplay height="100%" width="100%"><source src="assets/videos/authorgram.mp4" type="video/mp4" />Your browser does not support the video tag.</video>',
      description: `
                        <p>This website is the result of a 24 hour hackathon where I led a team of 3 other members to solve a problem within 24 hours.</p>
                        <p>This is a website which was made for authors and writers so they can write, collab and also save the characters in their story so they can write the details once and can revisit it anytime to write better stories.</p>
                        <p>This was a MVP for our idea, but since hasn't been worked on.</p>
                    `,
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
    {
      name: "TicTacToe",
      media:
        '<img src="assets/jpeg/gameplay.jpg" alt="Gameplay" style="width: 100%; height: 100%; object-fit: cover;" />',
      description: `
                        <p>Decided to take Tic-Tac-Toe to the next level! The Frontend was created using HTML, CSS and Vanilla JavaScript. Instead of a simple game, I built a database using <span style="color: darkgreen; font-weight: bold">Springboot</span>.</p>
                        <p>Now players can enter names that get stored and even check their game history. I kept the theme minimalist for a clean look and used toastr notifications for a touch of polish. It all comes together to make a super engaging and user-friendly game!</p>
                    `,
      tech: ["Java", "Springboot", "HTMX"],
    },
  ],
};

// State management
let currentCategory = "android";
let currentProjectIndex = 0;

// DOM elements
const categoryButton = document.getElementById("categoryButton");
const categoryArrow = document.getElementById("categoryArrow");
const categoryMenu = document.getElementById("categoryMenu");
const selectedCategory = document.getElementById("selectedCategory");

const projectButton = document.getElementById("projectButton");
const projectArrow = document.getElementById("projectArrow");
const projectMenu = document.getElementById("projectMenu");
const selectedProject = document.getElementById("selectedProject");

const projectMedia = document.getElementById("projectMedia");
const projectTitle = document.getElementById("projectTitle");
const projectDescription = document.getElementById("projectDescription");
const techStack = document.getElementById("techStack");

// Initialize
function init() {
  populateProjectDropdown();
  displayProject();

  // Add event listeners
  categoryButton.addEventListener("click", () => toggleDropdown("category"));
  projectButton.addEventListener("click", () => toggleDropdown("project"));

  // Category selection
  categoryMenu.addEventListener("click", (e) => {
    if (e.target.classList.contains("dropdown-item")) {
      selectCategory(e.target.dataset.category);
    }
  });

  // Project selection
  projectMenu.addEventListener("click", (e) => {
    if (e.target.classList.contains("dropdown-item")) {
      selectProject(parseInt(e.target.dataset.index));
    }
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown-container")) {
      closeAllDropdowns();
    }
  });
}

// Select category
function selectCategory(category) {
  currentCategory = category;
  currentProjectIndex = 0;

  // Update category display
  const categoryNames = {
    android: "Native Android",
    flutter: "Flutter",
    other: "Others",
  };
  selectedCategory.textContent = categoryNames[category];

  // Update active state
  const categoryItems = categoryMenu.querySelectorAll(".dropdown-item");
  categoryItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.category === category);
  });

  populateProjectDropdown();
  displayProject();
  closeDropdown("category");
}

// Populate project dropdown
function populateProjectDropdown() {
  const projects = projectData[currentCategory];
  projectMenu.innerHTML = "";

  projects.forEach((project, index) => {
    const item = document.createElement("div");
    item.className = `dropdown-item ${
      index === currentProjectIndex ? "active" : ""
    }`;
    item.textContent = project.name;
    item.dataset.index = index;
    projectMenu.appendChild(item);
  });
}

// Select project
function selectProject(index) {
  currentProjectIndex = index;
  displayProject();
  closeDropdown("project");

  // Update active state
  const projectItems = projectMenu.querySelectorAll(".dropdown-item");
  projectItems.forEach((item, i) => {
    item.classList.toggle("active", i === index);
  });
}

// Display current project
function displayProject() {
  const project = projectData[currentCategory][currentProjectIndex];

  selectedProject.textContent = project.name;
  projectMedia.innerHTML = project.media;
  projectTitle.textContent = project.name;
  projectDescription.innerHTML = project.description;

  // Update tech stack
  techStack.innerHTML = "";
  project.tech.forEach((tech) => {
    const tag = document.createElement("span");
    tag.className = "tech-tag";
    tag.textContent = tech;
    techStack.appendChild(tag);
  });
}

// Toggle dropdown
function toggleDropdown(type) {
  const menu = type === "category" ? categoryMenu : projectMenu;
  const arrow = type === "category" ? categoryArrow : projectArrow;

  const isOpen = menu.classList.contains("open");

  // Close all dropdowns first
  closeAllDropdowns();

  if (!isOpen) {
    menu.classList.add("open");
    arrow.classList.add("open");
  }
}

// Close specific dropdown
function closeDropdown(type) {
  const menu = type === "category" ? categoryMenu : projectMenu;
  const arrow = type === "category" ? categoryArrow : projectArrow;

  menu.classList.remove("open");
  arrow.classList.remove("open");
}

// Close all dropdowns
function closeAllDropdowns() {
  categoryMenu.classList.remove("open");
  categoryArrow.classList.remove("open");
  projectMenu.classList.remove("open");
  projectArrow.classList.remove("open");
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", init);
