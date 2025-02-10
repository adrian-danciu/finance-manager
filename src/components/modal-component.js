import { createComponent } from "../helpers.js";

export function createModal(dynamicContent) {
  const modal = createComponent("div", {
    className:
      "fixed top-0 left-0 w-full h-full bg-black opacity-60 flex justify-center items-center hidden rounded shadow-lg",
    attributes: { id: "modal" },
  });

  const modalContent = createComponent("div", {
    className:
      "bg-white p-4 rounded fixed w-2/5 z-10 overflow-y-auto shadow-lg top-1/3 left-1/3 p-4",
  });

  const upperContainer = createComponent("div", {
    className: "flex justify-between",
  });

  const title = createComponent("h2", {
    className: "text-xl font-bold",
    text: "Add Transaction",
  });

  const closeButton = createComponent("button", {
    className: "text-red-500 text-bold text-lg float-right cursor-pointer",
    text: "X",
    events: {
      click: () => {
        modal.style.display = "none";
      },
    },
  });

  modal.appendChild(modalContent);
  upperContainer.appendChild(title);
  upperContainer.appendChild(closeButton);
  modalContent.appendChild(upperContainer);
  if (dynamicContent) modalContent.appendChild(dynamicContent);

  return modal;
}
