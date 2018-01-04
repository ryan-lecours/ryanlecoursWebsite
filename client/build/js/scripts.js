//Leader Constants
const LEADERTEXT = document.querySelector("#leaderText");
const LEADERLINK = document.querySelector("#leaderLink a");
const LEADERARROW = document.querySelector("#leaderArrow");
const TOPLEADERLINK = document.querySelector("#topLeaderLink a");

//Team Constants
const TEAMTEXT = document.querySelector("#teamText");
const TEAMLINK = document.querySelector("#teamLink a");
const TEAMARROW = document.querySelector("#teamArrow");
const TOPTEAMLINK = document.querySelector("#topTeamLink a");

//Toggles
var leaderToggle = 1;
var teamToggle = 1;


//Initialize Hide
LEADERTEXT.classList.add("hide");
TEAMTEXT.classList.add("hide");

//Functions//////////

//Hide and Reveal Leader section
function leaderReveal(e, current) {
  e.preventDefault();
  if (leaderToggle == 1) {
    LEADERARROW.src = '../img/dropup.png';
    leaderToggle = 2;
  } else {
    LEADERARROW.src = '../img/dropdown.png';
    leaderToggle = 1;
  }
  LEADERTEXT.classList.toggle("hide");
}

//Hide and Reveal Team section
function teamReveal(e, current) {
  e.preventDefault();
  if (teamToggle == 1) {
    TEAMARROW.src = '../img/dropup.png';
    teamToggle = 2;
  } else {
    TEAMARROW.src = '../img/dropdown.png';
    teamToggle = 1;
  }
  TEAMTEXT.classList.toggle("hide");
}

//Event Listeners
LEADERLINK.addEventListener('click', function(e) {
  leaderReveal(e, this);
}, false);
TOPLEADERLINK.addEventListener('click', function(e) {
  leaderReveal(e, this);
}, false);
TEAMLINK.addEventListener('click', function(e) {
  teamReveal(e, this);
}, false);
TOPTEAMLINK.addEventListener('click', function(e) {
  teamReveal(e, this);
}, false);
