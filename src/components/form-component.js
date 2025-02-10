import { createComponent } from "../helpers.js";

export function createForm(formInputs, submitAction) {
  const form = createComponent("form", {
    className: "bg-white p-6  flex flex-col gap-4",
    attributes: { id: "form" },
  });

  formInputs.forEach((input) => {
    if (input.type === "select") {
      const selectField = createComponent("select", {
        className: "border border-gray-400 p-2 rounded",
        attributes: {
          name: input.name,
          placeholder: input.placeholder,
        },
      });
      input.options.forEach((option) => {
        const optionField = createComponent("option", {
          text: option.text,
          attributes: {
            value: option.value,
          },
        });
        selectField.appendChild(optionField);
      });
      form.appendChild(selectField);
      return;
    }

    const inputField = createComponent("input", {
      className: "border border-gray-400 p-2 rounded",
      attributes: {
        type: input.type,
        name: input.name,
        placeholder: input.placeholder,
      },
    });

    form.appendChild(inputField);
  });

  if (submitAction) {
    const submitButton = createComponent("button", {
      className: "bg-blue-500 text-white p-2 rounded cursor-pointer",
      text: "Submit",
      events: {
        click: submitAction,
      },
    });

    submitButton.type = "button";
    form.appendChild(submitButton);
  }

  return form;
}
