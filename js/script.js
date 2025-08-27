const menuIcon = document.getElementById("menu-icon");
menuIcon.addEventListener("click", (evt) => {
  const menus = document.getElementById("menus");
  if (evt.target.name === "menu") {
    evt.target.name = "close";
    menus.classList.remove("end-[-200px]");
    menus.classList.add("end-0");
    document.getElementById("overlay").classList.remove("hidden");
  } else {
    evt.target.name = "menu";
    menus.classList.remove("end-0");
    menus.classList.add("end-[-200px]");
    document.getElementById("overlay").classList.add("hidden");
  }
});
