 /**
   * Preloader2
   */
 document.addEventListener("DOMContentLoaded", function() {
    // Simulate content loading
    setTimeout(function() {
      document.getElementById('preloader').style.display = "none";
    }, 3000); // 4 seconds
  });

  /** Info slider */
  document.addEventListener("DOMContentLoaded", function() {
    var fixedHeader = document.getElementById("fixed-header");
    var eventInfo = document.getElementById("event-info");
    var registerNow = document.getElementById("register-now");
    var infoTxt = document.getElementById("info-txt");
    var infoTxt1 = document.getElementById("info-txt1");
  
    // Initial position of elements
    var initialEventInfoTop = eventInfo.getBoundingClientRect().top + window.scrollY;
  
    window.addEventListener("scroll", function() {
      // Calculate the distance scrolled from the initial position of eventInfo
      var scrollDistance = window.scrollY - initialEventInfoTop;
  
      // Adjust the size of eventInfo and registerNow on scroll up
      var scaleFactor = Math.max(0.8, 1 - window.scrollY / 100);
      eventInfo.style.transition = "transform 0.5s ease-in-out";
      eventInfo.style.transform = "scale(" + scaleFactor + ")";
      registerNow.style.transition = "transform 0.5s ease-in-out";
      registerNow.style.transform = "scale(" + scaleFactor + ")";
      
      // Hide infoTxt and infoTxt1 with fade in/out effect moving upwards
      infoTxt.style.opacity = 1 - Math.min(scrollDistance / 100, 1);
      infoTxt.style.transform = "translateY(" + -Math.max(0, scrollDistance / 2) + "px)";
      
      infoTxt1.style.opacity = 1 - Math.min(scrollDistance / 100, 1);
      infoTxt1.style.transform = "translateY(" + -Math.max(0, scrollDistance / 2) + "px)";

    });
  });

  
