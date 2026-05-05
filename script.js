// Animate days counter
function animateCounter() {
  let target = 10
  let count = 0
  let counter = document.getElementById("days-count")
  let interval = setInterval(function() {
    count++
    counter.innerHTML = count
    if (count === target) {
      clearInterval(interval)
    }
  }, 100)
}

// Mobile menu toggle
function toggleMenu() {
  let navLinks = document.querySelector(".nav-links")
  navLinks.classList.toggle("mobile-open")
}

// Navbar scroll effect
window.addEventListener("scroll", function() {
  let navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.borderBottomColor = "#333333"
  } else {
    navbar.style.borderBottomColor = "#222222"
  }
})

// Start counter when page loads
window.addEventListener("load", function() {
  animateCounter()
})