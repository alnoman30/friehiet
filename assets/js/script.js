gsap.registerPlugin(ScrollTrigger, SplitText);



// =========================
// LENIS (smooth scroll)
// =========================
if (typeof Lenis !== "undefined") {

  const lenis = new Lenis({
    duration: 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}



// =========================
// DOM READY
// =========================
document.addEventListener("DOMContentLoaded", () => {



  // =========================
  // MOBILE MENU
  // =========================
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuToggle && mobileMenu) {

    let open = false;

    gsap.set(mobileMenu, { autoAlpha: 0 });

    menuToggle.addEventListener("click", () => {

      open = !open;
      menuToggle.classList.toggle("active");

      if (open) {

        gsap.to(mobileMenu, {
          autoAlpha: 1,
          duration: 0.4,
          ease: "power3.out"
        });

        gsap.from(".mobile-menu li", {
          y: 20,
          opacity: 0,
          stagger: 0.08,
          duration: 0.5,
          ease: "power3.out"
        });

      } else {

        gsap.to(mobileMenu, {
          autoAlpha: 0,
          duration: 0.3,
          ease: "power2.out"
        });

      }
    });
  }



  // =========================
  // HOVER TEXT ANIMATION
  // =========================
  document.querySelectorAll(".gsap-text-hover").forEach((item) => {

    const text = item.querySelector(".text");
    const hover = item.querySelector(".text-hover");

    item.addEventListener("mouseenter", () => {

      gsap.to([text, hover], {
        y: "-100%",
        duration: 0.35,
        ease: "power2.out"
      });

    });

    item.addEventListener("mouseleave", () => {

      gsap.to([text, hover], {
        y: "0%",
        duration: 0.35,
        ease: "power2.out"
      });

    });

  });



  // =========================
  // HERO TITLE (SplitText)
  // =========================
  if (document.querySelector(".hero-title") && typeof SplitText !== "undefined") {

    const split = new SplitText(".hero-title", {
      type: "chars"
    });

    gsap.set(split.chars, {
      opacity: 0,
      x: 60,
      filter: "blur(10px)"
    });

    gsap.to(split.chars, {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power4.out",
      stagger: 0.03
    });

  }



  // =========================
  // BADGE ANIMATION
  // =========================
  gsap.from(".badge", {
    opacity: 0,
    y: 25,
    scale: 0.85,
    filter: "blur(10px)",
    duration: 1,
    ease: "power4.out"
  });



  // =========================
  // STATS SCROLL ANIMATION
  // =========================
gsap.from(".stats .stat-item", {
  opacity: 0,
  y: 60,
  scale: 0.92,
  filter: "blur(10px)",

  duration: 1.1,
  ease: "power4.out",
  stagger: {
    amount: 0.6,
    from: "start"
  },

  scrollTrigger: {
    trigger: ".stats",
    start: "top 80%", 
    end: "bottom 20%",
    toggleActions: "play none none none",
    once: true
  }
});


// about image
gsap.from(".about-image img", {
  scrollTrigger: {
    trigger: ".about-image",
    start: "top 70%",
    toggleActions: "play none none reverse"
  },

  opacity: 0,
  y: 90,
  scale: 1.06,
  filter: "blur(20px)",

  duration: 1.5,
  ease: "power4.out"
});


// method card
  gsap.from(".method-single-card", {
    opacity: 0,
    y: 60,
    scale: 0.95,
    filter: "blur(12px)",
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".methos-card-wrap",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });


  // method items

    gsap.set(".method-item", {
        opacity: 0,
        y: 40,
        filter: "blur(12px)"
    });

    gsap.to(".method-item", {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,

        scrollTrigger: {
            trigger: ".method-list",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });


});




// the courses section
document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);

    // =====================================
    // LEFT SIDE STICKY
    // =====================================
    ScrollTrigger.matchMedia({

        "(min-width: 1280px)": function () {

            ScrollTrigger.create({
                trigger: ".courses-left",
                start: "top top+=100",

                endTrigger: ".courses-right",
                end: "bottom bottom-=500",

                pin: true,
                pinSpacing: false,
                invalidateOnRefresh: true,
            });

        }

    });


    // =====================================
    // CLEAN STACK EFFECT
    // =====================================
    const cards = gsap.utils.toArray(".course-card");

    cards.forEach((card, index) => {

        // New cards always above old cards
        gsap.set(card, {
            zIndex: index + 1
        });

        gsap.to(card, {
            scale: 1 - (cards.length - index) * 0.01,

            ease: "none",

            scrollTrigger: {
                trigger: card,

                start: "top center",
                end: "top top+=120",

                scrub: true,
            }
        });

    });

});


