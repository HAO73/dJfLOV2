
// Récupération des éléments
const video = document.getElementById('background-video');
const audioToggle = document.getElementById('audio-toggle');
const audioIcon = document.querySelector('.audio-icon');

// État initial : vidéo en mute
let isMuted = true;

// Fonction pour changer l'état audio
function toggleAudio() {
    isMuted = !isMuted;
    video.muted = isMuted;
    
    // Changer l'icône
    if (isMuted) {
        audioIcon.textContent = '🔇'; // Icône son coupé
        audioIcon.classList.add('audio-off');
        audioIcon.classList.remove('audio-on');
    } else {
        audioIcon.textContent = '🔊'; // Icône son activé
        audioIcon.classList.remove('audio-off');
        audioIcon.classList.add('audio-on');
    }
}

// Écouteur d'événement sur le bouton
audioToggle.addEventListener('click', toggleAudio);