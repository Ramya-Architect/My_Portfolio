// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Smooth Scroll
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll Reveal
const revealElements = document.querySelectorAll('.section, .project-block');

window.addEventListener('scroll', () => {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if(rect < window.innerHeight - 150){
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});

// Initial State
revealElements.forEach(el =>{
  el.style.opacity = 0;
  el.style.transform = 'translateY(40px)';
});
