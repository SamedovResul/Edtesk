// about

const mainPage = document.querySelectorAll('.about');
const headSection = document.getElementById('offer-nav-section');

for (let i = 0; i < mainPage.length; i++) {
  mainPage[i].addEventListener("click", function() {
    headSection.scrollIntoView(0);
  })
}

// 


let display = false
$(document).ready(function(){
  $(".burger-open").click(function(){
    if(display){
      display = false
      $(".burger-menu").fadeOut();
    }else{
      display = true
      $(".burger-menu").fadeIn();
    }
  });

  $(".burger-close-byDiv").click(function(){
    if(display){
      display = false
      console.log(display)
      $(".burger-menu").fadeOut();
    }
  });
});


// conatct
const contact = "contact"

const contactNav = document.querySelectorAll('.contact');


for (let i = 0; i < contactNav.length; i++) {
  contactNav[i].addEventListener('click', function() {
    window.localStorage.setItem('contact', JSON.stringify(contact));
  })
}