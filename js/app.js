// Inject Navbar
document.getElementById("navbar").innerHTML = `
  <header class="navbar">
    <h2>Outpass System</h2>
    <span class="hamburger" id="menuBtn">☰</span>
    <nav id="navLinks">
      <a href="index.html">Home</a>
      <a href="student.html">Student</a>
      <a href="staff.html">Staff</a>
      <a href="hod.html">HOD</a>
      <a href="warden.html">Warden</a>
      <a href="security.html">Security</a>
      <a href="#" id="themeToggle">🌓</a>
    </nav>
  </header>
`;

// Hamburger Toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Theme Toggle
const body = document.body;
const themeBtn = document.getElementById("themeToggle");

const currentTheme = localStorage.getItem("theme") || "light";
body.classList.add(currentTheme);

themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
  const newTheme = body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", newTheme);
});
