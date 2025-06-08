function loadingAnimation() {
  let tl = gsap.timeline();

  tl.from(".line h1", {
    y: 150,
    stagger: 0.35,
    duration: 0.6,
    delay: 0.5,
  });

  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      let h5timer = document.querySelector("#line1-part1 h5");
      let grow = 0;
      let i1 = setInterval(() => {
        if (grow < 101) {
          h5timer.innerHTML = grow++;
        } else {
          clearInterval(i1);
        }
      }, 35);
    },
  });

  tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    // delay: 3,
  });

  tl.from("#page1", {
    backgroundColor: "green",
    y: 1600,
    duration: 1.5,
    delay: 0.2,
    ease: "power4",
  });

  tl.to("#loader", {
    display: "none",
  });

  tl.from('#nav',{
    opacity:0,
  })
  tl.from(".hero h1, #hero3 div", {
    y: 120,
    stagger: 0.2,
  });
}

function cursorAnimation() {
  document.addEventListener("mousemove", (dets) => {
    gsap.to("#crsr", {
      left: dets.x,
      top: dets.y,
    });
  });
  Shery.makeMagnet("#nav-part2 h4", {});
}
loadingAnimation();
cursorAnimation();
