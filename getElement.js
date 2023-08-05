function getElement(selection, arr) {
  let selected;
  if (arr) {
    selected = [...document.querySelectorAll(selection)];
  } else {
    selected = document.querySelector(selection);
  }
  if (selected) return selected;
  throw new Error(
    `No element selected. Please check the selector "${selection}"`
  );
}

export default getElement;
