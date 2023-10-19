document.addEventListener("DOMContentLoaded", () => {
  const balanceElement = document.getElementById("balance");
  const transactionList = document.getElementById("transaction-list");
  const textInput = document.getElementById("text");
  const amountInput = document.getElementById("amount");
  const addTransactionBtn = document.getElementById("add-transaction");

  let balance = 0;

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
});
