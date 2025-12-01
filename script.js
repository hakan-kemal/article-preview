const shareButton = document.getElementById('share-btn');
const sharePopup = document.getElementById('share-popup');

function openPopup() {
  sharePopup.classList.remove('hidden');
  shareButton.setAttribute('aria-expanded', 'true');
  sharePopup.focus(); // Move focus into popup
}

function closePopup() {
  sharePopup.classList.add('hidden');
  shareButton.setAttribute('aria-expanded', 'false');
  shareButton.focus(); // Return focus to button
}

shareButton.addEventListener('click', () => {
  if (sharePopup.classList.contains('hidden')) {
    openPopup();
  } else {
    closePopup();
  }
});
