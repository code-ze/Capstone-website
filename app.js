gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".section").forEach((section) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top top",
    end: "+=400",
    pin: true,
    scrub: true,
  });
});

const scrollContainers = document.querySelectorAll(".scroll-T, .scroll-T-bg");

var scrollT = document.querySelector(".scroll-T");
scrollT.addEventListener("scroll", function () {
  if (scrollT.scrollHeight - scrollT.scrollTop === scrollT.clientHeight) {
    scrollT.classList.add("mask-removed");
  } else {
    scrollT.classList.remove("mask-removed");
  }
});
