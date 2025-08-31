function setActive(button) {
  // remove active from all
  document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
  
  // add active to clicked
  button.classList.add("active");
}


