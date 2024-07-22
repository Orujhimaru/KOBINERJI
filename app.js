// TODO
// SAVE THE ID, PHOTO AND THE TEXTS IN LOCALSTORAGE,
// PULL THEM UP IN THE NEW PAGE

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
  left: "5%",
  duration: 2,
  opacity: 1,
});

gsap.to(".absolute-text-2", {
  scrollTrigger: {
    scroller: ".container",
    trigger: ".absolute-text-2",
    toggleActions: "play none restart reset",
  },
  left: "5%",
  duration: 2,
  opacity: 1,
});

gsap.to(".absolute-text-3", {
  scrollTrigger: {
    scroller: ".container",
    trigger: ".absolute-text-3",
    toggleActions: "play none restart reset",
  },
  left: "5%",
  duration: 2,
  opacity: 1,
});

gsap.to(".absolute-text-4", {
  scrollTrigger: {
    scroller: ".container",
    trigger: ".absolute-text-4",
    toggleActions: "play none restart reset",
  },
  left: "5%",
  duration: 2,
  opacity: 1,
});

gsap.to(".absolute-text-5", {
  scrollTrigger: {
    scroller: ".container",
    trigger: ".absolute-text-5",
    toggleActions: "play none restart reset",
  },
  left: "5%",
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

// gsap.utils.toArray(".project").forEach((el) => {
//   gsap.to(el, {
//     width: "100%",
//     duration: 1,
//   });
// });
// const a = document.getElementById("1stpic");
// a.addEventListener("click", loadContentsPage);

const container = document.getElementById("container");
container.addEventListener("click", loadNewPage);

function loadNewPage() {
  gsap.to(".container", {
    width: "100%",
    duration: 1,
    onComplete: () => {
      window.location.href = "/hizmetler.html";
    },
  });
}

function loadContentsPage(navigationPage) {
  //navigate to page+navigationPage
  // gsap.utils.toArray(".project").forEach((el) => {
  //   gsap.to(el, {
  //     width: "100%",
  //     duration: 1,
  //   });
  // });
  window.location.assign("hizmetler1.html");
}

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

// function transitionEvent() {
//   var tl = gsap.timeline();
//   tl.to()
// }

barba.init({
  sync: true,
  transitions: [
    {
      async leave(data) {
        const done = this.async();
        // transitionEvent();
        await delay(1500);
        done();
      },
    },
  ],
});
