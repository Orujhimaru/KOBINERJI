// gsap.to(".box", {
//   duration: 3,
//   x: 500,
// });

// var lastScrollTop = document.pageYOffset;

// // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
// element.addEventListener(
//   "scroll",
//   function () {
//     // or window.addEventListener("scroll"....
//     var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
//     if (st > lastScrollTop) {
//       // downscroll code
//     } else if (st < lastScrollTop) {
//       // upscroll code
//     } // else was horizontal scroll
//     lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
//     console.log(lastScrollTop);
//   },
//   false
// );
// WebGLSampler.registerPlugin(scrollTrigger);

// ScrollTrigger.defaults({
//   toggleActions: "restart pause resume pause",
//   scroller: ".container"
// });

// gsap.to(

// )
var photoLength = document.getElementById("main-photo").offsetHeight;

function scrollPos() {
  var div = document.getElementById("container").scrollTop;
  // console.log(div);
  // console.log(photoLength);
}

gsap.registerPlugin(ScrollTrigger);

gsap.from(".container", {
  duration: 2,
  ease: "power3.out",
  y: 5000,
});

gsap.to(".absolute-text-1", {
  scrollTrigger: {
    scroller: ".container",
    trigger: ".absolute-text-1",
    toggleActions: "play none restart none",
  },
  duration: 2,
  opacity: 1,
});

gsap.to(".absolute-text-2", {
  scrollTrigger: {
    scroller: ".container",
    trigger: ".absolute-text-2",
    toggleActions: "play none restart none",
  },
  duration: 2,
  opacity: 1,
});

gsap.to(".absolute-text-3", {
  scrollTrigger: {
    scroller: ".container",
    trigger: ".absolute-text-3",
    toggleActions: "play none restart none",
  },
  duration: 2,
  opacity: 1,
});

gsap.to(".absolute-text-4", {
  scrollTrigger: {
    scroller: ".container",
    trigger: ".absolute-text-4",
    toggleActions: "play none restart none",
  },
  duration: 2,
  opacity: 1,
});
