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

// ================= блокировщик кнопки =============================

// const inputValue = document.querySelectorAll(".validation-input");
// const form = document.querySelector(".feedback-form");
// const submitBtn = document.querySelector("#submit");

// checkFormValidation();

// function checkFormValidation() {
//   [...form.elements].forEach((elem) => {
//     if (elem.nodeName === "INPUT") {
//       elem.value.trim() === ""
//         ? toggleClass(elem, "invalid", "valid")
//         : toggleClass(elem, "valid", "invalid");
//     }console.dir(form.elements)
//   });
// }

// function toggleClass(ref, add, rem) {
//   ref.classList.add(add);
//   ref.classList.remove(rem);
// }

// inputValue.forEach((inputs) => {
//   inputs.addEventListener("blur", ({ target }) => {
//     target.value.trim() === ""
//       ? toggleClass(target, "invalid", "valid")
//       : toggleClass(target, "valid", "invalid");
//     if ([...inputValue].every(({ value }) => value)) {
//       return (submitBtn.disabled = false);
//     }
//     submitBtn.disabled = true;
//   });
// });

// form.addEventListener("submit", onChangeForm);

// function onChangeForm(event) {
//   event.preventDefault();

//   const {
//     elements: { email, name, phone, textarea },
//   } = event.currentTarget;

//   if (email.value === "" || name.value === "" || phone.value === "") {
//     return alert("зае... эта кнопка");
//   }
//   const fullForm = {
//     email: email.value,
//     name: name.value,
//     phone: phone.value,
//     textarea: textarea.value,
//   };
//   event.currentTarget.reset();
//   checkFormValidation();
//   console.log(fullForm);
// }
// function newFunction(x,y,event) {
//   console.log(event);
//   console.log(event(3,4))
// }
// newFunction(1, 3, calculator);

// function calculator(x,y) {
//   return x * y;
// }
