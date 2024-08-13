window.addEventListener("load", function () {
  // 메뉴기능
  const nav = this.document.querySelector(".nav");
  const btMenu = this.document.querySelector(".bt-menu");
  const navClose = this.document.querySelector(".nav-close");
  btMenu.addEventListener("click", function () {
    nav.classList.add("nav-active");
  });
  navClose.addEventListener("click", function () {
    nav.classList.remove("nav-active");
  });
  // nav영역에 마우스가 벗어나면 nav-active 기능이 비활성화됨
  nav.addEventListener("mouseleave", function () {
    nav.classList.remove("nav-active");
  });
  // 언어 펼침 기능
  const languageLi = this.document.querySelector(".language li");
  const language = this.document.querySelector(".language");
  const langBox = this.document.querySelector(".language-box");
  langBox.addEventListener("click", function () {
    langBox.classList.toggle("language-box-active");
  });
  // lang li에 transition
  this.setTimeout(function () {
    languageLi.style.transition = "all 0.2s";
  }, 500);

  // 스크롤 기능
  let scy = 0;
  let scActive = 50;
  scy = this.document.documentElement.scrollTop;
  let header = this.document.querySelector(".header");
  let logoW = this.document.querySelector(".logo-w");
  let logoG = this.document.querySelector(".logo-g");

  //   스크롤
  this.window.addEventListener("scroll", function () {
    scy = this.window.document.documentElement.scrollTop;
    if (scy > scActive) {
      header.classList.add("header-active");
      logoW.style.display = "none";
      logoG.style.display = "block";
    } else {
      header.classList.remove("header-active");
      logoW.style.display = "block";
      logoG.style.display = "none";
    }
  });
  //   hover
  header.addEventListener("mouseenter", function () {
    header.classList.add("header-active");
    logoW.style.display = "none";
    logoG.style.display = "block";
  });
  header.addEventListener("mouseleave", function () {
    header.classList.remove("header-active");
    logoW.style.display = "block";
    logoG.style.display = "none";
  });
//   새로고침 했을 때도 원래 기능

});
