// Selecting Elements
const btn = document.querySelector("#getFullNameBtn");
const fullName = document.querySelector("#nameSurname");
const age = document.querySelector("#age");
const linkednLink = document.querySelector("#linkedinUrl");
const githubLink = document.querySelector("#githubUrl");

// setting attributes to <a> elements
linkednLink.setAttribute("href", "https://www.linkedin.com/in/fsunaycansev/");
githubLink.setAttribute("href", "https://github.com/sunaycansev");

//getfullName function
function getfullName() {
  fullName.innerHTML = "Ferhat Sunay Cansev";
  age.innerHTML = "24";
  btn.style.display = "none";
}
