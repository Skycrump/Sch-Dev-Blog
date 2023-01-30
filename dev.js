// Get all the navigation links
const navLinks = document.querySelectorAll("nav a");

// Add click event listener to each link
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    // Get the target element
    const target = document.querySelector(e.target.hash);
    // Get the height of the target element
    const targetHeight = target.offsetHeight;
    // Get the height of the viewport
    const viewportHeight = window.innerHeight;
    // Calculate the offset from the top of the viewport
    const offset = (viewportHeight - targetHeight) / 2;
    // Scroll to the target element with the calculated offset
    target.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
  });
});

$('.dropdown-content a').click(function(e){
  e.preventDefault();
  var target = $(this).attr('href');
  var targetPos = $(target).offset().top;
  var sectionHeight = $(target).outerHeight();
  var windowHeight = $(window).height();
  var scrollToPos = targetPos - ((windowHeight - sectionHeight) / 2);
  $('html, body').animate({scrollTop: scrollToPos}, 1000);
});





