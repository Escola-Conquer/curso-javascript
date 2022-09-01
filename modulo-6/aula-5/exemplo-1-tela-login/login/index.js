//Javascript
function createDivContainer() {
  const body = document.querySelector('body');
  body.style.margin = '0px';

  const container = document.createElement('div');
  container.id = 'container';
  body.appendChild(container);
}

createDivContainer();

function createDivLogin() {
  const container = document.getElementById('container');
  const div = document.createElement('div');
  div.id = 'tela-login';
  container.appendChild(div);
}

createDivLogin();

function createLogin() {
  const div = document.getElementById('tela-login');
  let email = document.createElement('input');
  email.setAttribute('placeholder', 'E-mail');
  email.setAttribute('class', 'email');
  email.setAttribute('type', 'email');

  let password = document.createElement('input');
  password.setAttribute('class', 'password');
  password.setAttribute('placeholder', 'Password');
  password.setAttribute('type', 'password');

  let button = document.createElement('button');
  button.innerText = 'Conectar';
  button.setAttribute('class', 'btn-login');

    let text = document.createElement('h2');
    text.innerText = 'Login';
  div.appendChild(text);
  div.appendChild(email);
  div.appendChild(password);
  div.appendChild(button);
}

createLogin();

function styleContainer() {
  const container = document.getElementById('container');
  container.style.height = '100vh';
  container.style.width = '100vw';
  container.style.display = 'flex';
  container.style.flexDirection = 'row';
  container.style.justifyContent = 'center';
  container.style.alignItems = 'center';
}

styleContainer();

function styleLogin() {
  const telaLogin = document.getElementById('tela-login');
  telaLogin.style.border = '5px solid yellow';
  telaLogin.style.display = 'flex';
  telaLogin.style.backgroundColor = '#bbffcc';
  telaLogin.style.height = '500px';
  telaLogin.style.width = '500px';
  telaLogin.style.flexDirection = 'column';
  telaLogin.style.textAlign = 'center';
  telaLogin.style.justifyContent = 'center';
  telaLogin.style.alignItems = 'center';
}

styleLogin();

function styleButton() {
  const button = document.querySelector('.btn-login');
  
  button.style.color = 'blue';
  button.style.margin = '10px';
  button.style.width = '150px';
  button.style.borderRadius = '10px';
  button.style.backgroundColor = 'yellow';


}

styleButton();

function styleInputs() {
  const inputName = document.querySelector('.email');
  const inputPassword = document.querySelector('.password');

  inputName.style.margin = '10px';
  inputName.style.width = '200px';
  inputName.style.border = '3px solid black';
  inputPassword.style.margin = '10px';
  inputPassword.style.width = '200px';
  inputPassword.style.border = '3px solid green';
}

styleInputs();