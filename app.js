// VARIABLES
const sumbitBtn = document.querySelector("#btn");
const rateNum = document.querySelectorAll("li");
const innerContainer = document.querySelector(".inner-container");

let selectedValue = 0;

// FUNCTIONS
function submitRating() {
  if (selectedValue > 0) {
    submitContainer = document.createElement("div");
    innerContainer.replaceWith(submitContainer);
    submitContainer.classList.add("submit-container");
    submitContainer.innerHTML = `
    <img src="./images/illustration-thank-you.svg" alt="thank-you-icon" class="card-img"/>
      <div class="selection">
        <p class="selection-p">You selected ${selectedValue} out of 5</p>
      </div>
      <div class="heading">
        <h3>Thank you!</h3>
      </div>
      <div class="description">
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>

  `;
  } else {
    alert("Please select a rating");
  }
}

// LOOP THROUGH THE LIST

rateNum.forEach((rate) => {
  rate.addEventListener("click", () => {
    selectedValue = rate.innerText;
    rateNum.forEach((rate) => {
      rate.classList.remove("activeItem");
    });
    rate.classList.add("activeItem");
  });
});

// EVENT LISTENERS
sumbitBtn.addEventListener("click", submitRating);
