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
  const container = document.getElementById("cardContainer");

  games.forEach((game) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${game.image}" class="game-preview">
      <p class="game-title">${game.title}</p>
      <button class="borrow-button">Borrow</button>
    `;

    container.appendChild(card);
  });
});
