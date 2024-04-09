'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
}); 


document.addEventListener("DOMContentLoaded", function() {
  const closeHeaderBtn = document.getElementById("closeHeaderBtn");
  const headerTop = document.querySelector(".header-top");

  closeHeaderBtn.addEventListener("click", function() {
    headerTop.classList.toggle("hidden");
  });
});



//popup
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const closeButton = document.getElementById("closeButton");
  const drawer = document.querySelector(".drawer");
  let startDragY = 0;
  let startY = 0;
  let isScrolledToTop = true; 

  // Function to show the popup
  const showPopup = () => {
      popup.classList.add("show");
  };

  // Function to hide the popup
  const hidePopup = () => {
      // popup.classList.add("hide"),
      popup.style.animation = "slide-down 0.3s";
      setTimeout(() => {
          popup.remove();
      }, 300);
      // popup.classList.remove('show');
  };


 

  // Show the popup after 5 seconds
  setTimeout(showPopup, 1800);

  closeButton.addEventListener("click", () => {
      hidePopup();
  });

  document.addEventListener("click", (event) => {
      if (!popup.contains(event.target) && event.target !== closeButton) {
          hidePopup();
      }
  });
  

  drawer.addEventListener("dragstart", (event) => {
      startDragY = event.clientY;
  });

  drawer.addEventListener("dragend", (event) => {
      const deltaY = event.clientY - startDragY;
      startY = 0;
      if (deltaY > 50) {
          hidePopup();
      }
  });

  drawer.addEventListener("drag", (event) => {
      const deltaY = event.clientY - startDragY;
      if (startY === 0) {
          startY = popup.getBoundingClientRect().top;
      }
      popup.style.transform = `translateY(${startY + deltaY}px)`;
  });



});

