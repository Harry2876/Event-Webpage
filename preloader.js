 /**
   * Preloader
   */
 document.addEventListener("DOMContentLoaded", function() {
    // Simulate content loading
    setTimeout(function() {
      document.getElementById('preloader-overlay').classList.add('loaded');
    }, 3000); // 4 seconds
  });
  