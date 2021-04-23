//section 1: loginForm
const loginForm = document.getElementById('welcome-form');

loginForm.addEventListener('submit', login);

function login(event)  {
  event.preventDefault();

  if(userNameInput.value) {
    userName = event;
    loginForm.classList.remove('show');
    messagesSection.classList.add('show');
  } else if(!userNameInput.value) {
    alert('Tell who you are!')
  };
}
//end of section 1

const messagesSection = [];
const messagesList = [];
const addMessageForm = [];
const userNameInput = [];
const messageContentInput = [];

let userName = null;