import get from './getElement.js';

function runMsgApp() {
  // dom
  const formEl = get('#form');
  const msgInput = get('#message-input');
  const msgLink = get('#link-input');
  const linkEl = get('#message-link');
  const showMsg = get('#message-show');

  // retrieve message
  const {hash} = window.location;
  const message = atob(hash.slice(1));
  console.log(message);

  if (message) {
    linkEl.classList.add('hide');
    formEl.classList.add('hide');
    showMsg.classList.remove('hide');
    showMsg.querySelector('h1').innerHTML = message;
  }

  // event listeners
  formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const encrypted = btoa(msgInput.value);
    msgLink.value = `${window.location}#${encrypted}`;
    msgInput.value = '';
    formEl.classList.add('hide');
    linkEl.classList.remove('hide');
    msgLink.select();
  });
}

window.addEventListener('DOMContentLoaded', runMsgApp);
