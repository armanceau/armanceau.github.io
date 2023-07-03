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
const mainSkill = document.querySelector('#main-skills');
const detailProjects = document.querySelectorAll('.detailProject');

switchBox.addEventListener('click', function(){
  backgroundBody?.classList.toggle('backgroundBody-change');
  menuBurger?.classList.toggle('menu__box-change');
  icon?.classList.toggle('fa-sun');
  icon?.classList.toggle('i-change');
  title1?.classList.toggle('h1-change');
  title2?.classList.toggle('h2-change');
  right?.classList.toggle('right-change');
  mainSkill?.classList.toggle('main-skills-change');
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
    mainSkill?.classList.toggle('main-skills-change');
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


var request = new XMLHttpRequest();
request.open('GET', 'data.json', true);

request.onload = function() {
    var data = JSON.parse(request.responseText);

    const aboutFilter = document.getElementById("about");
    const experienceFilter = document.getElementById("experience");
    const educationFilter = document.getElementById("education");
    const mainSkillsSection = document.getElementById("main-skills");
    const mainExperiencesSection = document.getElementById("main-experiences");
    const mainEducationsSection = document.getElementById("main-educations");
    const mainInterestsSection = document.getElementById("main-interests");

    // Fonction pour afficher les données de "About Me"
    function showAbout() {
        // Récupérer les données de "About Me" du JSON
        const aboutData = data.aboutMe;

        // Générer le contenu HTML correspondant
        let aboutHTML = '<div id="main-skills-title">Skills</div>';
        aboutData.forEach(function(item) {
            aboutHTML += `
                <div class="main-skill">
                    <div class="main-skills-text">
                        <div class="main-skills-title">${item.libelle}</div>
                        <div class="main-skills-pourcentage">${item.pourcentage}%</div>
                    </div>
    
                    <div class="main-skills-lines">
                        <div class="main-skills-line"></div>
                        <div class="main-skills-line-color"></div>
                    </div>
                </div>
                
            `;
        });

        // Afficher le contenu dans la section "main-skills"
        mainSkillsSection.innerHTML = aboutHTML;
        mainExperiencesSection.innerHTML = "";
        mainEducationsSection.innerHTML = "";

        // Ajouter la classe "filter-active" à "About me"
        aboutFilter.classList.add('filter-active');
        experienceFilter.classList.remove('filter-active');
        educationFilter.classList.remove('filter-active');

        // mainInterestsSection.style.display = "block";

        // Sélectionner tous les éléments avec la classe ".main-skills-line-color"
        const mainSkillsLines = document.querySelectorAll(".main-skills-line-color");

        // Itérer sur chaque élément et mettre à jour la propriété CSS "width" en fonction du pourcentage
        aboutData.forEach(function(item, index) {
        const widthPercentage = item.pourcentage + "%";
        mainSkillsLines[index].style.width = widthPercentage;
        });
    }

    // Fonction pour afficher les données de "Experience"
    function showExperience() {
        // Récupérer les données de "Experience" du JSON
        const experienceData = data.experience;

        let experienceHTML = '';
        experienceData.forEach(function(item) {
            experienceHTML += `
                <div class="main-experience">
                    <div class="main-experience-img">
                        <img src="assets/icons/experience.png" alt="Experience image" height="30" width="30">
                    </div>
                    <div class="main-experience-text">
                        <div class="main-experience-text-title">${item.libelle}</div>
                        <div class="main-experience-text-text">${item.text}</div>
                    </div>
                </div>
            `;
        });

        // Afficher le contenu dans la section "main-skills"
        mainExperiencesSection.innerHTML = experienceHTML;
        mainSkillsSection.innerHTML = "";
        mainEducationsSection.innerHTML = "";

        // Ajouter la classe "filter-active" à "Experience"
        aboutFilter.classList.remove('filter-active');
        experienceFilter.classList.add('filter-active');
        educationFilter.classList.remove('filter-active');

        // mainInterestsSection.style.display = "none";
        mainSkillsTitle.style.display = "none";
    }

    // Fonction pour afficher les données de "Education"
    function showEducation() {
        // Récupérer les données de "Education" du JSON
        const educationData = data.education;

        let educationHTML = '';
        educationData.forEach(function(item) {
            educationHTML += `
                <div class="main-education">
                    <div class="main-education-img">
                        <img src="assets/icons/education.png" alt="Experience image" height="30" width="30">
                    </div>
                    <div class="main-education-text">
                        <div class="main-education-text-title">${item.libelle}</div>
                        <div class="main-education-text-text">${item.text}</div>
                    </div>
                </div>
            `;
        });

        mainEducationsSection.innerHTML = educationHTML;
        mainExperiencesSection.innerHTML = "";
        mainSkillsSection.innerHTML = "";

        // Ajouter la classe "filter-active" à "Education"
        aboutFilter.classList.remove('filter-active');
        experienceFilter.classList.remove('filter-active');
        educationFilter.classList.add('filter-active');

        // mainInterestsSection.style.display = "none";
    }

    // Écouter les événements de clic sur les filtres
    aboutFilter.addEventListener('click', showAbout);
    experienceFilter.addEventListener('click', showExperience);
    educationFilter.addEventListener('click', showEducation);

    // Afficher par défaut les données de "About Me"
    showAbout();
    
};

request.send();

