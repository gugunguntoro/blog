// Ambil semua elemen audio
const audios = document.querySelectorAll('audio');

// Fungsi untuk menghentikan semua audio yang sedang diputar
function stopAllAudios(except) {
  audios.forEach(audio => {
    if (audio !== except && !audio.paused) {
      audio.pause();
      audio.currentTime = 0; // Mengatur audio ke awal
    }
  });
}

// Event listener untuk setiap elemen audio
audios.forEach(audio => {
  audio.addEventListener('play', () => {
    stopAllAudios(audio); // Stop semua audio kecuali yang sedang dimainkan
  });
});