// ################################################################################################

//PARALLAX ON IMG

const body = document.querySelector('body');
const images = document.querySelectorAll('.imgParallax');
let mouseX = 0, mouseY = 0;
let centerX = window.innerWidth / 2;
let centerY = window.innerHeight / 2;
let posX = 0, posY = 0;

function animate() {
  requestAnimationFrame(animate);

  // Calcul de la nouvelle position en utilisant une interpolation pour adoucir les mouvements de la souris
  posX += (mouseX - posX) * 0.1;
  posY += (mouseY - posY) * 0.1;
  const diffX = mouseX - centerX;
  const diffY = mouseY - centerY;
  const targetX = posX + diffX * 0.1;
  const targetY = posY + diffY * 0.1;

  // Appliquer la transformation CSS à toutes les images qui ont la classe "imgParallax"
  images.forEach((image) => {
    image.style.transform = `translate(${targetX}px, ${targetY}px)`;
  });
}

// Écouter les événements de la souris sur la container
body.addEventListener('mousemove', e => {
  // Mettre à jour les coordonnées de la souris
  mouseX = (e.clientX - body.offsetLeft - body.offsetWidth / 2) / -50;
  mouseY = (e.clientY - body.offsetTop - body.offsetHeight / 2) / -50;
  centerX = window.innerWidth / 2;
  centerY = window.innerHeight / 2;
});

// Démarrer l'animation
animate();

// ################################################################################################



// ################################################################################################

//CURSOR 

const mainCircle = document.createElement('div');
mainCircle.classList.add('circle-main');
document.body.appendChild(mainCircle);

document.addEventListener('mousemove', function(e){
	const x = e.clientX;
	const y = e.clientY;
	mainCircle.style.transform = `translate(${x}px, ${y}px)`;

	const hoverables = document.querySelectorAll('.hoverable');

	Array.from(hoverables).forEach((hoverEl) => {
		hoverEl.addEventListener('mouseover', (e) => {
			mainCircle.classList.add('circle-hide');
		})
	})

	Array.from(hoverables).forEach((hoverEl) => {
		hoverEl.addEventListener('mouseout', (e) => {
			mainCircle.classList.remove('circle-hide');
		})
	});

});

// ################################################################################################



// ################################################################################################

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

// ################################################################################################



// ################################################################################################

//SWITCH DARK THEME AND LIGHT THEME

const switchBox = document.querySelector('.btn');
const backgroundBody = document.querySelector('.backgroundBody');
const title1 = document.querySelector('h1');
const title2 = document.querySelector('h2');
const nav = document.querySelector('.nav');
const icon = document.querySelector('i');
const paragraphs = document.querySelectorAll('p');
const detailBoutons = document.querySelectorAll('.detailBouton');
const detailProjects = document.querySelectorAll('.detailProject');
const divGratifications = document.querySelectorAll('.divGratification');
const tags = document.querySelectorAll('.tag');
const detailBoutonPs = document.querySelectorAll('.detailBoutonP');


switchBox.addEventListener('click', function(){
  backgroundBody?.classList.toggle('backgroundBody-change');
  nav?.classList.toggle('nav-change');
  icon?.classList.toggle('fa-sun');
  icon?.classList.toggle('i-change');
  title1?.classList.toggle('h1-change');
  title2?.classList.toggle('h2-change');

  detailBoutons.forEach(detailBouton => {
    detailBouton.classList.toggle('detailBouton-change');
  });

  detailBoutonPs.forEach(detailBoutonP => {
    detailBoutonP.classList.toggle('detailBoutonP-change');
  });

  tags.forEach(tag => {
    tag.classList.toggle('tag-change');
  });

  detailProjects.forEach(detailProject => {
    detailProject.classList.toggle('detailProject-change');
  });

  divGratifications.forEach(divGratification => {
    divGratification.classList.toggle('divGratification-change');
  });

  paragraphs.forEach(paragraph => {
    paragraph.classList.toggle('p-change');
  });

  localStorage.setItem('theme', backgroundBody.classList.contains('backgroundBody-change') ? 'dark' : 'light');
});

addEventListener("DOMContentLoaded", (event) => {
  const theme = localStorage.getItem('theme');

  if(theme === 'dark'){
    backgroundBody?.classList.toggle('backgroundBody-change');
    nav?.classList.toggle('nav-change');
    icon?.classList.toggle('fa-sun');
    icon?.classList.toggle('i-change');
    title1?.classList.toggle('h1-change');
    title2?.classList.toggle('h2-change'); 

    detailBoutons.forEach(detailBouton => {
      detailBouton.classList.toggle('detailBouton-change');
    });

    detailBoutonPs.forEach(detailBoutonP => {
      detailBoutonP.classList.toggle('detailBoutonP-change');
    });

    tags.forEach(tag => {
      tag.classList.toggle('tag-change');
    });

    detailProjects.forEach(detailProject => {
      detailProject.classList.toggle('detailProject-change');
    });

    divGratifications.forEach(divGratification => {
      divGratification.classList.toggle('divGratification-change');
    });

    paragraphs.forEach(paragraph => {
      paragraph.classList.toggle('p-change');
    });
    }

});

// ################################################################################################
