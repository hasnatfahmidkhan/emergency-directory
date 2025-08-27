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

// Main Section
const callBtns = document.querySelectorAll(".call-btn");

callBtns.forEach((callBtn) => {
  callBtn.addEventListener("click", (evt) => {
    const serviceCard =
      evt.currentTarget.parentElement.parentElement.parentElement;
    const serviceTitle = serviceCard.querySelector(".service-title").innerText;
    const serviceNumber = serviceCard.querySelector(".service-number").innerText;
    const date = new Date();
    const time = date.toLocaleTimeString();
    console.log(serviceTitle, serviceNumber, time);
    alert(`📞 Calling ${serviceTitle} ${serviceNumber}`);
  });
});
