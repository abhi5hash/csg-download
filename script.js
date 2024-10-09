const accordions = document.querySelectorAll(
  ".download-options-accordion__accordion"
);

accordions.forEach(function (acc) {
  acc.addEventListener("click", function () {
    this.classList.toggle("active");

    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});
