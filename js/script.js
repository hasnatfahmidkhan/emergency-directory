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
let coin = Number(document.getElementById("coin").textContent);
const historyClear = document.getElementById("history-clear");
const servicesCard = document.querySelectorAll(".service-card");

servicesCard.forEach((servicesCard) => {
  servicesCard.addEventListener("click", (evt) => {
    // Calling Features
    if (evt.target.closest(".call-btn")) {
      const serviceCard =
        evt.target.closest(".call-btn").parentElement.parentElement
          .parentElement;

      // Service Card Title and Number
      const serviceTitle =
        serviceCard.querySelector(".service-title").innerText;
      const serviceNumber =
        serviceCard.querySelector(".service-number").innerText;

      // local time
      const date = new Date();
      const time = date.toLocaleTimeString();
      if (coin >= 20) {
        alert(`📞 Calling ${serviceTitle} ${serviceNumber}`);
        coin -= 20;
        document.getElementById("coin").textContent = coin;
      } else {
        alert(`❌ আপনার পর্যাপ্ত কয়েন নেই; কল করতে কমপক্ষে ২০ কয়েন লাগবে।`);
      }
    }
    // Calling Features

    // Love react Feature
    const heartIcon = evt.target.closest('[name="heart-outline"]');
    if (heartIcon) {
      const heartCount = document.querySelector("#heart-btn span");
      heartCount.textContent = Number(heartCount.textContent) + 1;
    }
    // Love react Feature
  });
});
