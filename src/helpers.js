export function createComponent(
  tag,
  { className = "", text = "", attributes = {}, children = [], events = {} }
) {
  const component = document.createElement(tag);

  if (className) {
    component.className = className;
  }

  if (text) {
    component.textContent = text;
  }

  Object.entries(attributes).forEach(([key, value]) => {
    component.setAttribute(key, value);
  });

  Object.entries(events).forEach(([key, value]) => {
    component.addEventListener(key, value);
  });

  return component;
}
