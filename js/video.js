const openPopup = document.getElementById('openPopup');
const popup = document.getElementById('popup');
const close = document.getElementsByClassName('close')[0];
const video = document.getElementById('popupVideo');

openPopup.onclick = function() {
    popup.style.display = 'block';
    video.play();
}

close.onclick = function() {
    popup.style.display = 'none';
    video.pause();
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = 'none';
        video.pause();
    }
}
