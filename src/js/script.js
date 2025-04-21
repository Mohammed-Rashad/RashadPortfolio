function initTabs() {
  const tabSystems = document.querySelectorAll(".tab-system");

  tabSystems.forEach((system) => {
    const tabBtns = system.querySelectorAll(".tab-btn");
    const tabIndicator = system.querySelector(".tab-indicator");

    // Set initial indicator position
    if (tabIndicator && tabBtns.length > 0) {
      const activeBtn = system.querySelector(".tab-btn.active") || tabBtns[0];
      updateIndicator(activeBtn, tabIndicator);
    }

    // Add click event to all tab buttons
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        // Update active tab button
        tabBtns.forEach((b) => b.classList.remove("active"));
        this.classList.add("active");

        // Update indicator position
        if (tabIndicator) {
          updateIndicator(this, tabIndicator);
        }

        // Show corresponding content
        const tabId = this.getAttribute("data-tab");
        system.querySelectorAll(".tab-content").forEach((content) => {
          content.classList.remove("active");
        });
        system.querySelector(`#${tabId}`).classList.add("active");
      });
    });
  });
}

// Update indicator position based on active tab
function updateIndicator(activeBtn, indicator) {
  if (window.innerWidth <= 768) {
    return; // Don't show indicator on mobile
  }

  indicator.style.width = `${activeBtn.offsetWidth}px`;
  indicator.style.left = `${activeBtn.offsetLeft}px`;
}

// Initialize tabs when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initTabs();

  // Update indicator position on window resize
  window.addEventListener("resize", () => {
    const tabSystems = document.querySelectorAll(".tab-system");

    tabSystems.forEach((system) => {
      const activeBtn = system.querySelector(".tab-btn.active");
      const indicator = system.querySelector(".tab-indicator");

      if (activeBtn && indicator) {
        updateIndicator(activeBtn, indicator);
      }
    });
  });

  // top nav
  const mobileToggle = document.querySelector(".mobile-toggle");
  const navLinks = document.querySelector(".nav-links");
  

  mobileToggle.addEventListener("click", function () {
    mobileToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close menu when clicking on a link
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    link.addEventListener("click", function () {
      mobileToggle.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  
});

const navbar = document.getElementById('navbar');
  // Get the initial position of the navbar
const navbarPosition = navbar.getBoundingClientRect().top + window.scrollY;
const navbarLinks = document.getElementsByClassName("nav-link");
const logoContainer = document.getElementById("logo-container");
console.log(logoContainer);
let isSticky = false;
window.addEventListener('scroll', function() {
  // If we've scrolled past the original position of the navbar
  console.log(window.scrollY , navbarPosition);
  if (window.scrollY >= navbarPosition && !isSticky) {
    isSticky = true;
    navbar.classList.add('sticky');
    navbar.classList.remove('notSticky');
    logoContainer.classList.add('active');
    for (let item of navbarLinks) {
      item.style.color = "white";
    };
  } else if (window.scrollY < navbarPosition){
    isSticky = false;
    navbar.classList.remove('sticky');
    navbar.classList.add('notSticky');
    logoContainer.classList.remove('active');
    for (let item of navbarLinks) {
      item.style.color = "black";
    };
  }
});
// Initialize the tabs
initTabs();
