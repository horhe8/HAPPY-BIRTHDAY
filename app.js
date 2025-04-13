onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  document.addEventListener('DOMContentLoaded', function() {
    // After your existing animation code
    setTimeout(function() {
      document.querySelector('.birthday-message').style.opacity = '1';
    }, 2000); // Appears after 2 seconds
  });

  