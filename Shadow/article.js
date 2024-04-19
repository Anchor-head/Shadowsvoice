function toggleLightMode() {
  var element = document.querySelector('main');
  var btn = document.getElementById('butt');
  element.classList.toggle('light-mode')
  btn.classList.toggle('light')
  if (btn.textContent === "Light Mode") {
    btn.textContent = "Shadow Mode";
  }
  else {
    btn.textContent = "Light Mode"
  }
}