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

//https://script.google.com/macros/s/AKfycbyX41kUmrn5l2sVbK318KdxvN0UwScTFv8Za4NbBvOEqfTGEwqN-56vhYkmXePFi7RIMQ/exec
const scriptURL = 'https://script.google.com/macros/s/AKfycbyX41kUmrn5l2sVbK318KdxvN0UwScTFv8Za4NbBvOEqfTGEwqN-56vhYkmXePFi7RIMQ/exec';
const form = document.forms['contact-form'];
const successAlert = document.getElementById('success-alert');
const errorMessage = document.getElementById('error-message');

// Submit form event
form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form);
  const formParams = new URLSearchParams();

  for (const pair of formData.entries()) {
    formParams.append(pair[0], pair[1]);
  }

  fetch(scriptURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formParams
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to send data');
    }
    return response.json();
  })
  .then(result => {
    successAlert.style.display = 'flex';
    form.reset();
    setTimeout(() => {
      successAlert.style.display = 'none';
    }, 3000);
  })
  .catch(error => {
    console.error('Error!', error.message);
    errorMessage.style.display = 'block'; // Show error message
  });
});

// Phone validation
document.getElementById('phone').addEventListener('input', function (e) {
    let phone = e.target.value;
    let errorDiv = document.getElementById('phone-error');
    
    let saudiPhonePattern = /^05[0-9]{8}$/;
    
    if (phone.length < 10 && phone.length > 0) {
        errorDiv.textContent = 'يرجى إدخال رقم هاتف مكون من 10 أرقام';
        e.target.setCustomValidity('Phone number must be 10 digits');
    } else if (!saudiPhonePattern.test(phone) && phone.length === 10) {
        errorDiv.textContent = 'يرجى إدخال رقم هاتف سعودي مكون من 10 أرقام يبدأ بـ 05';
        e.target.setCustomValidity('Invalid phone number');
    } else {
        errorDiv.textContent = '';
        e.target.setCustomValidity('');
    }

    if (phone.length > 10) {
        e.target.value = phone.slice(0, 10);
    }
});
