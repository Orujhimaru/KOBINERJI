// TODO
// SAVE THE ID, PHOTO AND THE TEXTS IN LOCALSTORAGE,
// PULL THEM UP IN THE NEW PAGE / OR THE CURRENT PAGE,
// DELETE HIZMETLER.HTML, TURN IT INTO ABOUT US PAGE
//
var localStorage = window.localStorage;
gsap.registerPlugin(ScrollTrigger);

const container = document.getElementById("container");
const slider = document.getElementById("progress-slider");

container.classList.remove("hide-scrolling");
slider.classList.remove("hide-item");

const loader = document.getElementById("preloader");
container.style.opacity = "0";
window.addEventListener("load", () =>
  setTimeout(function () {
    hideLoader();
    container.style.opacity = "1";
    gsap.from(".container", {
      duration: 2,
      ease: "power3.out",
      y: 5000,
    });
  }, 1500)
);

function hideLoader() {
  loader.style.display = "none";
}

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

gsap.to(".absolute-text-6", {
  scrollTrigger: {
    scroller: ".container",
    trigger: ".absolute-text-6",
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

gsap.to(".n6", {
  scrollTrigger: {
    scroller: ".container",
    trigger: ".absolute-text-6",
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
// const elementData = document.getElementById('tag-id').innerHTML = '<ol><li>html data</li></ol>';

// const container = document.getElementById("container");
// container.addEventListener("click", loadNewPage);

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");
const page5 = document.getElementById("page5");
const page6 = document.getElementById("page6");

// HERE CREATE THE HTML+CSS TEMPLATE
// THEN, ADD THE HTML CSS CONTENT FROM A DATA JS FILE, AND ADD THEM THROUGH ARRAY INDEX :)

const arrOfPages = [page1, page2, page3, page4, page5, page6];
for (let i = 0; i < arrOfPages.length; i++) {
  arrOfPages[i].addEventListener("click", function () {
    loadNewPage(i);
  });
}
// change conatiner to page1 - to sections

function loadNewPage(pageNumber) {
  gsap.to(".container", {
    width: "100%",
    height: "600px",
    duration: 1,
    onComplete: () => {
      container.classList.add("hide-scrolling");
      slider.classList.add("hide-item");
      localStorage.setItem("pageNumber", pageNumber.toString());
      window.location.href = "/hizmetler.html";
      // const body = document.getElementById("body");
      // body.innerHTML += addPageContent(pageNumber);
      // addPageContent(pageNumber); ADD IT LATER ON**
    },
  });
}

// function loadContentsPage(navigationPage) {
//   //navigate to page+navigationPage
//   // gsap.utils.toArray(".project").forEach((el) => {
//   //   gsap.to(el, {
//   //     width: "100%",
//   //     duration: 1,
//   //   });
//   // });
//   window.location.assign("hizmetler1.html");
// }

// function delay(n) {
//   n = n || 2000;
//   return new Promise((done) => {
//     setTimeout(() => {
//       done();
//     }, n);
//   });
// }

// function transitionEvent() {
//   var tl = gsap.timeline();
// }

// barba.init({
//   sync: true,
//   transitions: [
//     {
//       async leave(data) {
//         const done = this.async();
//         // transitionEvent();
//         await delay(1500);
//         done();
//       },
//     },
//   ],
// });
