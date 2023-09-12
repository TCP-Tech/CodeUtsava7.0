"use strict";
let introContainer1 = $(".intro-container1");
let skyContainer = $(".sky-container");
let roo = $("#root");
let loaderimg = $(".preloader-img");
let bbb = $(".shift-camera-button");

const container = document.querySelector(".pre-container");
const lineOne = document.querySelector(".l-1");
const lineTwo = document.querySelector(".l-2");
const lineThree = document.querySelector(".l-3");
let isOpen = false;
let a1 = {},
  a2 = {},
  a3 = {};

function initial() {
  a1 = gsap.timeline().to(lineOne, {
    rotate: 80,
    x: -350,
    y: -50,
    background: "yellow",
  });

  a2 = gsap.timeline().to(lineThree, {
    rotate: 100,
    background: "white",
    x: 350,
    y: -70,
  });
}

initial();

$(".shift-camera-button").click(function () {
  a1 = gsap
    .timeline()
    .to(lineOne, {
      rotate: 130,
      x: -5,
      y: -50,
    })
    .to(lineOne, {
      rotate: 130,
      x: -5,
      y: -50,
    })
    .to(lineOne, {
      rotate: 130,
      x: -15,
      y: -50,
    })
    .to(
      lineOne,
      {
        rotate: 100,
        x: -7,
        y: 10,
      },
      "-=0.25"
    )
    .to(lineOne, {
      rotate: 110,
      x: -25,
      y: -50,
    })
    .to(lineOne, {
      rotate: 130,
      x: 0,
    })
    .to(lineOne, {
      rotate: 135,
      y: -50,
      x: 0,
      delay: 0.4,
    });

  a2 = gsap
    .timeline()
    .to(lineThree, {
      rotate: 50,
      x: 20,
      y: -70,
    })
    .to(
      lineThree,
      {
        rotate: 80,
        x: 0,
        y: -70,
        duration: 0.25,
      },
      "-=0.25"
    )
    .to(lineThree, {
      rotate: 50,
      x: 17,
      y: -70,
    })
    .to(lineThree, {
      rotate: 50,
      x: -20,
      y: -70,
    })
    .to(lineThree, {
      rotate: 420,
      y: -9,
      x: 5,
    })
    .to(lineThree, {
      rotate: 45,
      y: -6,
      x: 0,
      delay: 0.4,
    });
  a3 = gsap
    .timeline()
    .to(loaderimg, {
      opacity: 0,
    })
    .to(bbb,{
      opacity: 0,
    })
    .to(skyContainer,{
      display: "none",
      delay: 2,
    })
});

$(".shift-camera-button").click(function () {
  let introTimeline = new TimelineMax();
  introTimeline.add([
    TweenLite.fromTo(
      introContainer1,
      5,
      { opacity: 1 },
      { opacity: 0, ease: Power3.easeIn }
    ),
  ]);

  introTimeline.add([
    TweenLite.to(root, 0.1, {
      opacity: 1,
      display: "block",
      ease: Power3.easeInOut,
    }),
  ]);
});
