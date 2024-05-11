// ---------Responsive-navbar-active-animation-----------
feather.replace();

function test() {
  var tabsNewAnim = document.getElementById("navbarSupportedContent");
  var activeItemNewAnim = tabsNewAnim.querySelector(".active");
  var activeWidthNewAnimHeight = activeItemNewAnim.offsetHeight;
  var activeWidthNewAnimWidth = activeItemNewAnim.offsetWidth;
  var itemPosNewAnimTop = activeItemNewAnim.offsetTop;
  var itemPosNewAnimLeft = activeItemNewAnim.offsetLeft;

  document.querySelector(".hori-selector").style.cssText =
    "top:" +
    itemPosNewAnimTop +
    "px; left:" +
    itemPosNewAnimLeft +
    "px; height:" +
    activeWidthNewAnimHeight +
    "px; width:" +
    activeWidthNewAnimWidth +
    "px; bottom: 0px !important;";

  tabsNewAnim.querySelectorAll("li").forEach(function (li) {
    li.addEventListener("click", function (e) {
      tabsNewAnim.querySelectorAll("ul li").forEach(function (uli) {
        uli.classList.remove("active");
      });
      this.classList.add("active");
      var activeWidthNewAnimHeight = this.offsetHeight;
      var activeWidthNewAnimWidth = this.offsetWidth;
      var itemPosNewAnimTop = this.offsetTop;
      var itemPosNewAnimLeft = this.offsetLeft;
      document.querySelector(".hori-selector").style.cssText =
        "top:" +
        itemPosNewAnimTop +
        "px; left:" +
        itemPosNewAnimLeft +
        "px; height:" +
        activeWidthNewAnimHeight +
        "px; width:" +
        activeWidthNewAnimWidth +
        "px";
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(test, 0);
});

window.addEventListener("resize", function () {
  setTimeout(test, 500);
});

document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    var navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.style.display === "none") {
      navbarCollapse.style.display = "";
    } else {
      navbarCollapse.style.display = "none";
    }
    setTimeout(test, 0);
  });

// --------------add active class-on another-page move----------

//Add active class on another page linked
//==========================================
// $(window).on('load',function () {
//     var current = location.pathname;
//     console.log(current);
//     $('#navbarSupportedContent ul li a').each(function(){
//         var $this = $(this);
//         // if the current path is like this link, make it active
//         if($this.attr('href').indexOf(current) !== -1){
//             $this.parent().addClass('active');
//             $this.parents('.menu-submenu').addClass('show-dropdown');
//             $this.parents('.menu-submenu').parent().addClass('active');
//         }else{
//             $this.parent().removeClass('active');
//         }
//     })
// });

// sidebar js

// Sidebar toggle
document.addEventListener("DOMContentLoaded", function () {
  // Get current path and find target link
  var path = window.location.pathname.split("/").pop();

  // Account for home page with empty path
  if (path == "") {
    path = "index.html";
  }

  var navLinks = document.querySelectorAll(".nav-link ul li a");
  navLinks.forEach(function (navLink) {
    if (navLink.getAttribute("href") === path) {
      navLink.parentNode.classList.add("active");
    }
  });
});
