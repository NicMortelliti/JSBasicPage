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

    // Append a new text line
    createElements(counterNumber);

    setTimeout(() => (counterLabel.innerText = ""), 1000);
  });
}

function createElements(number) {
  let existingElement = document.getElementById("hr1");
  let container = document.createElement("div");
  let p = document.createElement("p");
  container.appendChild(p);
  existingElement.insertAdjacentElement("afterEnd", container);

  p.after(`This is text #${number}`);
}

handleClickCounter();
