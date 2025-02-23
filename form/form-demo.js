function togglePaymentDetails(e) {
  // get a reference to the form. We can access all the named form inputs through the form element.
  const theForm = document.querySelector("#checkoutForm");
  // we will also need the creditCardContainer and paypalUsernameContainer
  const creditCardContainer = document.querySelector(
    "#creditCardNumberContainer"
  );
  const paypalContainer = document.querySelector("#paypalUsernameContainer");
  const creditInput = document.querySelector("#creditCardNumber");
  const paypalInput = document.querySelector("#paypalUsernameContainer");

  let value = e.target.value;
  paypalContainer.classList.add("hide");
  creditCardContainer.classList.add("hide");

  if (value == "creditCard") {
    creditCardContainer.classList.remove("hide");
    creditInput.required = true;
  } else if (value == "paypal") {
    paypalContainer.classList.remove("hide");
    paypalInput.required = true;
  }
}

function showErrors(errors) {
  const errorEl = document.querySelector(".errors");
  const html = errors.map((error) => `<p>${error}</p>`);
  errorEl.innerHTML = html.join("");
}
