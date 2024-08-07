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
  '  <h4 class="no-margin">Haz 15 • 3 min read</h4>' +
  '  <div class="line"></div>' +
  "  <h3>Elektrik Mühendisi Nedir ve Ne İş Yapar?</h3>" +
  "  <p>Elektrik mühendisleri, elektrik enerjisinin üretimi, iletimi ve dağıtımı ile ilgili sistemlerin tasarımı, geliştirilmesi ve bakımını yapar. Bu mühendislik dalı, aşağıdaki alanları içerir:</p>" +
  "  <ol> <li> <span> Güç Sistemleri:</span> Elektrik enerjisinin üretilmesi ve dağıtımıyla ilgilenir. Trafo merkezleri, iletim hatları ve dağıtım sistemlerinin tasarımı ve işletilmesi bu alandadır. </li> <li> <span>Kontrol Sistemleri:</span> Otomasyon ve kontrol sistemlerinin tasarımını ve uygulamasını içerir. Endüstriyel otomasyon ve robotik sistemler bu kapsamda değerlendirilebilir.</li>  <li> <span>Elektronik:</span> Elektronik devrelerin ve sistemlerin tasarımı, geliştirilmesi ve test edilmesi.</li>  <li><span>Telekomünikasyon:</span> Haberleşme sistemlerinin tasarımı ve işletilmesi.  </li>  <li></span> Yenilenebilir Enerji Sistemleri:</span> Güneş, rüzgar, hidroelektrik gibi yenilenebilir enerji kaynaklarının kullanımı ve entegrasyonu.</li>  </ol>" +
  '  <img src="blog/blog1.jpg">' +
  '   <h4 class="centered-h4">Kobinerji Serbest Müşavir Mühendislik Hizmetleri</h4>' +
  "    <h4>Serbest Müşavir Mühendis, SMM Nedir ve Ne İş Yapar?</h4>" +
  "    <p> Serbest müşavir mühendis (SMM), elektrik-elektronik mühendisliği, kontrol mühendisliği ve biyomedikal mühendisliği alanlarında çeşitli mühendislik hizmetleri sunan profesyoneldir. SMM büroları, tasarım, uygulama, test, kontrol, kabul ve imzalama yetkisine sahiptir. SMM hizmetleri şunları kapsar:</p>" +
  '    <ol> <li><span>Etüd ve Yapılabilirlik Hizmetleri:</span> Projelerin fizibilite çalışmalarını yapar.</li> <li><span>Proje Hizmetleri:</span>   <ol type="a"> <li> <span>Öneri Projesi: </span>İlk fikir aşamasındaki projeler.</li>   <li> <span>Ön Proje (Avan Proje): </span>Projenin genel hatlarıyla tasarlandığı aşama. </li>  <li> <span>Uygulama Projesi: </span>Detaylı teknik çizimlerin ve hesaplamaların yapıldığı aşama. </li> <li> <span> Röleve Projesi:</span>Mevcut yapının ölçülerek yeniden çizilmesi. </li> <li> <span>Değişiklik Projesi (Tadilat Projesi): </span> Mevcut projelerdeki değişikliklerin tasarımı.</li> <li> <span> Üretim Projesi (İmalat Projesi):</span> Üretim için gerekli detayların tasarımı.</li> <li> <span> Son Durum Projesi:</span>Proje tamamlandıktan sonraki son durumu gösteren çizimler. </li> <li> <span>Detaylar:  </span> Projeye ait tüm detayların tasarımı.</li> </ol>  </li>   <li><span>Araştırma ve Geliştirme Hizmetleri:</span>Yeni teknolojilerin ve sistemlerin geliştirilmesi.</li> <li><span>İhale Dosyası ve Keşif-Şartname Düzenleme Hizmetleri:</span> İhaleler için gerekli belgelerin ve şartnamelerin hazırlanması.</li> <li><span>Mesleki Kontrollük Hizmetleri:</span>Projelerin teknik açıdan denetlenmesi.</li> <li><span>Teknik Uygulama Sorumluluğu (Fenni Mesuliyet):</span>Projenin teknik açıdan sorumluluğunun alınması. </li> <li><span>Hakediş ve Kesin Hesap Hizmetleri: </span>Proje maliyetlerinin ve ödemelerinin düzenlenmesi.</li> <li><span>Devreye Alma, Kontrol ve Kabul Hizmetleri: </span> Sistemlerin devreye alınması ve kabul süreçlerinin yürütülmesi.</li> <li><span>İşletme ve Bakım Hizmetleri: </span>Sistemlerin işletilmesi ve bakımının yapılması.</li> <li><span>Danışmanlık Hizmetleri (Müşavirlik Hizmetleri):</span>Teknik danışmanlık hizmetleri sunulması.</li> <li><span>Yapım Hizmetleri ve/veya Sorumluluğu:</span>İnşaat ve yapım süreçlerinin yürütülmesi.</li> <li><span>Test ve Ölçüm Hizmetleri: </span>  Sistemlerin test edilmesi ve performans ölçümlerinin yapılması. </li> <li><span>Teknik Dosya Hazırlama Hizmetleri: </span>Projeye ait teknik dosyaların hazırlanması.</li></ol>' +
  '    <img src= "blog/blog1pic2.jpg">' +
  '   <h4 class="centered-h4">  Kobinerji Elektrik Mühendisleri Daha Aydınlık Bir Gelecek İçin Sürdürülebilir Çözümler </h4>' +
  "    <h3>İmza Yetkisi Nedir?</h3>" +
  "    <p>İmza yetkisi, bir mühendisin yaptığı işin veya sunduğu hizmetin sorumluluklarını üstlenmesi anlamına gelir. Elektrik Mühendisleri Odası (EMO) bünyesinde, elektrik, elektronik, elektrik-elektronik, kontrol, haberleşme, telekomünikasyon, biyomedikal ve mikroelektronik mühendisliği bölümlerinden mezun üyeler bulunmaktadır. İmza yetkisi, mühendislik hizmetlerinin bilim, teknoloji ve ilgili mevzuata uygunluğunu onaylamayı ve bu hizmetlerin sorumluluğunu almayı ifade eder.</p>" +
  "    <h4>Elektrik Elektronik Mühendislerinin İmza Yetkisi</h4>" +
  "<p> Elektrik-elektronik mühendisleri, üç tür SMM belgesi alabilirler:</p> " +
  "  <ul>  <li> <span> Asansör SMM Belgesi: </span> Asansör hizmetlerinin yapılabilmesi için gerekli belgedir. Bu belgeyi elektrik, elektrik-elektronik, elektronik, elektronik ve haberleşme mühendisleri alabilir.</li>  <li> <span>Elektrik 1 kV Altı Tesisler için SMM Belgesi:  </span> 1000 V altındaki gerilimdeki projeler ve sözleşmeler için gerekli belgedir. İç tesisat projeleri, topraklama ölçümleri, danışmanlık ve müşavirlik hizmetleri bu kapsamdadır.</li>  <li> <span> Elektrik 1 kV Altı ve Üstü SMM Belgesi: </span> Elektrik mühendisliği hizmetlerine ait her türlü proje, sözleşme ve danışmanlık hizmetleri için gerekli belgedir. Elektrik-elektronik mühendislerinin bu belgeyi alabilmesi için belirli dersleri tamamlamış olmaları gerekir.</li>  </ul>" +
  " <h3>Sanayi Endüstri Trafo İşletme Sorumluluğu Nedir?</h3>" +
  " <p>Sanayi endüstrisinde trafo işletme sorumluluğu, elektrik enerjisinin güvenli ve verimli bir şekilde iletilmesi ve dağıtılması için trafo merkezlerinin işletilmesi, bakımı ve denetlenmesini kapsar. Bu sorumluluk şunları içerir:</p>" +
  " <ul>  <li>Trafo merkezlerinin düzenli bakım ve kontrollerinin yapılması.</li>  <li>Arıza durumlarında müdahale ve onarım süreçlerinin yönetilmesi.</li>  <li>Trafo merkezlerinin enerji verimliliği ve güvenliği konularında iyileştirilmesi.</li>  <li>İşletme kayıtlarının tutulması ve raporlanması.</li></ul>" +
  " <p>Bu blog yazısı ile elektrik mühendisliği ve serbest müşavir mühendisliğinin kapsamı ve SMM’nin görevleri hakkında genel bir bakış sunulmuştur. Elektrik ve elektronik mühendislik bölümlerinden mezun olan kişiler, yetkili serbest müşavir mühendislik hizmetleri vermek için EMO tarafından yetkilendirilir.</p>" +
  ' <h3 class="important-text">Kaynaklar<h3>' +
  " <p>Elektrik Mühendisleri Odası</p>" +
  " <p>Elektrik Mühendisliği Tanımı ve Çalışma Alanları</p>" +
  " <p>Serbest Müşavir Mühendislik Yönetmeliği</p>" +
  "  <h4>cembulbul5</h4>" +
  '  <h4 class="no-margin">Haz 15 • 3 min read</h4>' +
  '  <div class="line"></div>' +
  "  ";

