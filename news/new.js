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

// contact

const contact = "contact"

const contactNav = document.querySelectorAll('.contact');

for (let i = 0; i < contactNav.length; i++) {
  window.localStorage.setItem('contact', JSON.stringify(contact));
}