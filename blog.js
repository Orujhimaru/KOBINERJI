const loader = document.getElementById("preloader");
window.addEventListener("load", () =>
  setTimeout(function () {
    hideLoader();
  }, 2000)
);

function hideLoader() {
  loader.style.display = "none";
}

const blogs = document.getElementById("blog-all");
const page1 = document.getElementById("blog1");
const page2 = document.getElementById("blog2");
const page3 = document.getElementById("blog3");

const arrOfBlogs = [page1, page2, page3];
for (let i = 0; i < arrOfBlogs.length; i++) {
  arrOfBlogs[i].addEventListener("click", function () {
    loadNewPage();
  });
}

// //   // change conatiner to page1 - to sections

function loadNewPage() {
  gsap.to(".blog-area", {
    opacity: 0,
    display: "none",
    duration: 1,
    onComplete: () => {
      //   container.classList.toggle("hide-scrolling");
      //   slider.classList.toggle("hide-item");
      //   localStorage.setItem("pageNumber", pageNumber.toString());
      //   window.location.href = "/hizmetler.html";
      // const body = document.getElementById("body");
      // body.innerHTML += addPageContent(pageNumber);
      // addPageContent(pageNumber); ADD IT LATER ON**
      // DISPLAY FROM NONE TO BLOCK ***.
    },
  });
}
