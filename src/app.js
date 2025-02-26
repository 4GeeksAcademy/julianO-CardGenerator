function generateCard() {
  const suits = ["heart", "spade", "diamond", "club"];
  const suitSymbols = { heart: "♥", spade: "♠", diamond: "♦", club: "♣" };
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const randomValue = values[Math.floor(Math.random() * values.length)];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];

  const card = document.getElementById("card");
  card.className = `card ${randomSuit}`;
  card.querySelector(".value").textContent = randomValue;
  card.querySelectorAll(".suit").forEach(el => el.textContent = suitSymbols[randomSuit]);
}

window.onload = generateCard;
