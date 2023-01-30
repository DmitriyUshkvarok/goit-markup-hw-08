const inputValue = document.querySelectorAll(".validation-input");
const form = document.querySelector(".feedback-form");
const submitBtn = document.querySelector("#submit");

inputValue.forEach((inputs) => {
  inputs.addEventListener("blur", (event) => {
    if (event.target.value === "") {
      inputs.classList.add("invalid");
      inputs.classList.remove("valid");
    } else {
      inputs.classList.add("valid");
      inputs.classList.remove("invalid");
    }
  });
});

form.addEventListener("submit", onChangeForm);

function onChangeForm(event) {
  event.preventDefault();

  const {
    elements: { email, name, phone, textarea, checkbox },
  } = event.currentTarget;

  if (
    email.value === "" ||
    name.value === "" ||
    phone.value === "" ||
    checkbox.checked === false
  ) {
    return alert("Заполните обязательные поля");
  }
  console.log(form.elements);
  const fullForm = {
    email: email.value,
    name: name.value,
    phone: phone.value,
    textarea: textarea.value,
  };
  console.dir(event.currentTarget.elements);
  event.currentTarget.reset();
  console.log(fullForm);
}
