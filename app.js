// Banner rotation functionality
let currentBannerIndex = 0;
const banners = document.querySelectorAll("#banner img");

function rotateBanners() {
  banners[currentBannerIndex].style.display = "none";
  currentBannerIndex = (currentBannerIndex + 1) % banners.length;
  banners[currentBannerIndex].style.display = "block";
}

setInterval(rotateBanners, 3000);

function calculatePremium() {
  const value1 = parseFloat(document.getElementById("value1").value);
  const value2 = document.getElementById("value2").value;

    let premium = 0;

  if (value1 == 10 && value2 == 20) {
    document.getElementById("premiumResult").innerText = `${50}`;
  } else if (value1 === 20 && value2 === 30) {
    document.getElementById("premiumResult").innerText = `${100}`;
  } else if (value1 === 30 && value2 === 40) {
    document.getElementById("premiumResult").innerText = `${150}`;
  } else if (value1 === 40 && value2 === 50) {
    document.getElementById("premiumResult").innerText = `${200}`;
  } else if (value1 === 50 && value2 === 60) {
    document.getElementById("premiumResult").innerText = `${250}`;
  } else if (value1 === 70 && value2 === 80) {
    document.getElementById("premiumResult").innerText = `${300}`;
  } else if (value1 === 80 && value2 === 90) {
    document.getElementById("premiumResult").innerText = `${350}`;
  } else if (value1 === 90 && value2 === 100) {
    document.getElementById("premiumResult").innerText = `${400}`;
  } else if (value1 === 100 && value2 === 110) {
    document.getElementById("premiumResult").innerText = `${450}`;
  }
  //   if (value2 === 20) {
  //     if (value1 === 10) {
  //       premium = 500;
  //     } else if (value1 >= 30 && value1 < 50) {
  //       premium = 800;
  //     } else {
  //       premium = 1200;
  //     }
  //   } else {
  //     // female
  //     if (value1 < 30) {
  //       premium = 400;
  //     } else if (value1 >= 30 && value1 < 50) {
  //       premium = 700;
  //     } else {
  //       premium = 1000;
  //     }
  //   }

  //   document.getElementById("premiumResult").innerText = `${premium}`;
}

function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const emailContent = `Name: ${name}\nEmail: ${email}`;
  console.log(emailContent);
}
