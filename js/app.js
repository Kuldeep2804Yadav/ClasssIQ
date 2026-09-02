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
loadComponent("navbar", "./components/navbar.html");
loadComponent("footer", "./components/footer.html");
