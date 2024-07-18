// gsap.to(".box", {
//   duration: 3,
//   x: 500,
// });

var lastScrollTop = document.pageYOffset;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
element.addEventListener(
  "scroll",
  function () {
    // or window.addEventListener("scroll"....
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop) {
      // downscroll code
    } else if (st < lastScrollTop) {
      // upscroll code
    } // else was horizontal scroll
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    console.log(lastScrollTop);
  },
  false
);
