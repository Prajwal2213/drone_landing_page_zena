let index = 0;  // Initial slide index

function showSlide(n) {
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');
  
  // Calculate the correct index
  index = (n + items.length) % items.length;

  // Apply transform to slide
  carousel.style.transition = 'transform 0.5s ease-in-out';
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Move to next slide automatically
function nextSlide() {
  showSlide(index + 1);
}

// Set the carousel to autoplay every 3 seconds
setInterval(nextSlide, 3000);

// Ensure smooth transition from last to first slide
document.querySelector('.carousel').addEventListener('transitionend', () => {
  const items = document.querySelectorAll('.carousel-item');
  if (index === items.length) {
    index = 0;
    document.querySelector('.carousel').style.transition = 'none';  // Remove transition for instant move
    document.querySelector('.carousel').style.transform = 'translateX(0)';
    setTimeout(() => {
      document.querySelector('.carousel').style.transition = 'transform 0.5s ease-in-out';
    });
  }
});
let testimonialIndex = 0;  // Initial testimonial index

// Show a specific testimonial
function showTestimonial(n) {
  const carousel = document.querySelector('.testimonial-carousel');
  const items = document.querySelectorAll('.testimonial-item');
  
  // Calculate the correct index
  testimonialIndex = (n + items.length) % items.length;

  // Apply the transform to slide the testimonials
  carousel.style.transition = 'transform 0.5s ease-in-out';
  carousel.style.transform = `translateX(-${testimonialIndex * 100}%)`;
}

// Move to the next testimonial
function nextTestimonial() {
  showTestimonial(testimonialIndex + 1);
}

// Move to the previous testimonial
function prevTestimonial() {
  showTestimonial(testimonialIndex - 1);
}

// Set the testimonial carousel to autoplay every 5 seconds
setInterval(nextTestimonial, 5000);

// Ensure smooth transition from last to first testimonial
document.querySelector('.testimonial-carousel').addEventListener('transitionend', () => {
  const items = document.querySelectorAll('.testimonial-item');
  if (testimonialIndex === items.length) {
    testimonialIndex = 0;
    document.querySelector('.testimonial-carousel').style.transition = 'none';  // Instant reset
    document.querySelector('.testimonial-carousel').style.transform = 'translateX(0)';
    setTimeout(() => {
      document.querySelector('.testimonial-carousel').style.transition = 'transform 0.5s ease-in-out';
    });
  }
});

