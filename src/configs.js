import { v4 as uuidv4 } from "../node_modules/uuid/dist/esm-browser/index.js";

export const transactionFormConfig = {
  inputFields: [
    {
      type: "text",
      name: "title",
      placeholder: "Title",
    },
    {
      type: "number",
      name: "amount",
      placeholder: "Amount",
    },
    {
      type: "select",
      name: "transaction-type",
      placeholder: "Transaction Type",
      options: [
        {
          value: "income",
          text: "Income",
        },
        {
          value: "expense",
          text: "Expense",
        },
      ],
    },
    {
      type: "date",
      name: "date",
      placeholder: "Date",
    },
  ],
  submitAction: () => {
    const form = document.getElementById("form");
    const modal = document.getElementById("modal");
    const formData = new FormData(form);
    const transaction = {};
    for (let [key, value] of formData.entries()) {
      transaction[key] = value;
    }
    transaction.id = uuidv4();
    console.log(transaction);
    form.reset();
    modal.style.display = "none";
  },
};
