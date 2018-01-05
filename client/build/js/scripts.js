const THOROTEXT = document.querySelector("#thoroText");
const THOROLINK = document.querySelector("#thoroLink");
const TOPTHOROLINK = document.querySelector("#topThoroLink");
const THOROARROW = document.querySelector("#thoroArrow");

const EFFICIENCYTEXT = document.querySelector("#efficiencyText");
const EFFICIENCYLINK = document.querySelector("#efficiencyLink");
const TOPEFFICIENCYLINK = document.querySelector("#topEfficiencyLink");
const EFFICIENCYARROW = document.querySelector("#efficiencyArrow");

const CREATTEXT = document.querySelector("#creatText");
const CREATLINK = document.querySelector("#creatLink");
const TOPCREATLINK = document.querySelector("#topCreatLink");
const CREATARROW = document.querySelector("#creatArrow");


//Communication Constants
const COMMTEXT = document.querySelector("#commText");
const COMMLINK = document.querySelector("#commLink");
const TOPCOMMLINK = document.querySelector("#topCommLink a");
const COMMARROW  = document.querySelector("#commArrow");

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
var valueToggle = 1;
var creatToggle = 1;
var efficiencyToggle = 1
var thoroToggle = 1;


//Initialize Hide
LEADERTEXT.classList.add("hide");
TEAMTEXT.classList.add("hide");
COMMTEXT.classList.add("hide");
CREATTEXT.classList.add("hide");
EFFICIENCYTEXT.classList.add("hide");
THOROTEXT.classList.add("hide");

//Functions//////////
function thoroReveal(e, current) {
  e.preventDefault();
  if (thoroToggle == 1) {
    THOROARROW.src = 'client/build/img/dropup.png';
    thoroToggle = 2;
  } else {
    THOROARROW.src = 'client/build/img/dropdown.png';
    thoroToggle = 1;
  }
  THOROTEXT.classList.toggle("hide");
}

function efficiencyReveal(e, current) {
  e.preventDefault();
  if (efficiencyToggle == 1) {
    EFFICIENCYARROW.src = 'client/build/img/dropup.png';
    efficiencyToggle = 2;
  } else {
    EFFICIENCYARROW.src = 'client/build/img/dropdown.png';
    efficiencyToggle = 1;
  }
  EFFICIENCYTEXT.classList.toggle("hide");
}

function creatReveal(e, current) {
  e.preventDefault();
  if (creatToggle == 1) {
    CREATARROW.src = 'client/build/img/dropup.png';
    creatToggle = 2;
  } else {
    CREATARROW.src = 'client/build/img/dropdown.png';
    creatToggle = 1;
  }
  CREATTEXT.classList.toggle("hide");
}

function commReveal(e, current) {
  e.preventDefault();
  if (valueToggle == 1) {
    COMMARROW.src = 'client/build/img/dropup.png';
    valueToggle = 2;
  } else {
    COMMARROW.src = 'client/build/img/dropdown.png';
    valueToggle = 1;
  }
  COMMTEXT.classList.toggle("hide");
}

//Hide and Reveal Leader section
function leaderReveal(e, current) {
  e.preventDefault();
  if (leaderToggle == 1) {
    LEADERARROW.src = 'client/build/img/dropup.png';
    leaderToggle = 2;
  } else {
    LEADERARROW.src = 'client/build/img/dropdown.png';
    leaderToggle = 1;
  }
  LEADERTEXT.classList.toggle("hide");
}

//Hide and Reveal Team section
function teamReveal(e, current) {
  e.preventDefault();
  if (teamToggle == 1) {
    TEAMARROW.src = 'client/build/img/dropup.png';
    teamToggle = 2;
  } else {
    TEAMARROW.src = 'client/build/img/dropdown.png';
    teamToggle = 1;
  }
  TEAMTEXT.classList.toggle("hide");
}

//Event Listeners
THOROLINK.addEventListener('click', function(e) {
  thoroReveal(e, this);
}, false);
TOPTHOROLINK.addEventListener('click', function(e) {
  thoroReveal(e, this);
}, false);


EFFICIENCYLINK.addEventListener('click', function(e) {
  efficiencyReveal(e, this);
}, false);

TOPEFFICIENCYLINK.addEventListener('click', function(e) {
  efficiencyReveal(e, this);
}, false);

CREATLINK.addEventListener('click', function(e) {
  creatReveal(e, this);
}, false);
TOPCREATLINK.addEventListener('click', function(e) {
  creatReveal(e, this);
}, false);

COMMLINK.addEventListener('click', function(e) {
  commReveal(e, this);
}, false);
TOPCOMMLINK.addEventListener('click', function(e) {
  commReveal(e, this);
}, false);

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
COMMTEXT
