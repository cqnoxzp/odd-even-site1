function startOddEven(choice) {
  const number = Math.floor(Math.random() * 10) + 1;
  const isOdd = number % 2 === 1;

  const card = document.getElementById("card");
  const numberEl = document.getElementById("number");
  const resultEl = document.getElementById("result");

  numberEl.textContent = number;

  const isWin =
    (choice === "odd" && isOdd) ||
    (choice === "even" && !isOdd);

  resultEl.className = "result";

  if (isWin) {
    resultEl.textContent = "정답입니다! 🎉";
    resultEl.classList.add("win");
  } else {
    resultEl.textContent = "틀렸어요 😢";
    resultEl.classList.add("lose");
  }

  card.classList.remove("hidden");
}
