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

  const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
  const borrowedGames = JSON.parse(localStorage.getItem("borrowed")) || {};

  const currentPage = window.location.pathname;

  function renderGames(gamesToRender) {
    const container = document.getElementById("cardContainer");
    container.innerHTML = "";

    if (gamesToRender.length === 0) {
      container.innerHTML = "<p>No games to display.</p>";
      return;
    }

    gamesToRender.forEach((game) => {
      const isFavorited = savedFavorites[game.title];
      const isBorrowed = borrowedGames[game.title];

      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
          <img src="${game.image}" class="game-preview">
          <p class="game-title">${game.title}</p>
          <span class="favorite-star ${
            isFavorited ? "favorited" : ""
          }" data-title="${game.title}">&#9733;</span>
          <button class="borrow-button" data-title="${game.title}">
            ${isBorrowed ? "Return" : "Borrow"}
          </button>
        `;

      container.appendChild(card);
    });

    document.querySelectorAll(".favorite-star").forEach((star) => {
      star.addEventListener("click", (event) => {
        const title = event.target.getAttribute("data-title");
        const toggledFavorite = event.target.classList.toggle("favorited");

        if (toggledFavorite) {
          savedFavorites[title] = true;
        } else {
          delete savedFavorites[title];
        }

        localStorage.setItem("favorites", JSON.stringify(savedFavorites));

        if (currentPage.includes("favorites.html")) {
          renderFavorites();
        }
      });
    });

    document.querySelectorAll(".borrow-button").forEach((button) => {
      button.addEventListener("click", (event) => {
        const title = event.target.getAttribute("data-title");
        const currentlyBorrowed = borrowedGames[title];

        if (currentlyBorrowed) {
          delete borrowedGames[title];
          event.target.textContent = "Borrow";
        } else {
          borrowedGames[title] = true;
          event.target.textContent = "Return";
        }

        localStorage.setItem("borrowed", JSON.stringify(borrowedGames));

        if (currentPage.includes("borrowed.html")) {
          renderBorrowed();
        }
      });
    });
  }

  if (currentPage.includes("browse.html")) {
    renderGames(games);
  }

  if (currentPage.includes("favorites.html")) {
    renderGames(games.filter((game) => savedFavorites[game.title]));
  }

  if (currentPage.includes("borrowed.html")) {
    renderGames(games.filter((game) => borrowedGames[game.title]));
  }

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
