// Get modal elements
const modal = document.getElementById("emailModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Form submission
document.getElementById("emailForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get the value from the textarea
  const emailInput = document.getElementById("email").value;
  const emailAddresses = emailInput.split(",").map((email) => email.trim());

  // Basic validation (you can enhance this as needed)
  const invalidEmails = emailAddresses.filter((email) => !validateEmail(email));

  if (invalidEmails.length > 0) {
    alert("Please enter valid email addresses: " + invalidEmails.join(", "));
    return;
  }

  alert("Request Submitted! Emails: ");
  modal.style.display = "none";
});

// Function to validate email format
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
  return re.test(email);
}
