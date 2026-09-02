async function signup(e) {
  e.preventDefault();
  const form = e.target;
  const fullname = form.fullname.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value;
  const fullnameError = document.getElementById("fullname-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  fullnameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  form.fullname.classList.remove("is-invalid");
  form.email.classList.remove("is-invalid");
  form.password.classList.remove("is-invalid");
  let isValid = true;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (fullname === "") {
    fullnameError.textContent = "Full name is required.";
    form.fullname.classList.add("is-invalid");
    isValid = false;
  } else if (fullname.length < 3) {
    fullnameError.textContent = "Full name must be at least 3 characters.";
    form.fullname.classList.add("is-invalid");
    isValid = false;
  }

  if (email === "") {
    emailError.textContent = "Email is required.";
    form.email.classList.add("is-invalid");
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    form.email.classList.add("is-invalid");
    isValid = false;
  }

  if (password === "") {
    passwordError.textContent = "Password is required.";
    form.password.classList.add("is-invalid");
    isValid = false;
  } else if (password.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters.";
    form.password.classList.add("is-invalid");
    isValid = false;
  }
  if (!isValid) {
    return;
  }

  localStorage.setItem("toastMessage", "User signup successfully");
  localStorage.setItem("toastTitle", "Success");
  localStorage.setItem("email", email);
  localStorage.setItem("isLoggedIn", true);

  await showToast("User signup successfully", "Success");
  setTimeout(() => {
    window.location.href = "/pages/courses.html";
  }, 500);
}
