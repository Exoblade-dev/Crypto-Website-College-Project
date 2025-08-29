const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

//hero page animation
function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })

    .to(".boundingelem", {
      y: 0,
      duration: 2,
      ease: Expo.easeInOut,
      delay: -1,
      stagger: 0.2,
    })
    .from("#hero-content-right", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
    
}


//for mouse follwer
var timeout;

function circleChaptaKaro() {
  //define default scale value
  var xscale = 1;
  var yscale = 1;

  var xperv = 0;
  var yperv;

  window.addEventListener("mousemove", function (dets) {
    this.clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xperv);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yperv);

    xperv = dets.clientX;
    yperv = dets.clientY;

    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(function () {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;
    }, 100);
  });
}

function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
  });
}
circleChaptaKaro();
circleMouseFollower();
firstPageAnim();

//paragraph on scroll upper se niche

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // observer.unobserve(entry.target); // optional: only run once
    }
  });
});

document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

const nav = document.getElementById("mainNav");

  window.addEventListener("scroll", () => {
    if (window.scrollY <= 50) {
      nav.classList.add("fixed");
    } else {
      nav.classList.remove("fixed");
    }
  });
