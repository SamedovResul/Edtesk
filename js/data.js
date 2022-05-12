const button = document.querySelectorAll(".js-button");


const newsData = [
  {
    title:'Samsung rekord gəliri dərc edir, lakin 4-cü rüb üçün mənfəətin azaldığını göstərir'
  },
  {
    title: 'Wyze ilk kamerasını dayandıracağını rəsmi olaraq açıqladı. Bu cihazlar artıq dəstəklənməyəcək.'
  },
  {
    title:"Kompüter siçanının ixtiraçılarından biri olan Uilyam İngilis 91 yaşında vəfat edib"
  },
  {
    title:"4a və 5 Google-un ilk 5G-ni aktivləşdirən Pikselləri olacaq"
  },
  {
    title:'Tesla 2021-ci ilin dördüncü rübünə qədər qazanc əldə edərək rekordunu saxladı'
  },
  {
    title:'Renault Nissan Alliance 2030-cu ilə qədər 35 EV istehsal etməyi planlaşdırdığını təsdiqləyir'
  }
]

const text = document.querySelector(".test");
console.log(text)
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function(){
    const selected = button[i].previousElementSibling.innerHTML
    for (let i = 0; i < newsData.length; i++) {
      if(newsData[i].title === selected ){
        console.log(selected)
        document.querySelector(".test").innerHTML = "" + selected
      }
    }
  })
}