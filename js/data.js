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
    img:'.../img/uilyam.jpeg'
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



let selected
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function(){
      selected = button[i].previousElementSibling.innerHTML
      console.log(selected)
      for (let i = 0; i < newsData.length; i++) {
        if(newsData[i].title === selected ){
            window.localStorage.setItem('newsId', JSON.stringify(newsData[i].id));
        }
      }
  })
};



let id = JSON.parse(window.localStorage.getItem('newsId'));

if(id){
  for (let i = 0; i < newsData.length; i++) {
    if(newsData[i].id === id ){
      document.querySelector(".news-img").src = newsData[i].img;
      document.querySelector(".title").innerHTML = newsData[i].title;
      document.querySelector(".content").innerHTML = newsData[i].content;
    }
  }
}

const eyyub = 'men Amiraslanov Eyyub iksjsbmen artiq bezdi Alla'
