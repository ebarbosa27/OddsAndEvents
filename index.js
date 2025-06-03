// === State Variables

// numbers in bank waiting to be sorted
const bankNum = [];
// Numbers that are odds passed in from bank
const oddNum = [];
// Numbers that are even passed in from bank
const evenNum = [];

// Handler Functions

// === Component Functions
function NumberForm() {
  const formElement = document.createElement("form");
  formElement.innerHTML = `
    <label></label>
    <input />
    <button>Add number</button>
    <button>Sort 1</button>
    <button>Sort All</button>
  `;

  const buttonList = formElement.querySelectorAll("button");

  // Add number to number bank from input
  buttonList[0].addEventListener("click", (event) => {});
  // Sort only 1 number from bank to odd or even
  buttonList[1].addEventListener("click", (event) => {});
  // Sort all numbers from bank to odd or even
  buttonList[2].addEventListener("click", (event) => {});

  return formElement;
}

function BankComponent() {
  const bankElem = document.createElement("div");
  bankElem.className = "";
  return bankElem;
}

function OddsComponent() {
  const oddsElem = document.createElement("div");
  oddsElem.className = "";
  return oddsElem;
}

function EvensComponent() {
  const evenElem = document.createElement("div");
  evenElem.className = "";
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
}
render();
