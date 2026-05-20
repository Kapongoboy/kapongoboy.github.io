/**
 * Cinematic Orchestration Logic
 * Plamedi Luis Portfolio
 */

// Establish theme instantly to prevent Flash of Unstyled Content (FOUC)
(function applyInitialTheme() {
  const hours = new Date().getHours();
  let theme = "theme-day"; // Default A24

  if (hours >= 6 && hours < 12) {
    theme = "theme-morning"; // Lanthimos
  } else if (hours >= 12 && hours < 18) {
    theme = "theme-day"; // A24
  } else {
    theme = "theme-night"; // Wong Kar-wai
  }

  document.documentElement.className = theme;
  
  // Wait for DOM to load to apply class to body
  window.addEventListener("DOMContentLoaded", () => {
    document.body.className = theme;
    
    // Inject step-printing animation class to primary cinematic elements
    const titles = document.querySelectorAll(".scene-slug, .scene-title, h1, .dialogue-text");
    titles.forEach((el, index) => {
      el.style.opacity = "0";
      setTimeout(() => {
        el.classList.add("step-print-active");
      }, index * 100);
    });

    initializeCinematicSubtitles();
    setupMobileBurger();
  });
})();

/**
 * Dynamically updates the Wong Kar-wai style subtitle overlay with active clock and mood
 */
function initializeCinematicSubtitles() {
  const subtitleContainer = document.getElementById("dynamic-subtitle");
  if (!subtitleContainer) return;

  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const timeString = `${hours}:${minutes} ${ampm}`;

    subtitleContainer.innerHTML = `
      "Subdue the regret. Dust yourself off, proceed. You'll get it in the next life, where you don't make mistakes. Do what you can with this one, while you're alive."
      <span class="subtitle-text">[ ${timeString} — τοῦ λόγου δ’ ἐόντος ξυνοῦ ζώουσιν οἱ πολλοὶ ὡς ἰδίαν ἔχοντες φρόνησιν ]</span>
    `;
  }

  updateClock();
  setInterval(updateClock, 30000); // Update clock every 30 seconds
}

/**
 * Mobile navigation menu triggers
 */
function setupMobileBurger() {
  const burgerIcon = document.querySelector(".nav a.icon");
  const navLinks = document.getElementById("navlinks");

  if (burgerIcon && navLinks) {
    burgerIcon.addEventListener("click", (e) => {
      e.preventDefault();
      navLinks.classList.toggle("active");
    });

    // Close menu when links are clicked on mobile
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }
}
