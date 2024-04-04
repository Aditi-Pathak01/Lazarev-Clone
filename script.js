function navAnimation() {
  let nav = document.querySelector("nav");
  nav.addEventListener("mouseenter", () => {
    let tl = gsap.timeline();

    tl.to("#nav-bottom", {
      height: "18vh",
      duration: 0.5,
    });

    tl.to("#nav-2nd-sec h5", {
      display: "block",
      duration: 0.01,
    });

    tl.to("#nav-2nd-sec h5 span", {
      y: 0,
      stagger: 0.03,
    });
  });
  nav.addEventListener("mouseleave", () => {
    let tl = gsap.timeline();
    tl.to("#nav-2nd-sec h5 span", {
      y: 25,
      duration: 0.01
    });
    tl.to("#nav-2nd-sec h5", {
      display: "none",
      duration: 0.01,
    });
    tl.to("#nav-bottom", {
      height: "0",
      duration: 0.2,
    });
  });
}
navAnimation();
