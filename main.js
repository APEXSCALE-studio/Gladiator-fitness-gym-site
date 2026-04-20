
// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      link.style.color = (scrollY >= top && scrollY < bottom) ? 'white' : '';
    }
  });
});

// Mobile drawer
const hamburger = document.getElementById('hamburger');
const navDrawer = document.getElementById('navDrawer');
const drawerOverlay = document.getElementById('drawerOverlay');
const drawerClose = document.getElementById('drawerClose');

function openDrawer() {
  hamburger.classList.add('open');
  navDrawer.classList.add('open');
  drawerOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  hamburger.classList.remove('open');
  navDrawer.classList.remove('open');
  drawerOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  navDrawer.classList.contains('open') ? closeDrawer() : openDrawer();
});

drawerClose.addEventListener('click', closeDrawer);
drawerOverlay.addEventListener('click', closeDrawer);

// Close drawer on link click
document.querySelectorAll('.drawer-link').forEach(link => {
  link.addEventListener('click', closeDrawer);
});