const blog2content =
  " <h2>VAP Verimlilik Arttırıcı Proje Nedir? Enerji Verimliliği Kapsamında Etüt Nasıl Yapılır?</h2> " +
  "  <h4>cembulbul5</h4>" +
  '  <h4 class="no-margin">Haz 15 • 3 min read</h4>' +
  '  <div class="line"></div>' +
  "<p>Enerji verimliliği, günümüzün en önemli konularından biridir. Doğru bir enerji etüdü ile işletmeler hem maliyetlerini düşürebilir hem de çevreye olan etkilerini azaltabilirler. Bu yazıda, enerji etüdü nasıl yapılır, Verimlilik Artırıcı Proje (VAP) nedir ve bu projeler nasıl uygulanır gibi konuları ele alacağız.</p>" +
  "  <h3>Enerji Etüdü Nedir? VAP Verimlilik Artırıcı Proje Nedir ?</h3>" +
  " <p>Enerji etüdü, Verimlilik Artırıcı Proje bir tesisin enerji tüketimini analiz etmek ve enerji verimliliğini artırmak için gerekli adımları belirlemek amacıyla yapılan detaylı bir incelemedir. Etüt süreci şu adımlardan oluşur: </p>" +
  " <ul> <li> <span>  Hazırlık Aşaması: </span> Etüt için gerekli verilerin toplanması ve etüt ekibinin oluşturulması. </li>   <li> <span>Saha İncelemesi:   </span> Tesisin enerji tüketim noktalarının detaylı bir şekilde incelenmesi. </li>   <li> <span> Veri Analizi:  </span> Toplanan verilerin analiz edilerek enerji tasarruf potansiyellerinin belirlenmesi. </li>   <li> <span> Raporlama:   </span> Analiz sonuçlarının ve önerilen iyileştirmelerin detaylı bir rapor halinde sunulması. </li> </ul> " +
  '    <img src= "blog/blog1pic2.jpg">' +
  " <h3>VAP Verimlilik Artırıcı Proje;</h3>" +
  " <p>VAP (Verimlilik Artırıcı Proje), enerji verimliliğini artırmak için gerçekleştirilen projelerdir. Bu projeler, enerji tüketimini azaltarak maliyetleri düşürmeyi ve çevresel etkileri azaltmayı hedefler. VAP projeleri, genellikle şu adımları içerir:</p>" +
  " <hr>" +
  "<h3>VAP, Verimlilik Artırıcı Proje Uygulaması </h3>" +
  "<ul> <li> <span>Proje Planlaması: </span> Proje hedeflerinin belirlenmesi ve gerekli kaynakların planlanması.</li>   <li> <span> Uygulama</span>Planlanan iyileştirmelerin hayata geçirilmesi. </li>  <li> <span>İzleme ve Değerlendirme: </span>Projenin başarısını değerlendirmek için enerji tüketim verilerinin izlenmesi. </li>  </ul>  " +
  " <h4> Verimlilik Artırıcı Proje, VAP Nasıl Uygulanır?</h4>" +
  " <p>VAP, Verimlilik Artırıcı Proje projelerinin başarılı bir şekilde uygulanabilmesi için aşağıdaki adımlar izlenmelidir:  </p>" +
  "<ul> <li> <span>Ön Etüt ve Fizibilite Çalışmaları:  </span>Projenin uygulanabilirliğini değerlendirmek için detaylı bir ön etüt yapılmalıdır. </li>   <li> <span>Proje Tasarımı:  </span> Uygulama planları ve teknik çizimlerin hazırlanması.</li>  <li> <span> Finansman</span> Projenin finansmanı için gerekli kaynakların sağlanması. Bu, devlet teşvikleri veya özel sektör finansmanları ile gerçekleştirilebilir.</li>  <li> <span>Uygulama: </span> Projenin sahada hayata geçirilmesi. </li>   <li> <span>Eğitim ve Bilgilendirme:  </span> Personelin proje hakkında bilgilendirilmesi ve eğitilmesi.</li>  <li> <span>İzleme ve Raporlama:  </span> Proje uygulandıktan sonra enerji tasarrufu verilerinin izlenmesi ve raporlanması.</li> </ul>  " +
  " <hr>" +
  ' <p class= "bold-txt"> Enerji verimliliği projeleri, işletmelerin sürdürülebilirlik hedeflerine ulaşmalarında büyük rol oynar. Doğru bir enerji etüdü ve ( VAP ) Verimlilik Artırıcı Proje uygulaması ile hem enerji maliyetlerini düşürebilir hem de çevreye olan etkilerinizi azaltabilirsiniz. Detaylı bilgi ve danışmanlık için bizimle iletişime geçebilirsiniz.</p>' +
  "  <h4>cembulbul5</h4>" +
  '  <h4 class="no-margin">Haz 15 • 3 min read</h4>' +
  '  <div class="line"></div>' +
  " ";

