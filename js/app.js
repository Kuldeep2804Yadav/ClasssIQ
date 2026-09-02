const isPage = window.location.pathname.includes("/pages/");
const path = isPage ? "../" : "./";

async function loadComponent(elementId, filePath) {
  const element = document.getElementById(elementId);
  if (!element) return;
  try {
    const response = await fetch(filePath);

    if (!response.ok) {
      throw new Error(`Failed to load ${filePath}`);
    }
    element.innerHTML = await response.text();
  } catch (error) {
    console.log(error);
  }
}

async function showToast(message, title = "Notification") {
  const toastElement = document.getElementById("appToast");
  if (!toastElement) {
    await loadComponent("toast", `${path}components/toast.html`);
  }
  const toastNode = document.getElementById("appToast");
  const toastMessage = document.getElementById("toast-message");
  const toastTitle = document.getElementById("toast-title");

  if (!toastNode || !toastMessage || !toastTitle) {
    return;
  }
  toastMessage.textContent = message;
  toastTitle.textContent = title;
  const toast = bootstrap.Toast.getOrCreateInstance(toastNode);
  toast.show();
}

function showStoredToast() {
  const message = localStorage.getItem("toastMessage");
  const title = localStorage.getItem("toastTitle") || "Notification";
  if (!message) return;
  showToast(message, title);
  localStorage.removeItem("toastMessage");
  localStorage.removeItem("toastTitle");
}

loadComponent("navbar", `${path}components/navbar.html`);
loadComponent("footer", `${path}components/footer.html`);
loadComponent("toast", `${path}components/toast.html`).then(() =>
  showStoredToast(),
);
