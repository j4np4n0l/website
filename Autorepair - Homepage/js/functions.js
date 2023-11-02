mobileNavigationToggle();

function mobileNavigationToggle() {
  const primaryNav = document.querySelector('#primary_nav');
  const navToggle = document.querySelector('.mobile_nav_toggle');
  const menuIcon = document.querySelector('.menu_icon');
  const iconPath = document.querySelector('.icon_path');

  navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
      primaryNav.setAttribute('data-visible', true);
      menuIcon.style.transform = 'rotate(180deg)';
      iconPath.setAttribute('d', 'M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z');
    } else {
      primaryNav.setAttribute('data-visible', false);
      menuIcon.style.transform = 'rotate(0deg)';
      iconPath.setAttribute('d', 'M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z');
    }
  });
}

// Scroll to Top
document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopButton = document.getElementById("scrollToTop");

    // Show the button when the user scrolls down 20px from the top
    window.addEventListener("scroll", function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            // scrollToTopButton.style.display = "block";
            scrollToTopButton.style.opacity = "1";
            scrollToTopButton.style.transform = "scale(1)";
        } else {
            // scrollToTopButton.style.display = "none";
            scrollToTopButton.style.opacity = "0";
            scrollToTopButton.style.transform = "scale(0)";
        }
    });

    // Smoothly scroll to the top when the button is clicked
    scrollToTopButton.addEventListener("click", function() {
        scrollToTop();
    });

    function scrollToTop() {
        var currentPosition = document.body.scrollTop || document.documentElement.scrollTop;

        if (currentPosition > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, currentPosition - currentPosition / 8);
        }
    }
});