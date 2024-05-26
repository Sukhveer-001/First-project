gsap.to("nav", {
  backgroundColor: "black",
  height: "100px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    start: "top -10",
    end: "top 11%",
    scrub: 1,
  },
});
gsap.to(".main", {
  backgroundColor: "black",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});
let crsr = document.querySelector(".cursor");
let blurcrsr = document.querySelector(".blurcrsr");
let h4 = document.querySelectorAll("nav h4");

document.addEventListener("mousemove", (dets) => {
  console.log(dets);
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blurcrsr.style.left = dets.x - 150 + "px";
  blurcrsr.style.top = dets.y - 150 + "px";
});
h4.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    crsr.style.scale = 2;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  element.addEventListener("mouseleave", () => {
    crsr.style.scale = 1;
    crsr.style.border = "none";
    crsr.style.backgroundColor = "#95c11e";
  });
});
gsap.from(".about-us img, .abtus", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".about-us",
    scroller: "body",
    start: "top 60%",
    end: "top 55%",
    scrub: 2,
  },
});
gsap.from(".cards", {
  scale: 0.8,
    opacity: 0,
  stagger:0.1,
  duration: 1,
  scrollTrigger: {
    trigger: ".cards",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});
gsap.from("#colon1", {
  x: -70,
  y: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 3,
  },
});
gsap.from("#colon2", {
  x: 70,
  y: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 3,
  },
});
gsap.from(".page4 h1", {
  y: 60,
  scrollTrigger: {
    trigger: ".page4 h1",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});