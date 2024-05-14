const body = document.querySelector('body');
const sidebar = document.querySelector('.sidebar');
const toggle = document.querySelector('.toggle');
const searchBtn = document.querySelector('.search-box');
const modeSwitch = document.querySelector('.toggle-switch');
const modeText = document.querySelector('.mode-text');

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark');
    modeText.textContent = body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
});
document.addEventListener("DOMContentLoaded", function () {
  var dropdowns = document.querySelectorAll(".nav-link");

  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener("click", function (event) {
      event.preventDefault();
      var submenu = this.querySelector(".sub-menu");
      if (this.classList.contains("active")) {
        this.classList.remove("active");
        submenu.style.display = "none";
      } else {
        closeAllDropdowns();
        this.classList.add("active");
        submenu.style.display = "block";
      }
    });
  });

  // Close all dropdowns except the clicked one
  function closeAllDropdowns() {
    dropdowns.forEach(function (dropdown) {
      dropdown.classList.remove("active");
      var submenu = dropdown.querySelector(".sub-menu");
      submenu.style.display = "none";
    });
  }

  // Close dropdowns when clicking outside
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".nav-link")) {
      closeAllDropdowns();
    }
  });
});
