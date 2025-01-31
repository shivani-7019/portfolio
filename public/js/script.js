document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggle-mode');
  const icon = toggleButton ? toggleButton.querySelector('i') : null;

  if (!toggleButton || !icon) {
      console.error("Toggle button or icon not found!");
      return;
  }

  console.log("Dark mode script loaded.");

  toggleButton.addEventListener('click', function () {
      console.log("Toggle button clicked.");
      document.body.classList.toggle('dark-mode');

      if (document.body.classList.contains('dark-mode')) {
          icon.classList.remove('fa-moon');
          icon.classList.add('fa-sun');
          localStorage.setItem('darkMode', 'enabled');
      } else {
          icon.classList.remove('fa-sun');
          icon.classList.add('fa-moon');
          localStorage.setItem('darkMode', 'disabled');
      }
  });
});