const blog3content =
  " <h2> Enerji Verimliliği Danışmanlık Hizmetleri ile Sürdürülebilir Geleceğe Adım Atın</h2>" +
  "  <h4>cembulbul5</h4>" +
  '  <h4 class="no-margin">Haz 15 • 3 min read</h4>' +
  '  <div class="line"></div>' +
  " <p>Enerji verimliliği, günümüz dünyasında hem çevresel hem de ekonomik açıdan büyük önem taşımaktadır. Kobinerji olarak, enerji verimliliği danışmanlık hizmetlerimizle işletmenizin enerji tüketimini optimize ederek sürdürülebilir bir geleceğe katkıda bulunmanıza yardımcı oluyoruz. Bu blog yazımızda, enerji verimliliği ve danışmanlık hizmetlerimizin işletmenize nasıl faydalar sağlayabileceğini ele alacağız.</p> " +
  '  <img src="blog/blog2pic1.jpg">' +
  '<h4 class="centered-h4"> Enerji Verimliliği Danışmanlık kapsamında basınçlı hatlardaki kaçaklarınızı Kobinerji ile tespit edin.</h4>' +
  "  <h3>1.Enerji Verimliliği Nedir?</h3>" +
  " <p>Enerji verimliliği, aynı hizmet veya üretim düzeyine daha az enerji kullanarak ulaşmayı hedefleyen bir yaklaşımdır. Bu, enerji tüketimini azaltarak maliyetleri düşürmenin yanı sıra, çevresel etkileri de minimize eder. Enerji verimliliği, sürdürülebilir kalkınmanın önemli bir parçasıdır ve işletmeler için uzun vadeli avantajlar sunar.</p>" +
  " <h3>2. Enerji Verimliliğinin İşletmenize Faydaları</h3>" +
  " <ul>  <li>  <span>  Maliyet Tasarrufu:  </span> </li> Enerji verimliliği ile enerji faturalarınızı düşürebilir, işletmenizin genel maliyetlerini azaltabilirsiniz. <li>  <span>Çevresel Sorumluluk:   </span> Daha az enerji tüketimi, daha düşük karbon ayak izi anlamına gelir, bu da çevresel sorumluluğunuzu artırır.</li>  <li>  <span>Rekabet Avantajı:   </span> Enerji verimli uygulamalarla, piyasa rekabetinde öne çıkabilir ve müşteri memnuniyetini artırabilirsiniz.</li> </ul>" +
  " <h3> 3. Kobinerji'nin Enerji Verimliliği Danışmanlık Hizmetleri</h3>" +
  '  <img src="blog/blog2pic2.jpg">' +
  " <p>Kobinerji olarak, işletmenizin enerji verimliliğini artırmak için kapsamlı danışmanlık hizmetleri sunuyoruz. Hizmetlerimiz arasında şunlar bulunmaktadır:</p>" +
  " <ul> <li>  <span>Enerji Denetimleri: </span> İşletmenizin enerji tüketimini analiz ederek verimlilik artırma fırsatlarını belirliyoruz. </li>   <li>  <span>Enerji Yönetim Sistemleri: </span>  ISO 50001 standartlarına uygun enerji yönetim sistemleri kurarak, enerji verimliliği hedeflerinize ulaşmanıza yardımcı oluyoruz. </li>   <li>  <span> Yenilenebilir Enerji Çözümleri: </span>  Güneş ve rüzgar enerjisi gibi yenilenebilir enerji kaynaklarını kullanarak enerji bağımlılığınızı azaltıyoruz.</li> </ul>" +
  "  <h3> 4. Başarılı Proje Örnekleri</h3>" +
  "  <p>Kobinerji olarak, birçok başarılı projeye imza attık. Enerji verimliliği danışmanlık hizmetlerimizle, farklı sektörlerde faaliyet gösteren işletmelerin enerji tüketimini önemli ölçüde azaltmasına yardımcı olduk.</p>" +
  "  <h3>5. Neden Kobinerji'yi Tercih Etmelisiniz?</h3>" +
  "  <p>Kobinerji, deneyimli ekibi ve yenilikçi çözümleri ile enerji verimliliği alanında çözüm ortağınızdır. İşletmenizin ihtiyaçlarına özel çözümler sunarak, sürdürülebilir ve verimli bir enerji yönetimi sağlamaktayız.Enerji verimliliği danışmanlık hizmetlerimiz hakkında daha fazla bilgi almak için bizimle iletişime geçin. Sürdürülebilir bir gelecek için birlikte adım atalım!</p>" +
  "  <h4>cembulbul5</h4>" +
  '  <h4 class="no-margin">Haz 15 • 3 min read</h4>' +
  '  <div class="line"></div>';

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
