function closeForMobile() {
  const isMobile =
    /Mobi|Android|iPh(one|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      navigator.userAgent,
    );
  if (isMobile) {
    const x = document.getElementById("navlinks");
    x.style.display = "none";
  }
}

function loadBurger() {
  let x = document.getElementById("navlinks");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  x.addEventListener("click", () => {
    closeForMobile();
  });
}
