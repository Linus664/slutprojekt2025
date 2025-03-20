document.addEventListener("DOMContentLoaded", () => {
  let games = [
    {
      title: "Sonic Colors",
      image: "games/Sonic-Colors.jpg",
    },
    {
      title: "Mario Kart 8",
      image: "games/Mario-Kart-8.jpg",
    },
    {
      title: "Pokemon Brilliant Diamond",
      image: "games/Pokemon-Brilliant-Diamond.jpg",
    },
    {
      title: "Pokemon Shining Pearl",
      image: "games/Pokemon-Shining-Pearl.jpg",
    },
    {
      title: "Pokemon Let's Go Pikachu",
      image: "games/Pokemon-Let's-Go-Pikachu.jpg",
    },
    {
      title: "Pokemon Sword",
      image: "games/Pokemon-Sword.jpg",
    },
    {
      title: "Super Smash Bros",
      image: "games/Super-Smash-Bros.jpg",
    },
    {
      title: "Zelda",
      image: "games/Zelda.jpg",
    },
    {
      title: "Metroid",
      image: "games/Metroid.jpg",
    },
  ];
  const savedGames = JSON.parse(localStorage.getItem("games")) || {};
  games.forEach((game) => {
¨    game.favourite = savedGames[game.title];
  });
 ¨ const container = document.getElementById("cardContainer");

  if (!window.location.pathname.includes("browse.html")) return;

  games.forEach((game) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${game.image}" class="game-preview">
      <p class="game-title">${game.title}</p>
      <span class="favorite-star ${
        game.favorite ? "favorited" : ""
      }" data-title="${game.title}">&#9733;</span>
      <button class="borrow-button">Borrow</button>
    `;

    container.appendChild(card);
  });
  document.querySelectorAll(".favorite-star").forEach((star) => {
    star.addEventListener("click", (event) => {
      const title = event.target.getAttribute("data-title");
      const isFavorited = event.target.classList.toggle("favorited");
      savedGames[title] = isFavorited;
      localStorage.setItem("games", JSON.stringify(savedGames));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  hamburger.addEventListener("click", () => {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", (event) => {
    if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
      menu.style.display = "none";
    }
  });
});
