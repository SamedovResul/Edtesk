


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


// slick section
$(document).ready(function() {
  $('.slick-div').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode:true,
    variableWidth: true,
    // autoplay:true,
    autoplaySpeed:2500,
    arrows:false,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});


// gallery section

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('.img')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})

// send email

const Name = document.getElementById('name');
const surname = document.getElementById('surname');
const email = document.getElementById('Email');
const phone = document.getElementById('Phone');
const message = document.getElementById('message');
const submit = document.getElementById('btn');

let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
submit.addEventListener('click', function(){

  
  const data ={
    name:Name.value,
    surname:surname.value,
    email:email.value,
    phone:phone.value,
    message: message.value
  }
  console.log(data)
  if(re.test(email.value)){
    if( Name.value && surname.value && phone.value){
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://aquaphonics-main-wvoglgccwejru.herokuapp.com/send");
    xhttp.setRequestHeader("Content-type", 'application/json');
    xhttp.send(JSON.stringify(data));
    alert('Sizinlə əlaqə saxlanılacaq')
    Name.value = ''
    surname.value = ''
    email.value = ''
    phone.value = ''
    message.value= ''
  }else{
    alert('xaiş edirik xanaların hamısını doldurun')
  }
  }else{
    alert("Emaili doğru yazın")
  }
  
  
})

// navbar scrolling 



const NavBar = document.querySelector(".nav-section");

window.addEventListener('scroll', function() {
  if(window.scrollY >600){
    NavBar.style.backgroundColor = "black"
  }else{
    NavBar.style.backgroundColor = "unset"
  }
});


// Area fade in out

let img = false

const AreaBox = document.querySelectorAll(".Area-box");
const imgClass = document.querySelectorAll('.img');


for (let i = 0; i < AreaBox.length; i++) {
  AreaBox[i].addEventListener("mouseover", function(){
    for (let index = 0; index < imgClass.length; index++) {
      imgClass[i].classList.add("fadeOut")
      imgClass[i].classList.remove('fadeIN')
    }
  })
}

for (let i = 0; i < AreaBox.length; i++) {
  AreaBox[i].addEventListener("mouseout", function(){
    for (let index = 0; index < imgClass.length; index++) {
      imgClass[i].classList.add("fadeIN");
      imgClass[i].classList.remove('fadeOut');
    }
  })
}



if(screen.width <= 991){
  for (let i = 0; i < AreaBox.length; i++) {
  window.addEventListener("scroll", function(){
    if(window.scrollY >= 300 && window.scrollY <= 500){
      imgClass[0].classList.add("fadeOut");
    }else if(window.scrollY >= 500 && window.scrollY <= 700){
      imgClass[0].classList.add("fadeIN");
      imgClass[0].classList.remove('fadeOut');
    }else if(document.querySelector('.fadeOut') ){
      imgClass[0].classList.add("fadeIN");
      console.log(true)
      imgClass[0].classList.remove('fadeOut');
    }
    
    if(window.scrollY >= 500 && window.scrollY <= 700){
      imgClass[1].classList.add("fadeOut");
    }else if(window.scrollY >= 700 && window.scrollY <= 900){
      imgClass[1].classList.add("fadeIN");
      imgClass[1].classList.remove('fadeOut');
    }else if(window.scrollY <= 700){
      imgClass[1].classList.add("fadeIN");
      imgClass[1].classList.remove('fadeOut');
    }

    if(window.scrollY >= 700 && window.scrollY <= 900){
      imgClass[2].classList.add("fadeOut");
    }else if(window.scrollY >= 900 && window.scrollY <= 1200){
      imgClass[2].classList.add("fadeIN");
      imgClass[2].classList.remove('fadeOut');
    }else if(window.scrollY <= 1200){
      imgClass[2].classList.add("fadeIN");
      imgClass[2].classList.remove('fadeOut');
    }

    if(window.scrollY >= 900 && window.scrollY <= 1200){
      imgClass[3].classList.add("fadeOut");
    }else if(window.scrollY >= 1400){
      imgClass[3].classList.add("fadeIN");
      imgClass[3].classList.remove('fadeOut');
    }else if(window.scrollY <= 1400){
      imgClass[3].classList.add("fadeIN");
      imgClass[3].classList.remove('fadeOut');
    }


  })
}
}





// remove localstorageitem

window.localStorage.removeItem('newsId');
// contact 

const contactNav = document.querySelectorAll('.contact');
const contactSection = document.getElementById('contact');


console.log(contactNav)
let contact = JSON.parse(window.localStorage.getItem('contact'));

if(contact){
  contactSection.scrollIntoView();
  window.localStorage.removeItem('contact')
}

for (let i = 0; i < contactNav.length; i++) {
  contactNav[i].addEventListener("click", function(){
    contactSection.scrollIntoView();
  })
}