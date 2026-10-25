gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('a[href^="/#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.hash.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});
window.addEventListener("load", () => {
  const hash = window.location.hash;
  if (hash) {
    const targetElement = document.querySelector(hash);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }
});

function aboutAnimation() {
  gsap.from("#about p", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
    },
  });
}

function page5Animation() {
  gsap.from("#page5 h1", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    scrollTrigger: {
      trigger: "#page5",
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
    },
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const imageContainers = document.querySelectorAll(".image-container");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add active class when the element is in the viewport
          entry.target.classList.add("active");
        } else {
          // Remove active class when the element leaves the viewport
          entry.target.classList.remove("active");
        }
      });
    },
    {
      threshold: 0.5, // Trigger when 50% of the element is visible
    }
  );

  // Observe each image container
  imageContainers.forEach((container) => observer.observe(container));
});

function contactAnimation() {
  gsap.from("#contact", {
    opacity: 0,
    y: 100,
    duration: 1.5,
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
    },
  });

  gsap.from("#contact h1", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
    },
  });

  gsap.from("#contact form", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
    },
  });

  gsap.from("#contact img", {
    opacity: 0,
    scale: 1.1,
    duration: 1.5,
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
    },
  });
}

window.addEventListener("load", function () {
  var loader = document.querySelector("#loader");

  if (loader) {
    var t1 = gsap.timeline({
      onComplete: function () {
        loader.style.display = "none";
        cursorEffect();
        document.querySelector("#page1").scrollIntoView({ behavior: "smooth" });
        aboutAnimation();
        page5Animation();
        musicAnimation();
        contactAnimation();
      },
    });

    t1.from("#loader h3", {
      x: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    });
    t1.to("#loader h3", {
      opacity: 0,
      x: -40,
      duration: 1,
      stagger: 0.1,
    });

    t1.to("#loader", {
      opacity: 0,
    });
  } else {
    cursorEffect();
    document.querySelector("#page1").scrollIntoView({ behavior: "smooth" });

    aboutAnimation();
    page5Animation();
    musicAnimation();
    contactAnimation();
  }
});

function page2Animation() {
  gsap.from("#page2-top h4, #page2-top h2", {
    y: 50,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      start: "top 80%",
      end: "top 60%",
      scrub: 2,
    },
  });
}
page2Animation();

function toggleMenu() {
  const sideMenu = document.getElementById("sideMenu");
  const hamburgerIcon = document.getElementById("hamburgerIcon");

  if (sideMenu.style.right === "0%") {
    sideMenu.style.right = "-60%"; // Close menu
    hamburgerIcon.style.display = "block"; // Show hamburger icon
  } else {
    sideMenu.style.right = "0%"; // Open menu
    hamburgerIcon.style.display = "none"; // Hide hamburger icon
  }
}

//page 3 elements (Discover) box with img/video effect

//Testimonial
var slideIndex = 1;
showDivs(slideIndex);

// Automatic slideshow function
function autoSlide() {
  plusDivs(1);
  setTimeout(autoSlide, 2500); // Set delay to 2500ms
}

// Manual controls for previous/next
function plusDivs(n) {
  showDivs((slideIndex += n));
}

// Directly navigate to a specific slide
function currentDiv(n) {
  showDivs((slideIndex = n));
}

// Function to display the correct slide with fade-in animation
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("testimonialSlides");
  var dots = document.getElementsByClassName("demo");

  // Loop back to first slide if it exceeds the number of slides
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }

  // Hide all slides
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    x[i].style.opacity = "0"; // Ensure opacity is reset
  }

  // Remove active class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }

  // Show the current slide with fade-in effect and set the corresponding dot as active
  x[slideIndex - 1].style.display = "block";
  x[slideIndex - 1].style.animation = "fadeIn 1s ease forwards"; // Trigger fade-in
  dots[slideIndex - 1].className += "w3-white";
}

// Start the automatic slideshow when the page loads
autoSlide();

//MEET THE TEAM LOOP

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".team-image-carousel");

  // Reset animation when it completes to create seamless loop
  carousel.addEventListener("animationend", () => {
    carousel.style.animation = "none";
    carousel.offsetHeight; // Trigger reflow
    carousel.style.animation = null;
  });

  // Optional: Pause animation on hover
  carousel.addEventListener("mouseenter", () => {
    carousel.style.animationPlayState = "paused";
  });

  carousel.addEventListener("mouseleave", () => {
    carousel.style.animationPlayState = "running";
  });

  // Optional: Touch events for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  carousel.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
      carousel.style.animationPlayState = "paused";
    },
    false
  );

  carousel.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      carousel.style.animationPlayState = "running";

      // Optional: Manual slide on swipe
      if (touchStartX - touchEndX > 50) {
        // Swipe left
        carousel.style.transform = `translateX(-${touchStartX - touchEndX}px)`;
      } else if (touchEndX - touchStartX > 50) {
        // Swipe right
        carousel.style.transform = `translateX(${touchEndX - touchStartX}px)`;
      }
    },
    false
  );
});

