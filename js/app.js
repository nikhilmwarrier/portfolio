
function SetKill() {
  setTimeout(KillLoader, 000);
}

function KillLoader() {
  document.querySelector("#dots").style.opacity = "0.0";
  document.querySelector("#spinner").style.opacity = "0.0";
  document.querySelector("#prLogoBox").style.opacity = "0.0";
  document.querySelector("#prLogo").style.opacity = "0.0";
  document.querySelector("#preloader").style.display = "none";
}