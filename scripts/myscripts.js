// When user clicks on a topheader, respond by showing/hiding the content
document.addEventListener('DOMContentLoaded', function() {
  const headers = document.querySelectorAll('.topheader');

  headers.forEach(header => {
      header.addEventListener('click', function() {
          const content = header.nextElementSibling;
          if (content.style.display === 'block') {
              content.style.display = 'none';
          } else {
              content.style.display = 'block';
          }
      });
  });
});