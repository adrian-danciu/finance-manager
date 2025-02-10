import { createComponent } from "../helpers.js";

export function createNavbar() {
  const navbar = createComponent("nav", {
    className: "bg-blue-500 p-4 text-white flex justify-between",
  });

  const title = createComponent("h1", {
    className: "text-2xl font-bold",
    text: "Finance Manager",
  });

  const addButton = createComponent("button", {
    className: "bg-white text-blue-500 px-4 py-2 rounded cursor-pointer",
    text: "+ Add Transaction",
    attributes: { id: "addTransactionBtn" },
    events: {
      click: () => {
        const modal = document.getElementById("modal");
        modal.style.display = "block";
      },
    },
  });

  navbar.appendChild(title);
  navbar.appendChild(addButton);

  return navbar;
}
