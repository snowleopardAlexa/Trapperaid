// Select all breadcrumb links
const breadcrumbLinks = document.querySelectorAll('#breadcrumb-horizontal .breadcrumb-link');

// Function to show content based on clicked breadcrumb
breadcrumbLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor click behavior

    // Get target content section
    const target = this.getAttribute('data-target');
    const targetContent = document.getElementById(target);

    // Hide all content sections
    document.querySelectorAll('.content-section').forEach(section => {
      section.classList.remove('active');
    });

    // Show the target content section
    targetContent.classList.add('active');
  });
});

// breadcrumbs links colors 
document.addEventListener("DOMContentLoaded", function () {
  // Select all breadcrumb links
  const breadcrumbLinks = document.querySelectorAll('#breadcrumb-horizontal .breadcrumb-link');

  // Function to handle click on each breadcrumb link
  breadcrumbLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default link behavior

      // Remove active class from all links
      breadcrumbLinks.forEach(link => {
        link.classList.remove('active');
      });

      // Add active class to the clicked link
      this.classList.add('active');

      // Get the color from the data attribute and set it as the text color
      const color = this.getAttribute('data-color');
      this.style.color = color;
    });
  });
      // Set the first breadcrumb link as active by default
      const firstLink = breadcrumbLinks[0];
      if (firstLink) {
      firstLink.classList.add('active');
      firstLink.style.color = firstLink.getAttribute('data-color');
   }
});