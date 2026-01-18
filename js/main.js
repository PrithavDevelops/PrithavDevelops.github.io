const toggle = document.getElementById("themeToggle");

// Function to close the popup
function closePopup() {
  document.getElementById('work-in-progress-popup').style.display = 'none';
}

// Show the popup automatically when the page loads
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('work-in-progress-popup').style.display = 'flex';
});

toggle?.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent =
    document.body.classList.contains("light") ? "🌙" : "☀️";
});
