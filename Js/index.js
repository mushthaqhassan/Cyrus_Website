

function sendWhatsApp() {
  let message = `Hello,I am interested in your Free Consultation service. Please contact me.`;

  let url = "https://wa.me/918086512712?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}
