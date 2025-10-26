const nav = document.querySelector('.navbar');
const animatedElements = document.querySelectorAll('[data-animate]');

const toggleNavState = () => {
  if (!nav) return;
  if (window.scrollY > 20) {
    nav.classList.add('is-scrolled');
  } else {
    nav.classList.remove('is-scrolled');
  }
};

toggleNavState();
window.addEventListener('scroll', toggleNavState, { passive: true });

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

animatedElements.forEach(el => observer.observe(el));
