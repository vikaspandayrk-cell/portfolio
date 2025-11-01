document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Close mobile menu if open
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  }
});

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    navbar.style.backdropFilter = 'blur(20px)';
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.backdropFilter = 'blur(10px)';
    navbar.style.boxShadow = 'none';
  }
  
  lastScroll = currentScroll;
});

// Typing Effect for Hero Subtitle
const subtitle = document.querySelector('.hero-subtitle');
if (subtitle) {
  const text = subtitle.textContent;
  subtitle.textContent = '';
  let i = 0;
  
  function typeWriter() {
    if (i < text.length) {
      subtitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }
  
  // Start typing effect after a short delay
  setTimeout(typeWriter, 500);
}

// Animate elements on scroll (Intersection Observer)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections and cards
const animateElements = document.querySelectorAll('.skill-category, .project-card, .stat-item, .about-text, .contact-content');
animateElements.forEach(el => {
  el.style.opacity = '0';
  observer.observe(el);
});

// Form Submission Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Basic validation
    if (name && email && message) {
      // Show success message (you can customize this)
      alert(`Thank you ${name}! Your message has been sent. I'll get back to you soon at ${email}.`);
      
      // Reset form
      contactForm.reset();
      
      // In a real application, you would send this data to a server
      // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify({ name, email, message }) })
    } else {
      alert('Please fill in all fields.');
    }
  });
}

// Add active class to current nav link based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Parallax effect for hero section
const hero = document.querySelector('.hero');
if (hero) {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.5;
    hero.style.transform = `translateY(${parallax}px)`;
  });
}

// Add hover effect sound (optional - remove if you don't want sound)
const buttons = document.querySelectorAll('.btn, .project-card, .skill-category');
buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    // You can add a subtle animation or effect here
    button.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
  });
});

// Dynamic year in footer
const yearSpan = document.querySelector('.footer p');
if (yearSpan) {
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = `© ${currentYear} Your Name. All rights reserved.`;
}

// Skill tags animation on hover
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach(tag => {
  tag.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05) rotate(2deg)';
  });
  
  tag.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1) rotate(0deg)';
  });
});

// Project cards stagger animation
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
});

console.log('Portfolio loaded successfully! 🚀');
