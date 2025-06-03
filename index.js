// === State Variables

// numbers in bank waiting to be sorted
const bankNums = [];
// Numbers that are odds passed in from bank
const oddNums = [];
// Numbers that are even passed in from bank
const evenNums = [];
//
let numToSort = 0;

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
  formElement.className = "numberForm";
  formElement.innerHTML = `
    <label>
      Add a number to the bank
      <input name="number" placeholder="Number" />
    </label>
    <button>Add number</button>
    <button>Add Random</button>
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

  // Adds a random number to the bank state
  buttonList[1].addEventListener("click", (event) => {
    event.preventDefault();
    addToBank(Math.ceil(Math.random() * 99));
    render();
  });

  return formElement;
}

function SortButtonsComponent() {
  const formElement = document.createElement("form");
  formElement.className = "sortForm";
  formElement.innerHTML = `
    <button>Sort 1</button>
    <button>Sort All</button>
    <label>
      Quantity:
      <input name="sortQuantity" placeholder="#" />
      <button>Sort</button>
    </label>
  `;

  const buttonList = formElement.querySelectorAll("button");

  // Sort only 1 number from bank to odd or even
  buttonList[0].addEventListener("click", (event) => {
    event.preventDefault();
    moveNextNumber();
    render();
  });

  // Sort all numbers from bank to odd or even
  buttonList[1].addEventListener("click", (event) => {
    event.preventDefault();
    while (bankNums.length > 0) {
      moveNextNumber();
    }
    render();
  });

  // Sort input number of values from bank to odd or even
  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const sortQuantity = formData.get("sortQuantity").trim();
    if (sortQuantity == "") return;

    // test to make sure quantity is a valid input
    if (sortQuantity.split(" ").length > 1) {
      alert(
        `"${sortQuantity}" is not a valid sort input.\n Make sure the quantity to sort is a single number.`
      );
      return;
    }

    let sortNum = parseInt(sortQuantity);
    // update numToSort state variable to keep after submitting submit button
    numToSort = sortNum;
    while (bankNums.length > 0 && sortNum > 0) {
      moveNextNumber();
      sortNum--;
    }

    render();
  });

  // updating value in sort input of previous input
  const inputElement = formElement.querySelector("input");
  inputElement.value = numToSort;

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
    <SortButtons></SortButtons>
    <main>
      <BankComponent></BankComponent>
      <OddsComponent></OddsComponent>
      <EvensComponent></EvensComponent>
    </main>
  `;

  // Create the form at the top of page
  appElement.querySelector("NumberForm").replaceWith(NumberForm());
  // Create the sort buttons under the form
  appElement.querySelector("SortButtons").replaceWith(SortButtonsComponent());

  // Fill in the content under the form component
  appElement.querySelector("BankComponent").replaceWith(BankComponent());
  appElement.querySelector("OddsComponent").replaceWith(OddsComponent());
  appElement.querySelector("EvensComponent").replaceWith(EvensComponent());

  // Focus input on page render
  appElement.querySelector("input").focus();
}
render();
