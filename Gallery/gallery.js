gsap.registerPlugin(ScrollTrigger);

// Ensure that `h1` has a class for targeting
const h1 = document.querySelector("h1");

// ScrollTrigger to change `h1` color based on the position of `.img`
ScrollTrigger.create({
  trigger: '.img', // Each image element
  start: "top center", // When the top of the image reaches the center of the viewport
  end: "bottom center", // When the bottom of the image reaches the center of the viewport
  onEnter: () => gsap.to(h1, { color: "white", duration: 0.3 }), // Change color to white on enter
  onLeave: () => gsap.to(h1, { color: "black", duration: 0.3 }), // Change color back to black on leave
  onEnterBack: () => gsap.to(h1, { color: "white", duration: 0.3 }), // Change color to white when re-entering from above
  onLeaveBack: () => gsap.to(h1, { color: "black", duration: 0.3 }) // Change color back to black when leaving from above
});

// GSAP timeline for image animations
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.gallery',
    scrub: true,
    start: "top top", // When the top of the gallery is at the top of the viewport
    end: "bottom bottom" // When the bottom of the gallery is at the bottom of the viewport
  }
})
.to('.img', {
  stagger: 0.2,
  y: -700,
  scrub: true
});
