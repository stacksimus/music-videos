const modal = document.getElementById("modal");
const modalBackground = document.getElementById("modal-background");

Array.from(document.getElementsByClassName('card')).map(card => {
    const youtubeId = card.getAttribute('youtube-id');
    
    // When the user clicks the button, open the modal
    card.onclick = function() {
        modalBackground.style.display = "block";
        modal.style.display = "block";
        const iframe = document.createElement('iframe');
        iframe.id = 'youtube-iframe';
        iframe.src = `https://www.youtube.com/embed/${youtubeId}`;
        iframe.frameborder = '0';
        iframe.width = '99%';
        iframe.height = '98%';
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.referrerpolicy='strict-origin-when-cross-origin';
        iframe.allowfullscreen = true;
        modal.appendChild(iframe);
    }
});


const btn = document.getElementById("avril_lavigne-complicated");



modalBackground.onclick = function() {
  modalBackground.style.display = "none";
  modal.style.display = "none";
  document.getElementById('youtube-iframe').remove();
  
}
