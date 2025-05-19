// script.js

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate sections on scroll
gsap.utils.toArray('.section').forEach(section => {
  gsap.fromTo(section,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    }
  );
});

// Animate logo
gsap.from(".logo", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "bounce.out"
});

// Animate nav links
gsap.from("nav a", {
  opacity: 0,
  y: -20,
  duration: 0.8,
  stagger: 0.1,
  delay: 0.5,
  ease: "power2.out"
});

// Animate call-to-action button
gsap.from(".btn", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  delay: 1,
  ease: "back.out(1.7)"
});

gsap.utils.toArray('.section').forEach(section => {
  gsap.fromTo(section,
    { y: 50, opacity: 0 }, // Start: lower + invisible
    {
      y: 0,                 // End: in place
      opacity: 1,           // End: fully visible
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 85%",   // Animation begins when section is near viewport
        toggleActions: "play none none none"
      }
    }
  );
});
