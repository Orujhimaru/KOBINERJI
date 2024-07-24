const body = document.getElementById("body");
let pageNumber = JSON.parse(localStorage.getItem("pageNumber"));
addPageContent(pageNumber);
const detailsColumn = document.getElementById("details-column");
detailsColumn.childNodes[0].nodeValue = null;

const loader = document.getElementById("preloader");
window.addEventListener("load", () =>
  setTimeout(function () {
    hideLoader();
  }, 2000)
);

function hideLoader() {
  loader.style.display = "none";
}

function addPageContent(pageNumber) {
  // Adding the new html content to the page.
  // document.
  body.innerHTML +=
    '<img class="img-main" src="main-page-pics/pic-1.jpg">' +
    '<div class="details-container">\n' +
    '<div id="details-column"  class="details-column">' +
    innerContent(pageNumber) +
    "</div>" +
    "</div>";
}

function innerContent(pageNumber) {
  let innerpageContent;
  const pageContent = arrayOfText[pageNumber];
  console.log(pageContent.length);
  for (let i = 0; i < pageContent.length; i++) {
    if (i % 2 === 0) {
      class_name = " order-left special-design";
      class_name_main = " special-design";
    } else {
      class_name = "";
      class_name_main = "";
    }
    console.log(pageContent[i]);
    innerpageContent +=
      '<div class="detail-element' +
      class_name_main +
      '">' +
      '<p class="paragraph-style">' +
      pageContent[i] +
      "</p>" +
      '<img class="image-style ' +
      class_name +
      '" src="main-page-pics/pic-2.jpg"/>' +
      "</div>";
  }
  return innerpageContent;
}
