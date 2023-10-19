document.addEventListener("DOMContentLoaded", () => {
  const balanceElement = document.getElementById("balance");
  const transactionList = document.getElementById("transaction-list");
  const textInput = document.getElementById("text");
  const amountInput = document.getElementById("amount");
  const addTransactionBtn = document.getElementById("add-transaction");
  const resetButton = document.getElementById("reset-button");
  const printButton = document.getElementById("print-button");
  const currentDate = document.getElementById("current-date");

  let balance = 0;

  // Reset button event listener
  resetButton.addEventListener("click", () => {
      resetBalance();
  });

  // Print button event listener
  printButton.addEventListener("click", () => {
      window.print();
  });

  addTransactionBtn.addEventListener("click", () => {
      const text = textInput.value;
      const amount = parseFloat(amountInput.value);

      if (text && amount) {
          updateBalance(amount);
          addTransaction(text, amount);
      }
  });

  function updateBalance(amount) {
      balance += amount;
      balanceElement.textContent = balance.toFixed(2);
  }

  function addTransaction(text, amount) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
          <span>${text}</span>
          <span>${amount.toFixed(2)}</span>
      `;
      transactionList.appendChild(listItem);

      textInput.value = "";
      amountInput.value = "";
  }

  function resetBalance() {
      balance = 0;
      balanceElement.textContent = "0.00";
      transactionList.innerHTML = "";
  }

  // Display the current date
  const today = new Date();
  currentDate.textContent = `Today's Date: ${today.toLocaleDateString()}`;
});
