const submit = document.getElementById("submit");
const form = document.querySelector("form");
const email = document.getElementById("email");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  form.classList.remove("error");
  !email.value || !email.validity.valid
    ? form.classList.add("error")
    : (email.value = "");
  setTimeout(() => {
    form.classList.remove("error");
  }, 2000);
});
