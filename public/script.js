console.log("test");
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "0%",
    end: "70%",
    scrub: 1
  }
});
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "0%",
    end: "70%",
    scrub: 1
  }
});
let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "0%",
    end: "40%",
    scrub: 1
  }
});
let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "0%",
    end: "200%",
    scrub: 1,
    pin: true,
    pinSpacing: false
  }
});

tl.fromTo(".sliding-text", { y: 0 }, { y: -400 });
tl2.fromTo(
  ".logo",
  { scale: 6 },
  { scale: 1, top: "2rem", left: "3rem", x: "50%", y: "50% " }
);
tl3.fromTo(
  ".square",
  { left: "70%" },
  { left: "150%", top: "40%", copacity: 0, rotation: 90 }
);
// gsap.to(".logo", { x: 2000 });
