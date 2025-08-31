 const scroll = new LocomotiveScroll({
   el: document.querySelector("#main"),
   smooth: true,
});

function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
    })
}
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

const buttons =document.querySelectorAll(".btn");

buttons.forEach((btn) =>{
    btn.addEventListener('mousemove',(e) =>{
let x= e.pageX -btn.offsetLeft;
let y= e.pageY -btn.offsetTop;

btn.style.setProperty('--x',x+'px');
btn.style.setProperty('--y',y+'px');
    })
})