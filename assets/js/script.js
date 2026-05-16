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
        stagger: 0.2,

        scrollTrigger: {
            trigger: ".method-list",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });


});




// 
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