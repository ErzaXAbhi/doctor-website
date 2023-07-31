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



  // Add event listener to detect scrolling
window.addEventListener("scroll", revealSection);

function revealSection() {
  // Get the height of Section A and Section B
  const sectionAHeight = document.querySelector(".section-a").offsetHeight;
  const sectionB = document.querySelector(".section-b");

  // Calculate the position where Section B should start revealing
  const revealPosition = sectionAHeight - window.innerHeight / 2;

  // Toggle the 'reveal' class based on the scroll position
  if (window.scrollY >= revealPosition) {
    sectionB.classList.add("reveal");
  } else {
    sectionB.classList.remove("reveal");
  }
}
  

// parallax effect

let section1 = document.getElementById("section1");

let section2 = document.getElementById("section2");

window.addEventListener("scroll", () => {
    let value = window.screenY;

    section1.style.marginTop = value * 2.5 + "px";
    section2.style.top = value * -2.5 + "px"
})

