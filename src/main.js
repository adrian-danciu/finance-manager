import { createForm } from "./components/form-component.js";
import { createModal } from "./components/modal-component.js";
import { createNavbar } from "./components/navbar-component.js";
import { transactionFormConfig } from "./configs.js";

const app = document.getElementById("app");

const transactionForm = createForm(
  transactionFormConfig.inputFields,
  transactionFormConfig.submitAction
);

app.append(createModal(transactionForm), createNavbar());
