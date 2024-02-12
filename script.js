document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopButton = document.getElementById("scrollToTop");
    var statementBorder = document.querySelector(".statement-border");
  
    window.addEventListener("scroll", function () {
      if (
        document.body.scrollTop > statementBorder.offsetTop + statementBorder.offsetHeight ||
        document.documentElement.scrollTop > statementBorder.offsetTop + statementBorder.offsetHeight
      ) {
        scrollToTopButton.classList.add("show");
      } else {
        scrollToTopButton.classList.remove("show");
      }
    });
  
    scrollToTopButton.addEventListener("click", function () {
      scrollToTop(1000);
    });
  
    function scrollToTop(duration) {
      const start = window.pageYOffset;
      const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
  
      function scroll() {
        const currentTime = 'now' in window.performance ? performance.now() : new Date().getTime();
        const timeElapsed = currentTime - startTime;
  
        window.scrollTo(0, easeInOut(timeElapsed, start, -start, duration));
  
        if (timeElapsed < duration) {
          requestAnimationFrame(scroll);
        }
      }
  
      function easeInOut(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }
  
      requestAnimationFrame(scroll);
    }
  });
  
  
