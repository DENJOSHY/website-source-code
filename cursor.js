gsap.registerPlugin(ScrollTrigger);

function cursorEffect() {
  var pag1Content = document.querySelector("#page1-content");
  var cursor = document.querySelector("#cursor");
  var hamburgerIcon = document.querySelector("#hamburgerIcon");

  if (!pag1Content || !cursor ||!hamburgerIcon) {
    console.error(
      "Cursor effect cannot be initialized. Ensure #page1-content and #cursor exist. #hamburgerIcon exist."
    );
    return;
  }

  pag1Content.addEventListener("mousemove", function (event) {
    gsap.to(cursor, {
      x: event.clientX,
      y: event.clientY,
      duration: 0.3,
    });
  });

  pag1Content.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
    });
  });

  pag1Content.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
      duration: 0.3,
    });
  });

  pag1Content.addEventListener("click", function (event) {
    // Check if the click target is not a nav button
    if (!event.target.closest("nav") && !event.target.closest("#hamburgerIcon")) {
      event.preventDefault(); // Prevent the default link behavior
      window.open("https://youtu.be/Obn7qsEsRak", "_blank"); // Open the link in a new tab
    }
  });
}