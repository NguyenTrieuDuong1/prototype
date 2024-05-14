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

