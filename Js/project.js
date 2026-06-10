// /* ── Debounce utility ── */
// function debounce(fn, delay) {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => fn(...args), delay);
//   };
// }

// const hamburger = document.getElementById("hamburger");
// const navLinks  = document.getElementById("navLinks");

// function closeMenu() {
//   hamburger.classList.remove("active");
//   navLinks.classList.remove("open");
//   document.body.style.overflow = "";
// }

// hamburger.addEventListener("click", () => {
//   const isOpen = navLinks.classList.toggle("open");
//   hamburger.classList.toggle("active", isOpen);
//   document.body.style.overflow = isOpen ? "hidden" : "";
// });

// navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));

// // Close menu if window resized above mobile breakpoint
// window.addEventListener("resize", debounce(() => {
//   if (window.innerWidth > 768) closeMenu();
// }, 150));

// // Close on Escape key
// document.addEventListener("keydown", e => {
//   if (e.key === "Escape" && navLinks.classList.contains("open")) closeMenu();
// });

//   /* ─────────────────────────────────────────────
//      SMOOTH SCROLL for nav anchor links
//   ───────────────────────────────────────────── */
// document.querySelectorAll('a[href^="#"]').forEach(a => {
//   a.addEventListener("click", e => {
//     const target = document.querySelector(a.getAttribute("href"));
//     if (target) {
//       e.preventDefault();
//       const navH = document.querySelector("nav")?.offsetHeight || 70;
//       const top  = target.getBoundingClientRect().top + window.scrollY - navH;
//       window.scrollTo({ top, behavior: "smooth" });
//     }
//   });
// });

//   /* ─────────────────────────────────────────────
//      NAV SCROLL STYLE
//   ───────────────────────────────────────────── */
// const nav = document.querySelector("nav");
// function updateNav() {
//   const isMobile = window.innerWidth <= 768;
//   const scrolled  = window.scrollY > 50;
//   if (scrolled || isMobile) {
//     nav.style.background    = "rgba(0,0,0,0.92)";
//     nav.style.backdropFilter = "blur(10px)";
//   } else {
//     nav.style.background    = "transparent";
//     nav.style.backdropFilter = "none";
//   }
// }
// window.addEventListener("scroll",  updateNav, { passive: true });
// window.addEventListener("resize",  debounce(updateNav, 100));
// updateNav();

//   /* ─────────────────────────────────────────────
//      SCROLL REVEAL
//   ───────────────────────────────────────────── */
// const reveals = document.querySelectorAll(".reveal");
// reveals.forEach((el, i) => { el.style.transitionDelay = `${i * 0.08}s`; });

// function runReveal() {
//   const wh = window.innerHeight;
//   reveals.forEach(el => {
//     if (el.getBoundingClientRect().top < wh - 80) el.classList.add("active");
//   });
// }
// window.addEventListener("scroll", runReveal, { passive: true });
// window.addEventListener("load",   runReveal);



/* ── Hamburger ── */
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('navLinks');

    function closeMenu() {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    }
    hamburger.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      hamburger.classList.toggle('active', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) closeMenu();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) closeMenu();
    });

    // /* ── Nav scroll style ── */
    // const nav = document.getElementById('mainNav');
    // function updateNav() {
    //   nav.classList.toggle('scrolled', window.scrollY > 40 || window.innerWidth <= 768);
    // }
    // window.addEventListener('scroll', updateNav, { passive: true });
    // window.addEventListener('resize', updateNav);
    // updateNav();

    // /* ── Scroll reveal ── */
    // const reveals = document.querySelectorAll('.reveal');
    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach((entry, i) => {
    //     if (entry.isIntersecting) {
    //       entry.target.classList.add('active');
    //       observer.unobserve(entry.target);
    //     }
    //   });
    // }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    // reveals.forEach(el => observer.observe(el));

    // /* ── Smooth scroll ── */
    // document.querySelectorAll('a[href^="#"]').forEach(a => {
    //   a.addEventListener('click', e => {
    //     const target = document.querySelector(a.getAttribute('href'));
    //     if (target) {
    //       e.preventDefault();
    //       const offset = nav.offsetHeight + 20;
    //       window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    //     }
    //   });
    // });



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

 document.querySelectorAll('.blur-reveal').forEach(function(el) {
    setTimeout(function() {
      el.classList.add('active');
    }, 400); // 200ms delay — adjust cheyyaam
  });





function sendWhatsApp() {
  let message = `Hello,I am interested in your Free Consultation service. Please contact me.`;

  let url = "https://wa.me/918086512712?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}
