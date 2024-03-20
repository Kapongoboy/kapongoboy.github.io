function closeForMobile() {
  const isMobile =
    /Mobi|Android|iPh(one|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      navigator.userAgent,
    );
  if (isMobile) {
    const x = document.getElementById("navlinks");
    x.style.display = "none";
  }
}

function loadBurger() {
  let x = document.getElementById("navlinks");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function loadNavListeners() {
  const active = document.querySelector("#active");
  const blog = document.querySelector("#blog");
  const about = document.querySelector("#about");
  const showcase = document.querySelector("#showcase");

  active.addEventListener("click", () => {
    main();
    closeForMobile();
  });

  blog.addEventListener("click", () => {
    loadBlog();
    closeForMobile();
  });

  about.addEventListener("click", () => {
    loadAbout();
    closeForMobile();
  });

  showcase.addEventListener("click", () => {
    loadShowcase();
    closeForMobile();
  });
}
function loadBlog() {
  const mainDiv = document.getElementById("main");
  const content = `
    <div>
      <h1>I want everything and I want to want less</h1>
    </div>
    `;
  mainDiv.innerHTML = content;
}

function loadContact() {
  const mainDiv = document.getElementById("main");
  const content = `
    <div>
      <h1>To be gorgeous, you must first be seen</h1>
    </div>
    `;
  mainDiv.innerHTML = content;
}

function loadAbout() {
  const mainDiv = document.getElementById("main");
  const content = `
    <div>
      <h1>What I know, I know from books, and books lie</h1>
      <div class="dark-back">
        <h3>I know very little, about very few things</h3>
        <h3>The things I do know, might interest you</h3>
        <h3>No I'm not on my fourth cup of coffee</h3>
        <h3>I only drink Chicorée</h3>
      </div>
      <div class="dark-back">
        <p class="text-small">
          Why am I here? I could ask you the same thing.
          <br>
          <br>
          The truth is I don't particularly long for the halcyon days, if there ever was,
          of the internet or computing.
          Sure, there are the memories of playing Pinball for 8 hours straight on the family computer,
          periodically interrupted by the neighborhood trouble maker inviting me for a round
          of <em>WWE</em>, or trying to woohoo in the sims 2 with my parents in the room without
          getting caught. And these memories, paltry as they are, are my treasures.
          <br>
          <br>
          What was I talking about? Ah yes, I'm bad at web design and this is my excuse
          for why my site looks like it's straight out of the rejected page for the awwwards.
          I was going to go on and on about how having the visual appetite of a Steve Jobs impersonator
          isn't damning evidence pointing to my creative rigidity, but in the odd chance that you do want to know
          about me
        </p>
      </div>
      <div class="dark-back">
        <h3>I am <em>allegedly</em> an adult man.</h3>
        <h3>Depending on who you ask, I am an artist, though I wouldn't claim to be a good one</h3>
        <h3>I've had the great misfortune of having studied electronic engineering. On the brightside I'm pretty good at python</h3>
        <h3>I lurk on most places on the internet, but you can reach me on discord @generalisinghamster</h3>
      </div>
    </div>
    `;
  mainDiv.innerHTML = content;
}

function loadShowcase() {
  const mainDiv = document.getElementById("main");
  const content = `
    <div>
      <h1>There is no perfection only life</h1>
    </div>
    `;
  mainDiv.innerHTML = content;
}

function main() {
  let image = "";
  const body = document.getElementsByTagName("body")[0];
  const nav = document.querySelector(".nav a");
  const mainDiv = document.getElementById("main");
  image = "aku_no_hana.webp";
  body.style.backgroundImage = "none";
  body.style.color = "black";
  mainDiv.style.fontSize = "1.1rem";
  mainDiv.style.fontWeight = "normal";
  mainDiv.style.lineHeight = "1.5";
  nav.style.color = "black";
  const content = `
    <div>
      <h1 class="world-of">World of</h1>
      <h1 class="gh-title">Plamedi Luis</h1>
      <img src="./assets/${image}" alt="main picture">
    </div>
`;
  mainDiv.innerHTML = content;
}

main();
loadNavListeners();
