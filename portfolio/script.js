// Small interactive helpers
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  // Very simple local feedback — replace with email sending service if needed.
  status.textContent = 'Sending...';
  const data = new FormData(form);
  // Example: submit to email using `mailto:` fallback
  const name = data.get('name');
  const email = data.get('email');
  const message = data.get('message');
  // Open mail client as fallback
  const mailto = `mailto:your.email@example.com?subject=${encodeURIComponent('Contact from portfolio: ' + name)}&body=${encodeURIComponent('From: ' + email + '\n\n' + message)}`;
  window.location.href = mailto;
  status.textContent = 'Thanks — your mail client opened.';
});

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
menuBtn && menuBtn.addEventListener('click', () => {
  const navLinks = document.querySelector('.nav-links');
  if (!navLinks) return;
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});
