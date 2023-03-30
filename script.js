// Add an event listener to the navbar toggle button
const navbarToggle = document.querySelector('.navbar-toggle');
navbarToggle.addEventListener('click', function() {
  // Toggle the 'active' class on the navbar to show/hide the menu
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
});

// Add an event listener to the skill bars
const skillBars = document.querySelectorAll('.skill-bar');
skillBars.forEach(function(skillBar) {
  // Calculate the width of the skill bar based on the percentage value in the data attribute
  const skillPercentage = skillBar.getAttribute('data-percentage');
  skillBar.style.width = `${skillPercentage}%`;
});
