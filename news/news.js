

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

// slide
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

// news

const button = document.querySelectorAll(".js-button");
const newsData = [
  {
    id:1,
    title:'Samsung rekord gəliri dərc edir, lakin 4-cü rüb üçün mənfəətin azaldığını göstərir',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ipsum temporibus fugiat deleniti eius modi, a voluptatum magnam pariatur tenetur praesentium ut laboriosam dignissimos nobis iure incidunt impedit quisquam sequi?',
    img:'../img/samsung.jpeg'
  },
  {
    id:2,
    title: 'Wyze ilk kamerasını dayandıracağını rəsmi olaraq açıqladı. Bu cihazlar artıq dəstəklənməyəcək.',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ipsum temporibus fugiat deleniti eius modi, a voluptatum magnam pariatur tenetur praesentium ut laboriosam dignissimos nobis iure incidunt impedit quisquam sequi?',
    img:'../img/wyze.jpeg'
  },
  {
    id:3,
    title:"Kompüter siçanının ixtiraçılarından biri olan Uilyam İngilis 91 yaşında vəfat edib",
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ipsum temporibus fugiat deleniti eius modi, a voluptatum magnam pariatur tenetur praesentium ut laboriosam dignissimos nobis iure incidunt impedit quisquam sequi?',
    img:'../img/uilyam.jpeg'
  },
  {
    id:4,
    title:"4a və 5 Google-un ilk 5G-ni aktivləşdirən Pikselləri olacaq",
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ipsum temporibus fugiat deleniti eius modi, a voluptatum magnam pariatur tenetur praesentium ut laboriosam dignissimos nobis iure incidunt impedit quisquam sequi?',
    img:'../img/google4a.jpeg'
  },
  {id:5,
    title:'Tesla 2021-ci ilin dördüncü rübünə qədər qazanc əldə edərək rekordunu saxladı',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ipsum temporibus fugiat deleniti eius modi, a voluptatum magnam pariatur tenetur praesentium ut laboriosam dignissimos nobis iure incidunt impedit quisquam sequi?',
    img:'../img/Tesla.jpeg'
  },
  {
    id:6,
    title:'Renault Nissan Alliance 2030-cu ilə qədər 35 EV istehsal etməyi planlaşdırdığını təsdiqləyir',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ipsum temporibus fugiat deleniti eius modi, a voluptatum magnam pariatur tenetur praesentium ut laboriosam dignissimos nobis iure incidunt impedit quisquam sequi?',
    img:'../img/Renault.jpeg'
  }
]


// news 
const newsSection = document.getElementById("news-section")
let selected
let id = JSON.parse(window.localStorage.getItem('newsId'));
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function(){
    newsSection.scrollIntoView(0)
    document.querySelector(".news-img").src = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif";
    document.querySelector(".news-img").classList.add("gif");
    id = JSON.parse(window.localStorage.getItem('newsId'));
    anotherNews(id)
    
    selected = button[i].previousElementSibling.innerHTML
    for (let i = 0; i < newsData.length; i++) {
      if(newsData[i].title === selected ){
          window.localStorage.setItem('newsId', JSON.stringify(newsData[i].id));
      }
    }
  })
};

// 
function anotherNews(id) {
  
  if(id){
    console.log(id)
    
    setTimeout(() => {
      for (let i = 0; i < newsData.length; i++) {
        id = JSON.parse(window.localStorage.getItem('newsId'));
        if(newsData[i].id === id ){
          document.querySelector(".news-img").classList.remove('gif');
          document.querySelector(".news-img").src = newsData[i].img;
          document.querySelector(".title").innerHTML = newsData[i].title;
          document.querySelector(".content").innerHTML = newsData[i].content;
        }
      }
    }, 2000);
  }
}

anotherNews(id)





// contact

const contact = "contact"

const contactNav = document.querySelectorAll('.contact');

for (let i = 0; i < contactNav.length; i++) {
  contactNav[i].addEventListener('click', function() {
    window.localStorage.setItem('contact', JSON.stringify(contact));
  })
}