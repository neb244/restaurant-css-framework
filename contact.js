function showMessage(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    alertDiv.style.display = 'block';

    const form = document.querySelector('form');
    form.insertAdjacentElement('beforebegin', alertDiv);

    setTimeout(() => {
        alertDiv.style.display = 'none';
    }, 4000);
}

function validateForm() {
    const nom = document.getElementById('nom');
    const prenom = document.getElementById('prenom');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (nom.value === '' || prenom.value === '' || email.value === '' || message.value === '') {
        showMessage('Tous les champs doivent être remplis', 'danger');
        return false;
    } else {
        showMessage('Votre message a été envoyé avec succès', 'success');
        setTimeout(() => {
            nom.value = '';
            prenom.value = '';
            email.value = '';
            message.value = '';
        }, 2000);
        return true;
    }
}

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    validateForm();
});
function showCookieBanner() {
    const cookieBanner = document.getElementById('cookieBanner');
    cookieBanner.style.display = 'block';
  }
  
  
  function acceptCookies() {
    const cookieBanner = document.getElementById('cookieBanner');
    cookieBanner.style.display = 'none';
  
    
    document.cookie = 'cookies_accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
  }
  
  const cookiesAccepted = document.cookie.includes('cookies_accepted=true');
  
  if (!cookiesAccepted) {
    showCookieBanner();
  }
  



