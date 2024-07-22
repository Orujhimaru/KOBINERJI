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
    toggleActions: "play none restart reset",
  },
  duration: 2,
  opacity: 1,
});

gsap.to(".absolute-text-2", {
  scrollTrigger: {
    scroller: ".container",
    trigger: ".absolute-text-2",
    toggleActions: "play none restart reset",
  },
  duration: 2,
  opacity: 1,
});

gsap.to(".absolute-text-3", {
  scrollTrigger: {
    scroller: ".container",
    trigger: ".absolute-text-3",
    toggleActions: "play none restart reset",
  },
  duration: 2,
  opacity: 1,
});

gsap.to(".absolute-text-4", {
  scrollTrigger: {
    scroller: ".container",
    trigger: ".absolute-text-4",
    toggleActions: "play none restart reset",
  },
  duration: 2,
  opacity: 1,
});

gsap.to(".absolute-text-5", {
  scrollTrigger: {
    scroller: ".container",
    trigger: ".absolute-text-5",
    toggleActions: "play none restart reset",
  },
  duration: 2,
  opacity: 1,
});

gsap.to(".n1", {
  scrollTrigger: {
    scroller: ".container",
    trigger: ".absolute-text-1",
    toggleActions: "play reset play reset",
  },
  duration: 2,
  backgroundColor: "#5c5c5c",
});

gsap.to(".n2", {
  scrollTrigger: {
    scroller: ".container",
    trigger: ".absolute-text-2",
    toggleActions: "play reset play reset",
  },
  duration: 2,
  backgroundColor: "#5c5c5c",
});

gsap.to(".n3", {
  scrollTrigger: {
    scroller: ".container",
    trigger: ".absolute-text-3",
    toggleActions: "play reset play reset",
  },
  duration: 2,
  backgroundColor: "#5c5c5c",
});

gsap.to(".n4", {
  scrollTrigger: {
    scroller: ".container",
    trigger: ".absolute-text-4",
    toggleActions: "play reset play reset",
  },
  duration: 2,
  backgroundColor: "#5c5c5c",
});

gsap.to(".n5", {
  scrollTrigger: {
    scroller: ".container",
    trigger: ".absolute-text-5",
    toggleActions: "play reset play reset",
  },
  duration: 2,
  backgroundColor: "#5c5c5c",
});

// gsap.to(".", {
//   onComplete: () => {
//     window.location.href = "hizmetler1.html";
//   },
// });

// gsap.utils.toArray(".project").forEach((el) => {
//   gsap.to(el, {
//     width: "100%",
//     duration: 1,
//   });
// });
// const a = document.getElementById("1stpic");
// a.addEventListener("click", loadContentsPage);

function loadContentsPage(navigationPage) {
  //navigate to page+navigationPage
  // gsap.utils.toArray(".project").forEach((el) => {
  //   gsap.to(el, {
  //     width: "100%",
  //     duration: 1,
  //   });
  // });
  window.location.href = "hizmetler1.html";
}
