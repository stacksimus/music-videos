const modal = document.getElementById("modal");
const modalBackground = document.getElementById("modal-background");

const btn = document.getElementById("avril-lavigne_complicated");

// When the user clicks the button, open the modal
btn.onclick = function() {
  modalBackground.style.display = "block";
  modal.style.display = "block";
  const iframe = document.createElement('iframe');
  iframe.id = 'youtube-iframe';
  iframe.src = 'https://www.youtube.com/embed/TIy3n2b7V9k?si=vSVsO8VIocLVFBHR'; // Set the URL you want to load in the iframe
  iframe.frameborder = '0';
  iframe.width = '99%';
  iframe.height = '98%';
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.referrerpolicy='strict-origin-when-cross-origin';
  iframe.allowfullscreen = true;
  modal.appendChild(iframe);
}

modalBackground.onclick = function() {
  modalBackground.style.display = "none";
  modal.style.display = "none";
  document.getElementById('youtube-iframe').remove();
  
}
