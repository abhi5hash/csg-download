function createAccordion(parentClass, titleText, options) {
  const parentElement = document.querySelector(`.${parentClass}`);
  if (!parentElement) return;

  const accordionDiv = document.createElement("div");
  accordionDiv.classList.add("accordion-dropdown");

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("accordion-title");
  titleDiv.textContent = titleText;

  const arrowSpan = document.createElement("span");
  arrowSpan.classList.add("accordion-arrow");

  arrowSpan.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6 9L12 15L18 9" stroke="#2A5F8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;

  titleDiv.appendChild(arrowSpan);

  const selectedOptionDiv = document.createElement("div");
  selectedOptionDiv.classList.add("selected-option");

  const optionsUl = document.createElement("ul");
  optionsUl.classList.add("accordion-options");

  options.forEach((option) => {
    const li = document.createElement("li");
    li.setAttribute("data-value", option.value);
    li.textContent = option.text;
    optionsUl.appendChild(li);
  });

  accordionDiv.appendChild(titleDiv);
  accordionDiv.appendChild(selectedOptionDiv);
  accordionDiv.appendChild(optionsUl);

  parentElement.appendChild(accordionDiv);
}

function accordionHandler(parentClass) {
  const parentClassElement = document.querySelector(`.${parentClass}`);
  if (!parentClassElement) return;

  const dropdown = parentClassElement.querySelector(`.accordion-dropdown`);
  const title = parentClassElement.querySelector(`.accordion-title`);
  const selectedOptionDiv =
    parentClassElement.querySelector(`.selected-option`);
  const options = parentClassElement.querySelectorAll(`.accordion-options li`);

  if (!dropdown || !title || !selectedOptionDiv || options.length === 0) return;

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
          optionItem.classList.toggle(
            `selected-list-item`,
            optionItem.textContent === selectedValue
          );
        });

      dropdown.classList.remove("active");
    });
  });
}

function downloadOptionsHandler(){
    document.querySelectorAll('input[name="download"]').forEach((radio) => {
        radio.addEventListener('change', (event) => {
          const selectedValue = event.target.value;
          console.log('Selected option:', selectedValue);
          // You can add logic here for when an option is selected
        });
      });      
}

document.addEventListener("DOMContentLoaded", function () {
  createAccordion(
    "tbc-download__select-account-type-container",
    "Select Account Type",
    [
      { value: "citigroup", text: "Citigroup Technology, Inc. (31909)" },
      { value: "account-2", text: "Account 2" },
      { value: "account-3", text: "Account 3" },
      { value: "account-4", text: "Account 4" },
    ]
  );
  accordionHandler("version-accordion-dropdown-container");
  accordionHandler("os-accordion-dropdown-container");
  accordionHandler("tbc-download__select-account-type-container");
});
