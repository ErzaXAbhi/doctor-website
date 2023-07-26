document.addEventListener("DOMContentLoaded", function() {
    const textArray = ['Aartas', 'Delhi', 'Mumbai', 'Gurgram']; // Add your array of texts here
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
  const navbar = document.getElementById('navbar');
  
  window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    
    if (prevScrollPos > currentScrollPos) {
      navbar.style.top = '0';
    } else {
      navbar.style.top = '-68px'; // Change this value to adjust the height of the navigation bar
    }
    
    prevScrollPos = currentScrollPos;
  };

  // on scroll

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
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else if (elementOutofView(el)) {
        hideScrollElement(el)
      }
    })
  }
  
  window.addEventListener("scroll", () => { 
    handleScrollAnimation();
  });


  document.addEventListener("DOMContentLoaded", function() {
    // Existing code to change slide text
  
    // Get references to the sections
    const section1 = document.getElementById("section1");
    const section2 = document.getElementById("section2");
  
    function activateSection2() {
      if (elementInView(section2)) {
        section2.classList.add("active");
      } else {
        section2.classList.remove("active");
      }
    }
  
    // Start the text sliding process
    setInterval(changeSlideText, 2000);
  
    // Call the activateSection2 function when the user scrolls
    window.addEventListener("scroll", activateSection2);
  });
  