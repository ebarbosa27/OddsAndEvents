// === State Variables

// numbers in bank waiting to be sorted
const bankNums = [];
// Numbers that are odds passed in from bank
const oddNums = [];
// Numbers that are even passed in from bank
const evenNums = [];

// === Handler Functions
// Pushes a number from input to bank state
function addToBank(num) {
  bankNums.push(num);
}

function moveNextNumber() {
  const numToMove = bankNums[0];
  if (numToMove % 2 === 0) {
    evenNums.push(numToMove);
  } else {
    oddNums.push(numToMove);
  }
  bankNums.shift();
}

// === Component Functions
function NumberForm() {
  const formElement = document.createElement("form");
  formElement.innerHTML = `
    <label>
      Add a number to the bank
      <input name="number" />
      <button>Add number</button>
      <button>Add Random</button>
    </label>
    <div class="functionButtons">
      <button>Sort 1</button>
      <button>Sort All</button>
    </div>
  `;

  const buttonList = formElement.querySelectorAll("button");

  // Add number to number bank from input
  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const inputArray = formData.get("number").split(",");

    if (inputArray == "") return;

    inputArray.forEach((num) => {
      const numberInput = parseInt(num);
      // test if input number has a space between two numbers
      if (num.split(" ").length > 1) {
        alert(
          `Input "${num}" has spaces between numbers and will not be added.\n Please use commas to seperate numbers.`
        );
        return;
      }
      // test if input is not a number
      if (isNaN(numberInput)) {
        alert(`Input "${num}" is not a number and will not be added.`);
        return;
      }
      addToBank(numberInput);
      render();
    });
  });
  buttonList[1].addEventListener("click", (event) => {
    event.preventDefault();
    addToBank(Math.ceil(Math.random() * 99));
    render();
  });
  // Sort only 1 number from bank to odd or even
  buttonList[2].addEventListener("click", (event) => {
    event.preventDefault();
    moveNextNumber();
    render();
  });
  // Sort all numbers from bank to odd or even
  buttonList[3].addEventListener("click", (event) => {
    event.preventDefault();
    while (bankNums.length > 0) {
      moveNextNumber();
    }
    render();
  });
  return formElement;
}

function BankComponent() {
  const bankElem = document.createElement("div");
  bankElem.className = "numberShowcase";
  bankElem.innerHTML = `
    <h2>Bank</h2>
    <ul></ul>
  `;
  const listContElement = bankElem.querySelector("ul");
  bankNums.forEach((num) => {
    const listItemElement = document.createElement("li");
    listItemElement.innerHTML = `${num}`;
    listContElement.appendChild(listItemElement);
  });
  return bankElem;
}

function OddsComponent() {
  const oddsElem = document.createElement("div");
  oddsElem.className = "numberShowcase";
  oddsElem.innerHTML = `
    <h2>Odds</h2>
    <ul></ul>
  `;
  const listContElement = oddsElem.querySelector("ul");
  oddNums.forEach((num) => {
    const listItemElement = document.createElement("li");
    listItemElement.innerHTML = `${num}`;
    listContElement.appendChild(listItemElement);
  });
  return oddsElem;
}

function EvensComponent() {
  const evenElem = document.createElement("div");
  evenElem.className = "numberShowcase";
  evenElem.innerHTML = `
    <h2>Evens</h2>
    <ul></ul>
  `;
  const listContElement = evenElem.querySelector("ul");
  evenNums.forEach((num) => {
    const listItemElement = document.createElement("li");
    listItemElement.innerHTML = `${num}`;
    listContElement.appendChild(listItemElement);
  });
  return evenElem;
}

// === Render function
// Loads in content into the html
function render() {
  // Retrieve the app element from the html
  const appElement = document.querySelector("#app");
  // Fill in content and place holders for the rest of the html
  appElement.innerHTML = `
    <h1>Odds and Events</h1>
    <NumberForm></NumberForm>
    <main>
      <BankComponent></BankComponent>
      <OddsComponent></OddsComponent>
      <EvensComponent></EvensComponent>
    </main>
  `;

  // Create the form at the top of page
  appElement.querySelector("NumberForm").replaceWith(NumberForm());

  // Fill in the content under the form component
  appElement.querySelector("BankComponent").replaceWith(BankComponent());
  appElement.querySelector("OddsComponent").replaceWith(OddsComponent());
  appElement.querySelector("EvensComponent").replaceWith(EvensComponent());

  // Focus input on page render
  appElement.querySelector("input").focus();
}
render();
