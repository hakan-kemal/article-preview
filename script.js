const shareButton = document.getElementById('share-btn');
const sharePopup = document.getElementById('share-popup');

shareButton.addEventListener('click', () => {
  shareButton.classList.toggle('active');
  sharePopup.classList.toggle('hidden');
});
