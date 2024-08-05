const loader = document.getElementById("preloader");
window.addEventListener("load", () =>
  setTimeout(function () {
    hideLoader();
  }, 2000)
);

function hideLoader() {
  loader.style.display = "none";
}

// function loadNewPage(pageNumber) {
//   gsap.to(".container", {
//     width: "100%",
//     height: "600px",
//     duration: 1,
//   });
// }
