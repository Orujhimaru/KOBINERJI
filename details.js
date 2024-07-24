const body = document.getElementById("body");
let pageNumber = JSON.parse(localStorage.getItem("pageNumber"));
addPageContent(pageNumber);
const detailsColumn = document.getElementById("details-column");

detailsColumn.childNodes[0].nodeValue = null;

function addPageContent(pageNumber) {
  // Adding the new html content to the page.
  // document.
  body.innerHTML +=
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
      class_name = " order-left";
    } else {
      class_name = "";
    }
    console.log(pageContent[i]);
    innerpageContent +=
      '<div class="detail-element">' +
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
