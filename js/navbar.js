const navMenuEl = document.querySelector('#navbar');
const navMenuToggleEl = document.querySelector('#hamburger-toggle');
const navThemeToggleIconEl = document.querySelector('#theme-toggle-icon');
const navThemeToggleEl = document.querySelector('#theme-toggle');
const overlayEl = document.querySelector('#navbar-overlay');
const htmlEl = document.documentElement;

const toggleMenu = () => {
  navMenuEl.classList.toggle('active');
  overlayEl.classList.toggle('active');
  const isOpen = navMenuEl.classList.contains('active');
  navMenuToggleEl.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
};

const toggleTheme = () => {
  const currentTheme = htmlEl.getAttribute('data-theme');
  
  if (currentTheme === 'dark') {
    htmlEl.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    navThemeToggleIconEl.className = 'ri-moon-line';
  } else {
    htmlEl.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    navThemeToggleIconEl.className = 'ri-sun-line';
  }
};

navMenuToggleEl.addEventListener('click', toggleMenu);
overlayEl.addEventListener('click', toggleMenu);
navThemeToggleEl.addEventListener('click', toggleTheme);

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navMenuEl.classList.contains('active')) {
    toggleMenu();
  }
});