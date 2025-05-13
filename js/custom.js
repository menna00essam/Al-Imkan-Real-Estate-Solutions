document.addEventListener('DOMContentLoaded', () => {
    const chatWidget = document.getElementById('chatWidget');
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    const closeChat = document.getElementById('closeChat');

    if (whatsappBtn && chatWidget) {
        whatsappBtn.addEventListener('click', () => {
            chatWidget.style.display = 'block';
        });
    }

    if (closeChat && chatWidget) {
        closeChat.addEventListener('click', () => {
            chatWidget.style.display = 'none';
        });
    }
});



const scriptURL = 'https://script.google.com/macros/s/AKfycbzWDiz40KuOqWHTgs1XN2NwWUxEQpurRY8656GRiSpAbithO_ZCcLOpdEQt6Rok_mKFIQ/exec';

const form = document.forms['contact-form'];
const successAlert = document.getElementById('success-alert');
const closeAlertButton = document.getElementById('close-alert');

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      successAlert.style.display = 'flex';
      form.reset();
    })
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message));
});

closeAlertButton.addEventListener('click', () => {
  successAlert.style.display = 'none';
});