// audio bars
  document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll(
      ".container img[src*='bar1.svg']"
    );

    // Set origin so bars grow from bottom
    gsap.set(bars, {
      transformOrigin: "bottom center",
    });

    function animateBars() {
      bars.forEach((bar, i) => {
        gsap.to(bar, {
          scaleY: () => gsap.utils.random(0.2, 1.8),
          duration: gsap.utils.random(0.4, 1.2),
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: i * 0.03, // slight wave movement across bars
        });
      });
    }

    animateBars();
  });


  // Magnet svg animation
  document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".values-section");
  const items = section.querySelectorAll(".group");

  /* ---------------------------
     1. MOTION BLUR REVEAL
  ----------------------------*/
  gsap.from(items, {
    scrollTrigger: {
      trigger: section,
      start: "top 75%",
    },
    opacity: 0,
    y: 40,
    filter: "blur(12px)",
    duration: 1,
    ease: "power3.out",
    stagger: 0.08
  });

  /* ---------------------------
     2. MAGNET EFFECT (SCOPED)
  ----------------------------*/
  items.forEach((item) => {
    const icon = item.querySelector("img");
    let bounds;

    item.addEventListener("mouseenter", () => {
      bounds = item.getBoundingClientRect();
    });

    item.addEventListener("mousemove", (e) => {
      const relX = e.clientX - bounds.left;
      const relY = e.clientY - bounds.top;

      const x = (relX - bounds.width / 2) * 0.2;
      const y = (relY - bounds.height / 2) * 0.2;

      gsap.to(icon, {
        x,
        y,
        scale: 1.1,
        duration: 0.4,
        ease: "power3.out"
      });
    });

    item.addEventListener("mouseleave", () => {
      gsap.to(icon, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)"
      });
    });
  });
});

// Splide JS Slider
document.addEventListener('DOMContentLoaded', function () {

  const splide = new Splide('#lesson-slider', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 4,
    gap: '10px',

    arrows: false,
    pagination: false,

    autoScroll: {
      speed: 0.8,
      pauseOnHover: true,
      pauseOnFocus: true,
      pauseOnTouch: true,
    },

    breakpoints: {
      1280: { perPage: 3 },
      1024: { perPage: 2 },
      640: { perPage: 1 }
    }
  });

  splide.mount(window.splide.Extensions);

  function updateUI() {
    const isMobile = window.innerWidth <= 640;

    // toggle arrows
    splide.options = {
      arrows: isMobile
    };

    // control autoplay
    const autoScroll = splide.Components.AutoScroll;

    if (!autoScroll) return;

    if (isMobile) {
      autoScroll.pause();   // stop autoplay on mobile
    } else {
      autoScroll.play();    // start autoplay on desktop
    }
  }

  updateUI();
  window.addEventListener('resize', updateUI);

});



// Audio play js
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".audio-item");

  items.forEach(item => {
    const audio = item.querySelector(".audio");
    const btn = item.querySelector(".play-btn");
    const progress = item.querySelector(".progress");
    const time = item.querySelector(".time");
    const durationEl = item.querySelector(".duration");

    const playIcon = btn.querySelector(".icon-play");
    const pauseIcon = btn.querySelector(".icon-pause");

    // Load duration
    audio.addEventListener("loadedmetadata", () => {
      durationEl.textContent = formatTime(audio.duration);
    });

    // Play / Pause toggle
    btn.addEventListener("click", () => {
      if (audio.paused) {
        pauseAll();

        audio.play();

        playIcon.classList.add("hidden");
        pauseIcon.classList.remove("hidden");

      } else {
        audio.pause();

        playIcon.classList.remove("hidden");
        pauseIcon.classList.add("hidden");
      }
    });

    // Progress update
    audio.addEventListener("timeupdate", () => {
      const percent = (audio.currentTime / audio.duration) * 100;
      progress.style.width = percent + "%";
      time.textContent = formatTime(audio.currentTime);
    });

    // Reset when ended
    audio.addEventListener("ended", () => {
      progress.style.width = "0%";

      playIcon.classList.remove("hidden");
      pauseIcon.classList.add("hidden");
    });
  });

  function pauseAll() {
    document.querySelectorAll(".audio").forEach(a => a.pause());

    document.querySelectorAll(".play-btn").forEach(btn => {
      btn.querySelector(".icon-play").classList.remove("hidden");
      btn.querySelector(".icon-pause").classList.add("hidden");
    });
  }

  function formatTime(sec) {
    if (!sec) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  }
});



// ring path animation
document.addEventListener("DOMContentLoaded", () => {
  const rings = gsap.utils.toArray(".ring");

  gsap.set(rings, {
    transformOrigin: "50% 50%",
    opacity: 0.2,
    filter: "drop-shadow(0px 0px 0px #CBA34E)"
  });

  const tl = gsap.timeline({
    repeat: -1,
    defaults: { ease: "sine.inOut" }
  });

  // Ring 1 pulse (inner)
  tl.to(rings[0], {
    opacity: 1,
    scale: 1.02,
    filter: "drop-shadow(0px 0px 12px #CBA34E)",
    duration: 0.4
  })
  .to(rings[0], {
    opacity: 0.2,
    scale: 1,
    filter: "drop-shadow(0px 0px 0px #CBA34E)",
    duration: 0.4
  })

  // Ring 2 pulse (middle)
  .to(rings[1], {
    opacity: 1,
    scale: 1.015,
    filter: "drop-shadow(0px 0px 16px #CBA34E)",
    duration: 0.4
  }, "-=0.25")
  .to(rings[1], {
    opacity: 0.2,
    scale: 1,
    filter: "drop-shadow(0px 0px 0px #CBA34E)",
    duration: 0.4
  })

  // Ring 3 pulse (OUTER ONLY GLOWS, NO SCALE)
  .to(rings[2], {
    opacity: 1,
    filter: "drop-shadow(0px 0px 20px #CBA34E)",
    duration: 0.4
  }, "-=0.25")
  .to(rings[2], {
    opacity: 0.2,
    filter: "drop-shadow(0px 0px 0px #CBA34E)",
    duration: 0.4
  });
});