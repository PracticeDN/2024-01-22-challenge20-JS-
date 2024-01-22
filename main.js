const scores = document.querySelectorAll(".score");

function getRandomScore() {
  scores.forEach((score) => {
    const randomNum = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
    score.textContent = randomNum;
  });
}

function displayHighScorers() {
  const highScorersList = document.querySelector("ul");
  const rows = document.querySelectorAll("table tr");

  rows.forEach((row) => {
    const name = row.querySelector("td:first-child")?.textContent;
    const score = parseInt(row.querySelector(".score")?.textContent);

    if (score > 75) {
      const listItem = document.createElement("li");
      listItem.textContent = `${name}: ${score}`;
      highScorersList.appendChild(listItem);
    }
  });
}

getRandomScore();
displayHighScorers();
