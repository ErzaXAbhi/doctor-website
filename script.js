document.addEventListener("DOMContentLoaded", function () {
  const textArray = ["Aartas", "Delhi", "Mumbai", "Gurgram"]; // Add your array of texts here
  let currentTextIndex = 0;
  const slideText = document.getElementById("slide-text");

  function changeSlideText() {
    slideText.textContent = textArray[currentTextIndex];
    currentTextIndex++;
    if (currentTextIndex >= textArray.length) {
      currentTextIndex = 0;
    }
  }

  // Start the text sliding process
  setInterval(changeSlideText, 2000); // Adjust the interval (milliseconds) for text change
});

// User Scroll For Navbar
let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-68px"; // Change this value to adjust the height of the navigation bar
  }

  prevScrollPos = currentScrollPos;
};

// on scroll

// const scrollElements = document.querySelectorAll(".js-scroll");

// const elementInView = (el, dividend = 1) => {
//   const elementTop = el.getBoundingClientRect().top;

//   return (
//     elementTop <=
//     (window.innerHeight || document.documentElement.clientHeight) / dividend
//   );
// };

// const elementOutofView = (el) => {
//   const elementTop = el.getBoundingClientRect().top;

//   return (
//     elementTop > (window.innerHeight || document.documentElement.clientHeight)
//   );
// };

// const displayScrollElement = (element) => {
//   element.classList.add("scrolled");
// };

// const hideScrollElement = (element) => {
//   element.classList.remove("scrolled");
// };

// const handleScrollAnimation = () => {
//   scrollElements.forEach((el) => {
//     if (elementInView(el, 2.25)) {
//       displayScrollElement(el);
//     } else if (elementOutofView(el)) {
//       hideScrollElement(el)
//     }
//   })
// }

// window.addEventListener("scroll", () => {
//   handleScrollAnimation();
// });

let lastScrollPosition = 0;
let buffer = 150; // Adjust this value as needed for the buffer area

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  const currentScrollPosition = window.scrollY || window.scrollY;
  const scrollDirection =
    currentScrollPosition > lastScrollPosition ? "down" : "up";

  scrollElements.forEach((el) => {
    if (elementInView(el, 2.25)) {
      displayScrollElement(el);
    } else if (
      elementOutofView(el) ||
      (scrollDirection === "up" &&
        currentScrollPosition + buffer < el.offsetTop)
    ) {
      hideScrollElement(el);
    }
  });

  lastScrollPosition = currentScrollPosition;
};

window.addEventListener("scroll", handleScrollAnimation);

// opacity 1

let lastScrollY = 0;

function handleScroll() {
  const currentScrollY = window.scrollY;

  if (currentScrollY < lastScrollY) {
    // Scrolling up, so add the 'scrolled' class to the element
    document.querySelector(".js-scroll").classList.remove("scrolled");
  } else {
    // Scrolling down or no scrolling, remove the 'scrolled' class from the element
    document.querySelector(".js-scroll").classList.add("scrolled");
  }

  lastScrollY = currentScrollY;
}

// Attach the scroll event listener
window.addEventListener("scroll", handleScroll);

// scrollerbar for menu list

$("document").ready(function () {
  let sidebar = $(".scroll-menu");
  let sidebar_content = $(".scroll-menu .content-wrapper");

  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    let viewportHeight = $(this).height();
    let sidebarTop = scroll - menu.offset().top;
    let contentHeight = sidebar_content.height();
    if (scrollTop >= contentHeight - viewportHeight + sidebarTop) {
      sidebar_content.css(
        "transform",
        `translateY(-${contentHeight - viewportHeight + sidebarTop}px)`
      );
      sidebar_content.css("position", "fixed");
    } else {
      sidebar_content.css("transform", "");
      sidebar_content.css("position", "");
    }
  });
});
