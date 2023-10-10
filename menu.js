// Fonction pour afficher la bannière de consentement aux cookies
function showCookieBanner() {
    const cookieBanner = document.getElementById('cookieBanner');
    cookieBanner.style.display = 'block';
  }
  
  // Fonction pour cacher la bannière de consentement aux cookies et stocker le consentement
  function acceptCookies() {
    const cookieBanner = document.getElementById('cookieBanner');
    cookieBanner.style.display = 'none';
  
    // Stocker le consentement de l'utilisateur (par exemple, dans un cookie)
    // Vous devrez mettre en place le stockage des consentements selon vos besoins.
    // Voici un exemple basique avec un cookie :
    document.cookie = 'cookies_accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
  }
  
  // Vérifier si l'utilisateur a déjà accepté les cookies
  const cookiesAccepted = document.cookie.includes('cookies_accepted=true');
  
  if (!cookiesAccepted) {
    showCookieBanner();
  }
  
  