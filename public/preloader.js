"use strict";
/* globals THREE, $, TweenLite, Power3, TimelineMax  */

    // Draw canvas here...
    const c1 = "#7f00a6";
    const c2 = "#b200ee";
    var canvas = document.querySelector('canvas');
    var c = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var fact = 2;
    if(window.innerWidth <= window.innerHeight) fact = 4;
    console.log(window.innerWidth,window.innerHeight);
    
    var particleCount = 1000;
    var mouse = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2 
    };
    
    window.addEventListener("mousemove", function(event) {
    mouse.x = event.clientX - canvas.width / 2;
    mouse.y = event.clientY - canvas.height / 2;
    });
    
    window.addEventListener("resize", function() {
    canvas.width = window.innerWidth;	
    canvas.height = window.innerHeight;
    
    lightParticles = [];
    initializeParticles();
    });
    
    
    function LightParticle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    
    this.update = function() {
    
      this.draw();
    };
    
    this.draw = function() {
      c.save();
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);	
      c.shadowColor = this.color;
      c.shadowBlur = 15;
      c.shadowOffsetX = 0;
      c.shadowOffsetY = 0;
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
      c.restore();
    };
    }
    
    var lightParticles = [];
    
    var timer = 0;
    var opacity = 1;
    var speed = 0.0005;
    var colors = [
    c1,
    c2,
    "#fbfbdd",
    "#333333",
    "#F2E8C9"
    ];
    
    var initializeParticles;
    
    (initializeParticles = function() {
    for (var i = 0; i < particleCount; i++) {
    
      var randomColorIndex = Math.floor(Math.random() * 6);
      var randomRadius = Math.random() * 2.01;
    
      // Ensure particles are spawned past screen width and height so
      // there will be no missing stars when rotating canvas
      var x = (Math.random() * (canvas.width + 200)) - (canvas.width + 200) / 2;
      var y = (Math.random() * (canvas.width + 200)) - (canvas.width + 200) / 2;
      lightParticles.push(new LightParticle(x, y, randomRadius, colors[randomColorIndex]));
    }
    })();
    
    function animate() {
    window.requestAnimationFrame(animate);
    
    c.save();
    if (isMouseDown === true) {
    
      // Ease into the new opacity
      var desiredOpacity = 0.01;
      opacity += (desiredOpacity - opacity) * 0.03;
      c.fillStyle = "rgba(0, 0, 0,"+ opacity +")";
    
      // Ease into the new speed
      var desiredSpeed = 0.012;
      speed += (desiredSpeed - speed) * 0.01;
      timer += speed;
    
    } else {
    
      // Ease back to the original opacity
      var originalOpacity = 1;
      opacity += (originalOpacity - opacity) * 0.01;
      c.fillStyle = "rgba(0, 0, 0, " + opacity + ")";
    
      // Ease back to the original speed
      var originalSpeed = 0.001;
      speed += (originalSpeed - speed) * 0.01;
      timer += speed;
    
    }
    
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.translate(canvas.width/2, canvas.height/2);
    c.rotate(timer);
    
    for (var i = 0; i < lightParticles.length; i++) {
      lightParticles[i].update();
    }
    
    c.restore();
    
    
    }
    
    var isMouseDown = false;
    
    window.addEventListener("mousedown", function() {
    isMouseDown = true;	
    });

    setInterval(() => {
      isMouseDown = !isMouseDown; 
    }, 1000);

    
    window.addEventListener("mouseup", function() {
    isMouseDown = false;	
    });
    
    animate();

// let introContainer = $(".intro-container");
let introContainer1 = $(".intro-container1");
let skyContainer = $(".sky-container");
let roo = $("#root");
let canv = document.getElementsByTagName("canvas");
let hhh = document.getElementsByTagName("body");

$(".shift-camera-button").click(function () {
  let introTimeline = new TimelineMax();
  introTimeline.add([
    TweenLite.fromTo(
      introContainer1,
      0.5,
      { opacity: 1 },
      { opacity: 0, ease: Power3.easeIn }
    ),
    // TweenLite.fromTo(
    //   introContainer1,
    //   0.5,
    //   { opacity: 1 },
    //   { opacity: 0, ease: Power3.easeIn }
    // ),
    // TweenLite.to(camera.rotation, 3, {
    //   x: Math.PI / 2,
    //   ease: Power3.easeInOut,
    // }),
    // TweenLite.to(camera.position, 2.5, { z: 20, ease: Power3.easeInOut }),
    // TweenLite.to(camera.position, 3, { y: 120, ease: Power3.easeInOut }),
    // TweenLite.to(plane.scale, 3, { x: 2, y: 0, ease: Power3.easeInOut }),
  ]);

  introTimeline.add([
    TweenLite.to(skyContainer, 0.1, {
      opacity: 1,
      display: "block",
      position: 'sticky',
      ease: Power3.easeInOut,
    }),
    TweenLite.to(root, 0.1, {
      opacity: 1,
      display: "block", 
      ease: Power3.easeInOut,
    }),
    TweenLite.to(canv, 0.1, {
        display: 'none',
        ease: Power3.easeInOut,
      }),
      TweenLite.to(hhh, 0.1, {
        'overflow-y': 'visible',
        ease: Power3.easeInOut,
      }),
  ]);
});
