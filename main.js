// Really Shows

function showThe(el) {
  var x = document.getElementById(el);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// Fix vh and vw

window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

window.addEventListener('resize', () => {
  // We execute the same script as before
  let vw = window.innerWidth * 0.01;
  document.documentElement.style.setProperty('--vw', `${vw}px`);
});
