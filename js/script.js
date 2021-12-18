document.querySelector(".fa-adjust").addEventListener("click", lightMode)

function lightMode() {
  let body = document.body
  body.classList.toggle("light-mode")
}
