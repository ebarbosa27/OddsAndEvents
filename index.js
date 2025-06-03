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
  return containerElement;
}

function BankComponent() {
  const bankElem = document.createElement("div");
  bankElem.style = "";
  return bankElem;
}

function OddsComponent() {
  const oddsElem = document.createElement("div");
  return oddsElem;
}

function EvensComponent() {
  const evenElem = document.createElement("div");
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
