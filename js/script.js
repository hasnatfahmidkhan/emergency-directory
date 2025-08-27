// const menuIcon = document.querySelector("#menu-icon");

const menus = document.querySelector(".menus");
function showNav() {
  menus.classList.remove("right-[-200px]");
  menus.classList.add("right-0");
}

function closeNav() {
  menus.classList.add("right-[-200px]");
  menus.classList.remove("right-0");
}

const historyContainer = document.getElementById("history-container");

// Main Section
const callBtns = document.querySelectorAll(".call-btn");
let coin = Number(document.getElementById("coin").textContent);
const historyClear = document.getElementById("history-clear");
const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach((serviceCard) => {
  // Service Card Title and Number
  const serviceTitle = serviceCard.querySelector(".service-title").innerText;
  const serviceNumber = serviceCard.querySelector(".service-number").innerText;

  serviceCard.addEventListener("click", (evt) => {
    // Calling Features
    if (evt.target.closest(".call-btn")) {
      const serviceCard =
        evt.target.closest(".call-btn").parentElement.parentElement
          .parentElement;

      // local time
      const date = new Date();
      const time = date.toLocaleTimeString();
      if (coin >= 20) {
        alert(`📞 Calling ${serviceTitle} ${serviceNumber}`);
        coin -= 20;
        document.getElementById("coin").textContent = coin;

        // Call History Feature
        const historyCard = `
     <div class="bg-gray-100 flex justify-between items-center rounded-lg p-5">
        <div>
          <h1 class="hind-madurai-font font-semibold">${serviceTitle}</h1>
          <p class="text-gray-500 font-semibold mt-2 manrope-font">${serviceNumber}</p>
        </div>
        <div>
          <h3 class="font-semibold manrope-font">${time}</h3>
          </div>
      </div>
    `;
        const div = document.createElement("div");
        div.innerHTML = historyCard;
        historyContainer.appendChild(div);
        // Call History Feature
      } else {
        alert(`❌ আপনার পর্যাপ্ত কয়েন নেই; কল করতে কমপক্ষে ২০ কয়েন লাগবে।`);
      }
    }
    // Calling Feature

    // Love react Feature
    const heartIcon = evt.target.closest('[name="heart-outline"]');
    if (heartIcon) {
      const heartCount = document.querySelector("#heart-btn span");
      heartCount.textContent = Number(heartCount.textContent) + 1;
    }
    // Love react Feature

    // Copy Feature
    let copyCount = document.querySelector("#copy-count");
    console.log(copyCount)
    const copyBtn = evt.target.closest(".copy-btn");
    if (copyBtn) {
      const textToCopy = String(serviceNumber);
      navigator.clipboard.writeText(textToCopy);
      alert(`নম্বর কপি হয়েছেঃ ${textToCopy}`);
      copyCount.textContent = Number(copyCount.textContent) + 1;
    }
    // Copy Feature
  });
});

// Call History
const clearBtn = document.getElementById("history-clear");
clearBtn.addEventListener("click", () => {
  historyContainer.innerHTML = "";
});
