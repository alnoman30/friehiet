gsap.registerPlugin(ScrollTrigger, SplitText);

// ======================================================
// LENIS SMOOTH SCROLL
// ======================================================
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


// ======================================================
// DOM READY
// ======================================================
document.addEventListener("DOMContentLoaded", () => {

  // ======================================================
  // MOBILE MENU
  // ======================================================
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuToggle && mobileMenu) {

    let open = false;

    gsap.set(mobileMenu, {
      autoAlpha: 0
    });

    menuToggle.addEventListener("click", () => {

      open = !open;

      menuToggle.classList.toggle("active");

      if (open) {

        gsap.to(mobileMenu, {
          autoAlpha: 1,
          duration: 0.4,
          ease: "power3.out"
        });

        if (document.querySelector(".mobile-menu li")) {
          gsap.from(".mobile-menu li", {
            y: 20,
            opacity: 0,
            stagger: 0.08,
            duration: 0.5,
            ease: "power3.out"
          });
        }

      } else {

        gsap.to(mobileMenu, {
          autoAlpha: 0,
          duration: 0.3,
          ease: "power2.out"
        });

      }

    });

  }


  // ======================================================
  // HOVER TEXT ANIMATION
  // ======================================================
  document.querySelectorAll(".gsap-text-hover").forEach((item) => {

    const text = item.querySelector(".text");
    const hover = item.querySelector(".text-hover");

    if (!text || !hover) return;

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


  // ======================================================
  // HERO TITLE
  // ======================================================
  if (
    document.querySelector(".hero-title") &&
    typeof SplitText !== "undefined"
  ) {

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


  // ======================================================
  // BADGE ANIMATION
  // ======================================================
  if (document.querySelector(".badge")) {

    gsap.from(".badge", {
      opacity: 0,
      y: 25,
      scale: 0.85,
      filter: "blur(10px)",
      duration: 1,
      ease: "power4.out"
    });

  }

  // ======================================================
  // STATS ANIMATION
  // ======================================================
  if (document.querySelector(".stats .stat-item")) {

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
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        once: true
      }
    });

  }


  // ======================================================
  // ABOUT IMAGE
  // ======================================================
  if (document.querySelector(".about-image img")) {

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

  }


  // ======================================================
  // METHOD CARD
  // ======================================================
  if (
    document.querySelector(".method-single-card") &&
    document.querySelector(".method-card-wrap")
  ) {

    gsap.from(".method-single-card", {
      opacity: 0,
      y: 60,
      scale: 0.95,
      filter: "blur(12px)",
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,

      scrollTrigger: {
        trigger: ".method-card-wrap",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

  }


  // ======================================================
  // METHOD ITEMS
  // ======================================================
  if (document.querySelector(".method-item")) {

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

  }


  // ======================================================
  // STRUCTURE CARD
  // ======================================================
  if (
    document.querySelector(".structure-single-card") &&
    document.querySelector(".structure-card-wrap")
  ) {

    gsap.from(".structure-single-card", {
      opacity: 0,
      y: 60,
      scale: 0.95,
      filter: "blur(12px)",
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,

      scrollTrigger: {
        trigger: ".structure-card-wrap",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

  }


  // ======================================================
  // MAGNET ITEMS
  // ======================================================
  const magnetItems = document.querySelectorAll(".magnet-item");

  magnetItems.forEach((item) => {

    const icon = item.querySelector("img");

    if (!icon) return;

    let bounds;

    const onMove = (e) => {

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

    };

    const onEnter = () => {
      bounds = item.getBoundingClientRect();
      item.addEventListener("mousemove", onMove);
    };

    const onLeave = () => {

      item.removeEventListener("mousemove", onMove);

      gsap.to(icon, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)"
      });

    };

    item.addEventListener("mouseenter", onEnter);
    item.addEventListener("mouseleave", onLeave);

  });


  // ======================================================
  // COURSES STICKY
  // ======================================================
  if (
    document.querySelector(".courses-left") &&
    document.querySelector(".courses-right")
  ) {

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

  }





  // ======================================================
  // AUDIO BARS
  // ======================================================
  const bars = document.querySelectorAll(
    ".container img[src*='bar1.svg']"
  );

  if (bars.length) {

    gsap.set(bars, {
      transformOrigin: "bottom center",
    });

    bars.forEach((bar, i) => {

      gsap.to(bar, {
        scaleY: () => gsap.utils.random(0.2, 1.8),
        duration: gsap.utils.random(0.4, 1.2),
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: i * 0.03,
      });

    });

  }


  // ======================================================
  // VALUES SECTION
  // ======================================================
  const section = document.querySelector(".values-section");

  if (section) {

    const items = section.querySelectorAll(".group");

    if (items.length) {

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

    }

    items.forEach((item) => {

      const icon = item.querySelector("img");

      if (!icon) return;

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

  }


  // ======================================================
  // LESSON SLIDER
  // ======================================================
const splide = new Splide("#lesson-slider", {
  type: "loop",
  drag: "free",

  focus: "left",
  trimSpace: false,

  perPage: 4.5,
  gap: "10px",

  arrows: false,
  pagination: false,

  breakpoints: {
    1280: {
      perPage: 3,
    },

    1024: {
      perPage: 2,
    },

    640: {
      perPage: 1,
      arrows: true,
      gap: "0px",
    },
  },
});

splide.mount();


// VIDEO POPUP
const popup = document.getElementById("video-popup");
const iframe = document.getElementById("popup-video");
const closeBtn = document.getElementById("close-video");

document.querySelectorAll(".video-trigger").forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();

    const videoUrl = this.getAttribute("data-video");

    iframe.src = videoUrl;

    popup.classList.remove("hidden");
    popup.classList.add("flex");
  });
});

// CLOSE POPUP
closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
  popup.classList.remove("flex");

  iframe.src = "";
});

// CLOSE WHEN CLICK OUTSIDE
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.add("hidden");
    popup.classList.remove("flex");

    iframe.src = "";
  }
});

  // ======================================================
  // RING ANIMATION
  // ======================================================
  const rings = gsap.utils.toArray(".ring");

  if (rings.length >= 3) {

    gsap.set(rings, {
      transformOrigin: "50% 50%",
      opacity: 0.2,
      filter: "drop-shadow(0px 0px 0px #CBA34E)"
    });

    const tl = gsap.timeline({
      repeat: -1,
      defaults: {
        ease: "sine.inOut"
      }
    });

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

  }


  // ======================================================
  // TESTIMONIAL SLIDER
  // ======================================================
 if (
  typeof Splide !== "undefined" &&
  document.getElementById("reviews-slider")
) {

  const reviewSplide = new Splide("#reviews-slider", {

    type: "loop",
    perPage: 2,
    perMove: 1,
    gap: "24px",

    arrows: false,
    pagination: false,

    breakpoints: {
      1024: { perPage: 2 },
      768: { perPage: 1 },
    },

  });

  reviewSplide.mount();

  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => reviewSplide.go("<"));
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => reviewSplide.go(">"));
  }

}


  // ======================================================
  // AUDIO PLAYER
  // ======================================================
  const audioItems = document.querySelectorAll(".audio-item");

  if (audioItems.length) {

    audioItems.forEach((item) => {

      const audio = item.querySelector(".audio");
      const btn = item.querySelector(".play-btn");
      const progress = item.querySelector(".progress");
      const time = item.querySelector(".time");
      const durationEl = item.querySelector(".duration");

      if (!audio || !btn) return;

      const playIcon = btn.querySelector(".icon-play");
      const pauseIcon = btn.querySelector(".icon-pause");

      audio.addEventListener("loadedmetadata", () => {

        if (durationEl) {
          durationEl.textContent = formatTime(audio.duration);
        }

      });

      btn.addEventListener("click", () => {

        if (audio.paused) {

          pauseAll();

          audio.play();

          playIcon?.classList.add("hidden");
          pauseIcon?.classList.remove("hidden");

        } else {

          audio.pause();

          playIcon?.classList.remove("hidden");
          pauseIcon?.classList.add("hidden");

        }

      });

      audio.addEventListener("timeupdate", () => {

        if (!progress || !time) return;

        const percent = (audio.currentTime / audio.duration) * 100;

        progress.style.width = percent + "%";

        time.textContent = formatTime(audio.currentTime);

      });

      audio.addEventListener("ended", () => {

        if (progress) {
          progress.style.width = "0%";
        }

        playIcon?.classList.remove("hidden");
        pauseIcon?.classList.add("hidden");

      });

    });

  }


  // ======================================================
  // HELPERS
  // ======================================================
  function pauseAll() {

    document.querySelectorAll(".audio").forEach((a) => a.pause());

    document.querySelectorAll(".play-btn").forEach((btn) => {

      btn.querySelector(".icon-play")?.classList.remove("hidden");

      btn.querySelector(".icon-pause")?.classList.add("hidden");

    });

  }

  function formatTime(sec) {

    if (!sec) return "0:00";

    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);

    return `${m}:${s.toString().padStart(2, "0")}`;

  }

});