//Contact Form
document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS
  emailjs.init("gs6KATm3RGOZNlLGO");

  const form = document.getElementById("contact-form");

  // Toast Notification Function
  function showToast(message, type = "success") {
    // Get or create toast container
    const toast = document.getElementById("toast") || createToastElement();

    // Update toast content
    toast.querySelector(".toast-message").textContent = message;
    toast.querySelector(".toast-icon").textContent =
      type === "success" ? "✓" : "✕";
    toast.querySelector(".toast-icon").style.backgroundColor =
      type === "success" ? "#4CAF50" : "#f44336";

    // Show toast
    toast.classList.add("show");

    // Remove toast after animation
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000); // Matches the CSS progress animation duration
  }

  // Form validation
  function validatePhone(phone) {
    const phoneRegex =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return phoneRegex.test(phone);
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Real-time validation
  const phoneInput = document.getElementById("phone");
  phoneInput.addEventListener("input", function () {
    if (!validatePhone(this.value)) {
      this.setCustomValidity("Please enter a valid phone number");
    } else {
      this.setCustomValidity("");
    }
  });

  const emailInput = document.getElementById("email");
  emailInput.addEventListener("input", function () {
    if (!validateEmail(this.value)) {
      this.setCustomValidity("Please enter a valid email address");
    } else {
      this.setCustomValidity("");
    }
  });

  //validation to ensure the "To" date isn't before the "From" date
  const fromDate = document.getElementById("travel-dates-from");
  const toDate = document.getElementById("travel-dates-to");

  // Validate "From" date to ensure it is after today
  fromDate.addEventListener("change", function () {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to midnight for comparison
    if (new Date(this.value) <= today) {
      this.setCustomValidity("Departure date must be after today");
    } else {
      this.setCustomValidity("");
    }
    this.reportValidity();
  });

  // Validate "To" date to ensure it is after the "From" date
  toDate.addEventListener("change", function () {
    if (fromDate.value && this.value) {
      if (new Date(this.value) <= new Date(fromDate.value)) {
        this.setCustomValidity("Return date must be after departure date");
      } else {
        this.setCustomValidity("");
      }
    }
    this.reportValidity();
  });

  fromDate.addEventListener("change", function () {
    if (toDate.value && this.value) {
      if (new Date(toDate.value) < new Date(this.value)) {
        toDate.setCustomValidity("Return date must be after departure date");
      } else {
        toDate.setCustomValidity("");
      }
    }
  });

  // Form submission handler
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.classList.add("loading");
    submitButton.textContent = "Sending...";

    // Prepare form data for EmailJS
    const templateParams = {
      name: form.querySelector('[name="name"]').value,
      email: form.querySelector('[name="email"]').value,
      phone: form.querySelector('[name="phone"]').value,
      country: form.querySelector('[name="country"]').value,
      travel_dates_from: form.querySelector('[name="travel_dates_from"]').value,
      travel_dates_to: form.querySelector('[name="travel_dates_to"]').value,
      number_of_travelers: form.querySelector('[name="number_of_travelers"]')
        .value,
      interests: Array.from(form.querySelectorAll('[name="interests"]:checked'))
        .map((checkbox) => checkbox.value)
        .join(", "),
      preferred_destinations: form.querySelector(
        '[name="preferred_destinations"]'
      ).value,
      budget_range: form.querySelector('[name="budget_range"]').value,
      special_requirements: form.querySelector('[name="special_requirements"]')
        .value,
      how_did_you_hear: form.querySelector('[name="how_did_you_hear"]').value,
      message: form.querySelector('[name="message"]').value,
    };

    // Send email using EmailJS
    emailjs
      .send("service_05g8qkg", "template_qfaoc66", templateParams)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        submitButton.classList.remove("loading");
        submitButton.textContent = "Enquire Now";
        showToast(
          "Thank you for your message. We'll get back to you soon!",
          "success"
        );
        this.reset();
      })
      .catch((error) => {
        console.log("FAILED...", error);
        submitButton.classList.remove("loading");
        submitButton.textContent = "Enquire Now";
        showToast("Failed to send message. Please try again.", "error");
      });
  });
});

// Add loading spinner styles if not already in your CSS
const styleSheet = document.createElement("style");
styleSheet.textContent = `
    button.loading {
        position: relative;
        color: transparent;
    }
    
    button.loading::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 20px;
        margin: -10px 0 0 -10px;
        border: 2px solid #fff;
        border-top-color: transparent;
        border-radius: 50%;
        animation: button-loading-spinner 1s linear infinite;
    }
    
    @keyframes button-loading-spinner {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;
document.head.appendChild(styleSheet);
