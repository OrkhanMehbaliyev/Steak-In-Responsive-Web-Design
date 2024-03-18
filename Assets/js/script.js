// Define a function to handle the parallax effect
function handleParallax() {
    const slides = document.querySelectorAll('.slideI');
    let scrollPosition = window.scrollY || window.pageYOffset;

    slides.forEach(function(slide, index) {
        let slideOffset = slide.offsetTop;
        let slideSpeed = (scrollPosition - slideOffset) * 0.5; // Adjust the speed as needed
        slide.style.transform = `translateY(${slideSpeed}px)`;
    });
}

// Call the handleParallax function on scroll using requestAnimationFrame
let ticking = false;

window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            handleParallax();
            ticking = false;
        });
        ticking = true;
    }
});

// Call the handleParallax function initially to set the initial positions
handleParallax();

var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });



window.addEventListener("load",function(){
    let slideNum = 3;
    
    if(window.innerWidthc > 991) slideNum=3;
    if(window.innerWidth <= 991 && window.innerWidth > 768){
        slideNum = 2;
    }
    else if(window.innerWidth <= 768){
        slideNum = 1;
    }

    var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: slideNum,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
});


window.addEventListener("resize",function(){
    let slideNum = 3;
    
    if(window.innerWidthc > 991) slideNum=3;
    if(window.innerWidth <= 991 && window.innerWidth > 768){
        slideNum = 2;
    }
    else if(window.innerWidth <= 768){
        slideNum = 1;
    }

    var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: slideNum,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
});


window.addEventListener("load",function(){
    let slideNum = 3;
    
    if(window.innerWidthc > 991) slideNum=3;
    if(window.innerWidth <= 991 && window.innerWidth > 768){
        slideNum = 2;
    }
    else if(window.innerWidth <= 768){
        slideNum = 1;
    }

    var swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    
});


window.addEventListener("resize",function(){
    let slideNum = 3;

    
    if(window.innerWidthc > 991) slideNum=3;
    if(window.innerWidth <= 991 && window.innerWidth > 768){
        slideNum = 2;
    }
    else if(window.innerWidth <= 768){
        slideNum = 1;
    }

    var swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: slideNum,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    
});


// Functions for second navigation

window.addEventListener("load", function(){
  let navbar2 = document.getElementById("second-navbar");
  if(window.innerWidth <=991){
    navbar2.classList.add("visible");

  }
  else{
    navbar2.classList.remove("visible")
  }
});


window.addEventListener("resize", function(){
  let navbar2 = document.getElementById("second-navbar");
  if(window.innerWidth <=991){
   navbar2.classList.add("visible");
  }
  else{
    navbar2.classList.remove("visible");    
  }
});



window.addEventListener("scroll", function(){
  let navbar2 = document.getElementById("second-navbar");
  if(window.scrollY >= 200 && window.innerWidth >=991){
    navbar2.classList.add("visible");
  }
  else if(window.scrollY < 200 && window.innerWidth >=991){
    navbar2.classList.remove("visible");
  }
});

// ******

document.getElementsByClassName("nav-dropdown")[0].addEventListener("click", function(){
  this.classList.toggle("active");
  if(window.innerWidth >= 991){
    let rightNewsMenu = document.getElementById("rightNewsMenu");
    rightNewsMenu.style.visibility = "visible";
  }
  else{
    document.getElementById("pagesDropdownMenu").classList.toggle("visible");
  }
  
});


document.getElementsByClassName("nav-dropdown")[1].addEventListener("click", function(){
  this.classList.toggle("active");
  let rightNewsMenu = document.getElementById("rightNewsMenu");
  rightNewsMenu.style.visibility = "visible";
});


if(document.getElementById("exitTabIcon") != null){
  document.getElementById("exitTabIcon").addEventListener("click", function() {
    let rightNewsMenu = document.getElementById("rightNewsMenu");
    document.getElementsByClassName("nav-dropdown")[0].classList.remove("active");
    document.getElementsByClassName("nav-dropdown")[1].classList.remove("active");
    
    rightNewsMenu.style.visibility = "hidden";
  });
}


document.getElementsByClassName("accordion-contact")[0].addEventListener("click",function(){
  window.location.href = "./contact.html";
  console.log("salam")
});



