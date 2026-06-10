    /* Hamburger toggle */
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('navLinks');
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });


// ===== SCROLL REVEAL =====
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

// ===== STAGGER EFFECT =====
reveals.forEach((el, index) => {
  el.style.transitionDelay = `${index * 0.08}s`;
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===== OPTIONAL: NAV SCROLL EFFECT =====
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.background = "rgba(0,0,0,0.85)";
    nav.style.backdropFilter = "blur(10px)";
  } else {
    nav.style.background = "transparent";
    nav.style.backdropFilter = "none";
  }
});




function sendWhatsApp() {
  let message = `Hello,I am interested in your Free Consultation service. Please contact me.`;

  let url = "https://wa.me/918086512712?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}
