const modal = document.getElementById("tbc-download-email-modal__emailModal");
const btn = document.getElementById("tbc-download-email-modal__openModal");
const span = document.getElementsByClassName(
  "tbc-download-email-modal__close"
)[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document
  .getElementById("tbc-download-email-modal__emailForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const emailInput = document.getElementById(
      "tbc-download-email-modal__email"
    ).value;
    const emailAddresses = emailInput.split(",").map((email) => email.trim());

    const invalidEmails = emailAddresses.filter(
      (email) => !validateEmail(email)
    );

    if (invalidEmails.length > 0) {
      alert("Please enter valid email addresses");
      return;
    }

    alert("Request Submitted! Emails");
    modal.style.display = "none";
  });

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
