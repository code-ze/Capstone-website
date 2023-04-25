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

document.addEventListener("DOMContentLoaded", function () {
  const scrollTextElements = document.querySelectorAll(
    ".scroll-T-bg, .scroll-T"
  ); // Add '.scroll-T' to the query selector

  scrollTextElements.forEach(function (scrollText) {
    scrollText.addEventListener("scroll", function () {
      const maxScroll = scrollText.scrollHeight - scrollText.clientHeight;
      const scrollThreshold = maxScroll - 5; // Add a small threshold to account for minor differences in scroll height

      if (scrollText.scrollTop >= scrollThreshold) {
        scrollText.classList.add("no-gradient");
      } else {
        scrollText.classList.remove("no-gradient");
      }
    });
  });
});

const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", documentHeight);
documentHeight();

const videoBackground = document.getElementById("video-background");
const content = document.getElementById("content");

// Choose how many seconds before the end of the video you want the animation to start
const secondsBeforeEnd = 5;

videoBackground.addEventListener("timeupdate", () => {
  const targetTime = videoBackground.duration - secondsBeforeEnd;

  if (videoBackground.currentTime >= targetTime) {
    content.style.display = "flex";
    content.classList.add("fade-in");
    // Remove the event listener to prevent triggering the animation again
    videoBackground.removeEventListener("timeupdate", arguments.callee);
  }
});

// when the user finishes scrolling on the text area they can scroll uninstructed on the rest of the page

// parllax video

document.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  document.documentElement.style.setProperty("--scroll", scrollTop);
});

// js for the main page animation and things

$(document).ready(function () {
  setTimeout(function () {
    $("#P-main").removeClass("P-is-loading");
  }, 100);
});
