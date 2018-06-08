var inputs = document.querySelectorAll("input");
var inputWrappers = document.querySelectorAll(".input");

function createErrorTooltip(el) {
  var element = el;
  var error = document.createElement("span");
  error.innerText = element.dataset.error;
  error.classList.add("requirements");
  element.append(error);
}

function validateInput(el) {
  el.addEventListener("input", function(e) {
    var el = e.target;
    // find the error message span inside of the input wrapper
    // here we are using the event.target (e.target)
    // which is the input, and we are saying,
    // "Hey, what is your parent?"
    // Then we are using the querySelector method on that parent element
    // to find the error message element that is pertinent
    var error = el.parentElement.querySelector(".requirements");
    // add the data-error message from the input
    // to the error message dynamically
    error.innerText = el.dataset.error;

    // if the input field uses a pattern
    // check to see if there is a mismatch
    if (el.pattern) {
      if (el.validity.patternMismatch) {
        el.classList.remove("valid");
        error.classList.add("active");
      } else {
        el.classList.add("valid");
        error.classList.remove("active");
      }
      // otherwise, use the standard valid check
      // to determine validity status
    } else {
      if (el.validity.valid) {
        el.classList.add("valid");
        error.classList.remove("active");
      } else {
        el.classList.remove("valid");
        error.classList.add("active");
      }
    }
  });
}

// Create the error tooltips
for (let i = 0; i < inputWrappers.length; i++) {
  const element = inputWrappers[i];
  (function() {
    return createErrorTooltip(element);
  })();
}

for (let i = 0; i < inputs.length; i++) {
  const element = inputs[i];
  (function() {
    return validateInput(element);
  })();
}

// // Telephone validation using the standard HTML Native form validation
// var telephoneValidation = document.getElementById("tel");

// telephoneValidation.addEventListener("input", function() {
//   //   console.log(telephoneValidation.validity);
//   if (telephoneValidation.validity.patternMismatch) {
//     telephoneValidation.setCustomValidity(
//       "Please enter a phone number following the xxx-xxx-xxxx format"
//     );
//   } else {
//     telephoneValidation.setCustomValidity("");
//   }
// });
