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

//https://script.google.com/macros/s/AKfycbw554k9UH3CV_ZrUGivy_o6hkIwzR0V4XYykTsL8gEwqiEsBwEMm2dH-SQ_oh2mOA1H_A/exec

const scriptURL = 'https://script.google.com/macros/s/AKfycbw554k9UH3CV_ZrUGivy_o6hkIwzR0V4XYykTsL8gEwqiEsBwEMm2dH-SQ_oh2mOA1H_A/exec';
const form = document.forms['contact-form'];
const successAlert = document.getElementById('success-alert');

form.addEventListener('submit', e => {
  e.preventDefault();

  // إرسال البيانات إلى Google Apps Script
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to send data');
      }
      return response.text(); // الحصول على النص الناتج من الاستجابة
    })
    .then(result => {
      // عند نجاح إرسال البيانات، عرض رسالة النجاح
      successAlert.style.display = 'flex';
      form.reset();

      // إخفاء رسالة النجاح بعد 3 ثواني
      setTimeout(() => {
        successAlert.style.display = 'none';
      }, 3000);
    })
    .catch(error => {
      console.error('Error!', error.message);
      // يمكنك إضافة رسالة خطأ هنا للمستخدم في حال فشل إرسال البيانات
      alert('حدث خطأ أثناء إرسال البيانات');
    });
});



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