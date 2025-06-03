// State Variables

// numbers in bank waiting to be sorted
const bankNum = [];
// Numbers that are odds passed in from bank
const oddNum = [];
// Numbers that are even passed in from bank
const evenNum = [];

// Render function to load in content into the html
function render() {
  // Retrieve the app element from the html
  const appElement = document.querySelector("#app");
  // Fill in content and place holders for the rest of the html
  appElement.innerHTML = html`
    <h1>Odds and Events</h1>
    <NumberForm></NumberForm>
    <main>
      <BankComponent></BankComponent>
      <OddsComponent></OddsComponent>
      <EvensComponent></EvensComponent>
    </main>
  `;

  // Create the form at the top of page
  appElement.querySelector("NumberForm").replaceWith("");

  // Fill in the content under the form component
  appElement.querySelector("BankComponent").replaceWith("");
  appElement.querySelector("OddsComponent").replaceWith("");
  appElement.querySelector("EvensComponent").replaceWith("");
}
render();
