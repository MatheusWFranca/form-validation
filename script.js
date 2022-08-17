const form = document.querySelector('form')
const input = document.querySelector('input')
const paragraph = document.createElement('p')
let userName = ''

input.addEventListener('keyup', (event) => {

  event.preventDefault()
  userName = input.value

  if(isValid(userName)) {
    paragraph.textContent = `Seu nome ${userName} é valido`
    paragraph.setAttribute('class', 'username-success-feedback')
  } else {
    paragraph.textContent = 'O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas'
    paragraph.setAttribute('class', 'username-help-feedback')
  }

  input.insertAdjacentElement('afterend', paragraph)
})

form.addEventListener('submit', (event) => {
  event.preventDefault()

  if(isValid(userName)) {
    paragraph.setAttribute('class', 'username-success-feedback')
    paragraph.textContent = `Dados enviados com sucesso! :)`
  } else {
    paragraph.setAttribute('class', 'username-help-feedback')
    paragraph.textContent = "Por favor, insira um username válido"
  }
})


function isValid(username) {
  return /^[a-zA-Z]{6,}$/.test(username)
}

