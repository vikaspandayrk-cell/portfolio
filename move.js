ocument.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
document.querySelectorAll('.hero-links a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.transform = 'scale(1.1)';
    link.style.transition = 'transform 0.3s ease';
  });
  link.addEventListener('mouseleave', () => {
    link.style.transform = 'scale(1)';
    link.style.transition = 'transform 0.3s ease';
  });
});
