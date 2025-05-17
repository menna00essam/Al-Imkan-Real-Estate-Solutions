// document.addEventListener('DOMContentLoaded', () => {
//     const chatWidget = document.getElementById('chatWidget');
//     const whatsappBtn = document.querySelector('.whatsapp-btn');
//     const closeChat = document.getElementById('closeChat');

//     if (whatsappBtn && chatWidget) {
//         whatsappBtn.addEventListener('click', () => {
//             chatWidget.style.display = 'block';
//         });
//     }

//     if (closeChat && chatWidget) {
//         closeChat.addEventListener('click', () => {
//             chatWidget.style.display = 'none';
//         });
//     }
// });



// document.addEventListener('DOMContentLoaded', function() {
//     const contactForm = document.getElementById('contactForm');
//     if (contactForm) {
//         contactForm.addEventListener('submit', handleFormSubmit);
//     }
// });


// function handleFormSubmit(event) {
//     event.preventDefault();
    
//     const name = document.getElementById('fname').value;
//     const phone = document.getElementById('phone').value;
//     const workDestination = document.getElementById('lname').value;
//     const message = document.getElementById('Message').value;
    
//     if (!validateSaudiPhone(phone)) {
//         document.getElementById('phone-error').textContent = 'يرجى إدخال رقم هاتف سعودي صحيح يبدأ بـ 05 ويتكون من 10 أرقام';
//         document.getElementById('phone-error').style.display = 'block';
//         return;
//     } else {
//         document.getElementById('phone-error').style.display = 'none';
//     }
    
//     sendDataToGoogleSheets({
//         Name: name,
//         Phone: phone,
//         'Work-Destination': workDestination,
//         Message: message
//     });
// }


// function validateSaudiPhone(phone) {
//     const saudiPhoneRegex = /^05[0-9]{8}$/;
//     return saudiPhoneRegex.test(phone);
// }

// function sendDataToGoogleSheets(formData) {
    
//     const scriptURL = 'https://script.google.com/macros/s/AKfycbx9l1giKBK0EAmyT0gujtXbvSBYAdPQ4c9Pu3LmePNgGXWhBl0tX0fiMa2mQ5IOsC-wag/exec';
    
//     const submitButton = document.querySelector('.sub');
//     const originalButtonText = submitButton.innerHTML;
//     submitButton.innerHTML = '<span>جاري الإرسال...</span>';
//     submitButton.disabled = true;
    
//     fetch(scriptURL, {
//         method: 'POST',
//         body: JSON.stringify(formData),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(response => {
//         if (response.ok) {
//             document.getElementById('success-alert').style.display = 'block';
//             document.getElementById('contactForm').reset();
            
//             setTimeout(() => {
//                 document.getElementById('success-alert').style.display = 'none';
//             }, 5000);
//         } else {
//             throw new Error('فشل إرسال البيانات');
//         }
//     })
//     .catch(error => {
//         document.getElementById('error-message').style.display = 'block';
//         console.error('Error:', error);
        
//         setTimeout(() => {
//             document.getElementById('error-message').style.display = 'none';
//         }, 5000);
//     })
//     .finally(() => {
//         submitButton.innerHTML = originalButtonText;
//         submitButton.disabled = false;
//     });
// }

// document.addEventListener('DOMContentLoaded', function() {
//     const closeAlertButton = document.getElementById('close-alert');
//     if (closeAlertButton) {
//         closeAlertButton.addEventListener('click', function() {
//             document.getElementById('success-alert').style.display = 'none';
//         });
//     }
// });
