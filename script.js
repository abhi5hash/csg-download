function accordionHandler(parentClass) {
  const parentClassElement = document.querySelector(`.${parentClass}`);
  const dropdown = parentClassElement.querySelector(`.accordion-dropdown`);
  const title = parentClassElement.querySelector(`.accordion-title`);
  const selectedOptionDiv = parentClassElement.querySelector(`.selected-option`);
  const options = parentClassElement.querySelectorAll(`.accordion-options li`);

  title.addEventListener("click", () => {
    dropdown.classList.toggle("active");
    selectedOptionDiv.style.display =
      selectedOptionDiv.style.display === "block" ? "none" : "block";
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      const selectedValue = option.textContent;

      selectedOptionDiv.textContent = selectedValue;
      selectedOptionDiv.style.display = "block";
      title.style.borderBottom = "1px solid #ccc";

      parentClassElement
        .querySelectorAll(`.accordion-options li`)
        .forEach((optionItem) => {
          if (optionItem.textContent === selectedValue) {
            optionItem.classList.add(`selected-list-item`);
          } else {
            optionItem.classList.remove(`selected-list-item`);
          }
        });

      dropdown.classList.remove("active");
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
    accordionHandler('version-accordion-dropdown-container');
    accordionHandler('os-accordion-dropdown-container');
});
