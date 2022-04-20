const btnDropdown = document.getElementById("burger-icon");
const menuDropdown = document.getElementById("menu-dropdown");

btnDropdown.addEventListener("click", (e) => {
  if (menuDropdown.classList.contains("hidden")) {
    menuDropdown.classList.remove("hidden");
  } else {
    menuDropdown.classList.add("hidden");
  }
});
