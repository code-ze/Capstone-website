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

scrollContainers.forEach((scrollContainer) => {
  const textContent = scrollContainer.querySelector(".text-content");

  if (textContent) {
    textContent.addEventListener("scroll", () => {
      if (
        textContent.scrollTop ===
        textContent.scrollHeight - textContent.offsetHeight
      ) {
        scrollContainer.classList.add("hide-gradient");
      } else {
        scrollContainer.classList.remove("hide-gradient");
      }
    });
  }
});
