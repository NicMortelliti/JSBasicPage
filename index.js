const counterBtn = document.getElementById("click-me");
const counterLabel = document.getElementById("click-counter");

function handleClickCounter() {
  let counterNumber = 0;

  // Set up event listener
  counterBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Increment counterNumber
    counterNumber += 1;

    // Update string
    counterLabel.innerText = `Clicked ${counterNumber} times`;
  });
}

handleClickCounter();
