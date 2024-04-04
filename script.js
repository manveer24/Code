const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const addBtns = document.querySelectorAll(".btn-adc");
const Checkout = document.querySelectorAll(".btn-check");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (formStepsNum === 0) {
      // Validate program selection
      const programSelect = document.getElementById("subjects");
      if (programSelect.value === "") {
        alert("Please select a program");
        return;
      }
    } else if (formStepsNum === 1) {
      // Validate subject selection
      const subjectSelect = document.getElementById("subjects");
      if (subjectSelect.value === "") {
        alert("Please select a subject");
        return;
      }
    }
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

Checkout.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

addBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

// Update total price when program selection changes
document.getElementById("subjects").addEventListener("change", function () {
  const selectedOption = this.options[this.selectedIndex];
  const price = parseFloat(selectedOption.getAttribute("data-price"));
  document.getElementById("total-price").textContent = price;
});
