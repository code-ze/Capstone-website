gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.section').forEach(section => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    end: "+=400",
    pin: true,
    scrub:true
  });
});


