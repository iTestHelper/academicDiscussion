// Function to get URL parameters
function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  const results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Populate the detail page with URL parameters

const classTitle = document.getElementById("classTitle");
const profName = document.getElementById("profName");
const profResponse = document.getElementById("profResponse");
const std1Name = document.getElementById("std1Name");
const std1Response = document.getElementById("std1Response");
const std2Name = document.getElementById("std2Name");
const std2Response = document.getElementById("std2Response");
const ETStitle = document.getElementById("ETStitle");
const myResponse = document.getElementById("myResponse");

ETStitle.innerText = getUrlParameter("title");

classTitle.innerText = getUrlParameter("classTitle");

profName.innerText = "Dr. " + getUrlParameter("profName");
var paragraph = document.createElement("p");
paragraph.innerHTML = getUrlParameter("profResponse");
profResponse.appendChild(paragraph);
var profImage = document.querySelector("#profImage img");

if (profImage) {
  profImage.src = `assets/image/professor_${getUrlParameter("profName")}.png`;
}

std1Name.innerText = getUrlParameter("std1Name");
var paragraph = document.createElement("p");
paragraph.innerHTML = getUrlParameter("std1Response");
std1Response.appendChild(paragraph);
var std1Image = document.querySelector("#std1Image img");
if (std1Image) {
  std1Image.src = `assets/image/student_${getUrlParameter("std1Name")}.png`;
}

std2Name.innerText = getUrlParameter("std2Name");
var paragraph = document.createElement("p");
paragraph.innerHTML = getUrlParameter("std2Response");
std2Response.appendChild(paragraph);
var std2Image = document.querySelector("#std2Image img");
if (std2Image) {
  std2Image.src = `assets/image/student_${getUrlParameter("std2Name")}.png`;
}

//myResponse.textContent = getUrlParameter("response");
