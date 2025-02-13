// script.js
const audio = document.getElementById('audio');
const playPauseButton = document.querySelector('.play-pause');
const progress = document.getElementById('progress');
const volume = document.getElementById('volume');

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
    }
}

audio.addEventListener('timeupdate', () => {
    const progressValue = (audio.currentTime / audio.duration) * 100;
    progress.value = progressValue;
});

function setProgress() {
    const value = progress.value * audio.duration / 100;
    audio.currentTime = value;
}

function setVolume() {
    audio.volume = volume.value;
}
