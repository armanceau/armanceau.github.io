//CLOCK

function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  
  setTimeout(showTime, 1000);
  
}
showTime();





//SWITCH DARK THEME AND LIGHT THEME

const switchBox = document.querySelector('.btn');
const backgroundBody = document.querySelector('body');
const title1 = document.querySelector('h1');
const title2 = document.querySelector('h2');
const icon = document.querySelector('i');
const tags = document.querySelectorAll('.tag');
const btnBurger = document.querySelector('.menu__btn');
const menuBurger = document.querySelector('.menu__box');
const right = document.querySelector('.right');
const detailProjects = document.querySelectorAll('.detailProject');

switchBox.addEventListener('click', function(){
  backgroundBody?.classList.toggle('backgroundBody-change');
  menuBurger?.classList.toggle('menu__box-change');
  icon?.classList.toggle('fa-sun');
  icon?.classList.toggle('i-change');
  title1?.classList.toggle('h1-change');
  title2?.classList.toggle('h2-change');
  right?.classList.toggle('right-change');
  btnBurger?.classList.toggle('menu__btn-change');

  detailProjects.forEach(detailProject => {
    detailProject.classList.toggle('detailProject-change');
  });


  tags.forEach(tag => {
    tag.classList.toggle('tag-change');
  });

  localStorage.setItem('theme', backgroundBody.classList.contains('backgroundBody-change') ? 'dark' : 'light');
});

addEventListener("DOMContentLoaded", (event) => {
  const theme = localStorage.getItem('theme');

  if(theme === 'dark'){
    backgroundBody?.classList.toggle('backgroundBody-change');
    menuBurger?.classList.toggle('menu__box-change');
    icon?.classList.toggle('fa-sun');
    icon?.classList.toggle('i-change');
    title1?.classList.toggle('h1-change');
    title2?.classList.toggle('h2-change'); 
    right?.classList.toggle('right-change');
    btnBurger?.classList.toggle('menu__btn-change');

    detailProjects.forEach(detailProject => {
      detailProject.classList.toggle('detailProject-change');
    });

    tags.forEach(tag => {
      tag.classList.toggle('tag-change');
    });

  }

});

// ################################################################################################
