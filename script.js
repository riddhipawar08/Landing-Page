
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('active');
}
function closeMenu() {
  const nav = document.getElementById('navLinks');
  if (nav.classList.contains('active')) {
    nav.classList.remove('active');
  }
}
