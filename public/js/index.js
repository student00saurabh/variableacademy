function acceptCookies() {
  document.cookie = "cookieConsent=true; max-age=31536000; path=/";
  document.getElementById("cookieConsent").style.display = "none";
}

// Hide banner if cookie already accepted
if (document.cookie.indexOf("cookieConsent=true") !== -1) {
  document.getElementById("cookieConsent").style.display = "none";
}
