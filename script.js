var posts = [
  {
    title: "Welcome to Shrek OS",
    date: "June 26",
    content: "This is your first post inside Shrek OS. Continue building."
  },
  {
    title: "Why Shrek is the GOAT",
    date: "June 27",
    content: "Shrek is a green ogre, who is funny and amusing."
  },
  {
    title: "Random Thought",
    date: "Today",
    content: "How many more days until Shrek 5 comes out?"
  }
];

function loadSidebar() {
  var sidebar = document.querySelector("#sidebar");

  for (let i = 0; i < posts.length; i++) {
    let post = document.createElement("div");

    post.innerHTML = `
      <p style="margin:0; font-weight:bold;">${posts[i].title}</p>
      <p style="margin:0; font-size:12px;">${posts[i].date}</p>
    `;

    post.style.padding = "8px";
    post.style.cursor = "pointer";
    post.style.borderBottom = "1px solid #ddd";

    post.addEventListener("click", function () {
      document.querySelector("#postContent").innerHTML = posts[i].content;
    });

    sidebar.appendChild(post);
  }
}

var postsScreen = document.querySelector("#posts");
var postsOpen = document.querySelector("#postsopen");
var postsClose = document.querySelector("#postsclose");

postsOpen.addEventListener("click", function () {
  openWindow(postsScreen);
});

postsClose.addEventListener("click", function () {
  closeWindow(postsScreen);
});

var charactersScreen = document.querySelector("#characters");
var charactersOpen = document.querySelector("#charactersopen");
var charactersClose = document.querySelector("#charactersclose");

charactersOpen.addEventListener("click", function () {
  openWindow(charactersScreen);
  loadCharacters();
});

charactersClose.addEventListener("click", function () {
  closeWindow(charactersScreen);
});

var welcomeScreen = document.querySelector("#welcome");

function closeWindow(element) {
  element.style.display = "none";
}

function openWindow(element) {
  element.style.display = "flex";
  element.style.flexDirection = "column";
}

var welcomeScreenClose = document.querySelector("#welcomeclose");
var welcomeScreenOpen = document.querySelector("#welcomeopen");

welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});

function updateTime() {
  var currentTime = new Date().toLocaleString();
  var timeText = document.querySelector("#timeElement");
  timeText.innerHTML = currentTime;
}

updateTime();
setInterval(updateTime, 1000);

dragElement(document.getElementById("welcome"));

function dragElement(element) { var initialX = 0; var initialY = 0; var currentX = 0; var currentY = 0;

if (document.getElementById(element.id + "header")) {
  document.getElementById(element.id + "header").onmousedown = startDragging;
} else {
  element.onmousedown = startDragging;
}
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();

    initialX = e.clientX;
    initialY = e.clientY;

    document.onmouseup = stopDragging;
    document.onmousemove = moveElement;
  }

  function moveElement(e) { e = e || window.event; e.preventDefault();
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;

    initialX = e.clientX;
    initialY = e.clientY;

    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }
  function stopDragging() {
    document.onmouseup=null;
    document.onmousemove=null;
  }
}

dragElement(document.getElementById("posts"));
dragElement(document.getElementById("characters"));

loadSidebar();

var characters = [
  {
    name: "Shrek",
    species: "Ogre",
    personality: "Loyal, Funny, Protective",
    role: "Main protagonist",
    fact: "Lives in A swamp.",
    quote: "What are you doing in my swamp?!"
  },
  {
    name: "Donkey",
    species: "Donkey",
    personality: "Talkative, energetic, funny",
    role: "Shrek’s best friend",
    fact: "Voiced by Eddie Murphy.",
    quote: "I'm makin' waffles!"
  },
  {
    name: "Fiona",
    species: "Princess/Ogre",
    personality: "Brave, strong, independent",
    role: "Shrek’s partner",
    fact: "Can transform into an ogre at night.",   
    quote: "I would rather be myself."
  },
  {
    name: "Lord Farquaad",
    species: "Human",
    personality: "Arrogant, controlling",
    role: "Antagonist",
    fact: "Wants to marry Princess Fiona.",
    quote: "Some of you may die."
  },
  {
    name: "Puss in Boots",
    species: "Cat",
    personality: "Charming, fearless, clever",
    role: "Shrek’s ally",
    fact: "Has its own movie.",
    quote: "Fear me, if you dare."
  }
];

function loadCharacters() {
  var sidebar = document.querySelector("#charSidebar");

  for (let i = 0; i < characters.length; i++) {
    let item = document.createElement("div");

    item.classList.add("character-item");
    item.innerHTML = characters[i].name;

    item.addEventListener("click", function () {
      showCharacter(i);
    });

    sidebar.appendChild(item);
  }
}

function showCharacter(index) {
  var c = characters[index];

  document.querySelector("#charContent").innerHTML = `
    <h2>${c.name}</h2>
    <p><strong>Species:</strong> ${c.species}</p>
    <p><strong>Personality:</strong> ${c.personality}</p>
    <p><strong>Role:</strong> ${c.role}</p>
    <p><strong>Fact:</strong> ${c.fact}</p>
    <p><strong>Quote:</strong> "${c.quote}"</p>
  `;
}

function loadCharacters() {
  var sidebar = document.querySelector("#charSidebar");

  sidebar.innerHTML = "";

  for (let i = 0; i < characters.length; i++) {
    let item = document.createElement("div");

    item.classList.add("character-item");
    item.innerHTML = characters[i].name;

    item.addEventListener("click", function () {
      showCharacter(i);
    });

    sidebar.appendChild(item);
  }
}

var calculatorScreen = document.querySelector("#calculator");

var calculatorOpen = document.querySelector("#calculatoropen");

var calculatorClose = document.querySelector("#calculatorclose");

calculatorOpen.addEventListener("click", function () {
    openWindow(calculatorScreen);
});

calculatorClose.addEventListener("click", function () {
    closeWindow(calculatorScreen);
});

dragElement(document.getElementById("calculator"));

function add() {

    let a = Number(document.querySelector("#num1").value);
    let b = Number(document.querySelector("#num2").value);

    document.querySelector("#answer").innerHTML =
        "Answer: " + (a + b);
}

function subtract() {

    let a = Number(document.querySelector("#num1").value);
    let b = Number(document.querySelector("#num2").value);

    document.querySelector("#answer").innerHTML =
        "Answer: " + (a - b);
}

function multiply() {

    var a = Number(document.querySelector("#num1").value);
    var b = Number(document.querySelector("#num2").value);

    document.querySelector("#answer").innerHTML =
        "Answer: " + (a * b);
}

function divide() {

    var a = Number(document.querySelector("#num1").value);
    var b = Number(document.querySelector("#num2").value);

    document.querySelector("#answer").innerHTML =
        "Answer: " + (a / b);
}