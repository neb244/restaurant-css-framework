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
  