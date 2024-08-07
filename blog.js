const loader = document.getElementById("preloader");
window.addEventListener("load", () =>
  setTimeout(function () {
    hideLoader();
  }, 2000)
);

function hideLoader() {
  loader.style.display = "none";
}

const blogDetail = document.getElementById("blog-content");
const page1 = document.getElementById("blog1");
const page2 = document.getElementById("blog2");
const page3 = document.getElementById("blog3");

const arrOfBlogs = [page1, page2, page3];
for (let i = 0; i < arrOfBlogs.length; i++) {
  arrOfBlogs[i].addEventListener("click", function () {
    loadNewPage(i + 1);
    console.log(i + 1);
  });
}

// //   // change conatiner to page1 - to sections
const blog1content =
  " <h2> Elektrik Mühendisi ve Serbest Müşavir Mühendis (SMM) Nedir, Ne İş Yapar?</h2> " +
  "  <h4>cembulbul5</h4>" +
  "  <h4>Haz 15 • 3 min read</h4>" +
  '  <div class="line"></div>' +
  "  <h3>Elektrik Mühendisi Nedir ve Ne İş Yapar?</h3>" +
  "  <p>Elektrik mühendisleri, elektrik enerjisinin üretimi, iletimi ve dağıtımı ile ilgili sistemlerin tasarımı, geliştirilmesi ve bakımını yapar. Bu mühendislik dalı, aşağıdaki alanları içerir:</p>" +
  "  <ol> <li> <span> Güç Sistemleri:</span> Elektrik enerjisinin üretilmesi ve dağıtımıyla ilgilenir. Trafo merkezleri, iletim hatları ve dağıtım sistemlerinin tasarımı ve işletilmesi bu alandadır. </li> <li> <span>Kontrol Sistemleri:</span> Otomasyon ve kontrol sistemlerinin tasarımını ve uygulamasını içerir. Endüstriyel otomasyon ve robotik sistemler bu kapsamda değerlendirilebilir.</li>  <li> <span>Elektronik:</span> Elektronik devrelerin ve sistemlerin tasarımı, geliştirilmesi ve test edilmesi.</li>  <li><span>Telekomünikasyon:</span> Haberleşme sistemlerinin tasarımı ve işletilmesi.  </li>  <li></span> Yenilenebilir Enerji Sistemleri:</span> Güneş, rüzgar, hidroelektrik gibi yenilenebilir enerji kaynaklarının kullanımı ve entegrasyonu.</li>  </ol>" +
  '  <img src="blog/blog1.jpg"' +
  "   <h3>Kobinerji Serbest Müşavir Mühendislik Hizmetleri</h3>" +
  "    <h4>Serbest Müşavir Mühendis, SMM Nedir ve Ne İş Yapar?</h4>" +
  "    <p> Serbest müşavir mühendis (SMM), elektrik-elektronik mühendisliği, kontrol mühendisliği ve biyomedikal mühendisliği alanlarında çeşitli mühendislik hizmetleri sunan profesyoneldir. SMM büroları, tasarım, uygulama, test, kontrol, kabul ve imzalama yetkisine sahiptir. SMM hizmetleri şunları kapsar:</p>" +
  "    " +
  "    " +
  "    " +
  "  ";
const blog2content = "";
const blog3content = "";

function loadNewPage(blogNo) {
  gsap.to(".blog-area", {
    opacity: 0,
    display: "none",
    duration: 1,
    onComplete: () => {
      if (blogNo === 1) {
        blogDetail.innerHTML += blog1content;
      } else if (blogNo === 2) {
        blogDetail.innerHTML += blog2content;
      } else if (blogNo === 3) {
        blogDetail.innerHTML += blog3content;
      } else {
        blogDetail.innerHTML += "<div>Content not available</div>";
      }

      blogDetail.style.display = "flex";
    },
  });
}
