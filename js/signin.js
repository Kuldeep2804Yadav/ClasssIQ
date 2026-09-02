const signinForm = document.querySelector("form");

async function signin(e) {
  e.preventDefault();

  if (!signinForm) return;

  const email = signinForm.email.value.trim();
  const password = signinForm.password.value;
  const emailInput = signinForm.email;
  const passwordInput = signinForm.password;
  const passwordError = document.getElementById("password-error");
  const emailError = document.getElementById("email-error");

  emailInput.classList.remove("is-invalid");
  passwordInput.classList.remove("is-invalid");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    emailInput.classList.add("is-invalid");
    emailError.textContent = "please enter the email";
    return;
  }

  if (!emailRegex.test(email)) {
    emailInput.classList.add("is-invalid");
    emailError.textContent = "email is not valid";
    return;
  }

  if (!password) {
    passwordInput.classList.add("is-invalid");
    passwordError.textContent = "password id required";
    return;
  }

  localStorage.setItem("email", email);
  localStorage.setItem("toastMessage", "User signin successfully");
  localStorage.setItem("toastTitle", "Success");
  localStorage.setItem("isLoggedIn", true);
  await showToast("Signed in successfully", "Success");

  setTimeout(() => {
    window.location.href = "/pages/courses.html";
  }, 500);
}

if (signinForm) {
  signinForm.addEventListener("submit", signin);
}
