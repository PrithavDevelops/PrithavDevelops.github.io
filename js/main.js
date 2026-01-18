const toggle = document.getElementById("themeToggle");

window.addEventListener('DOMContentLoaded', () => {
  alert('This website is a work in progress.');
});

toggle?.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent =
    document.body.classList.contains("light") ? "🌙" : "☀️";
});
