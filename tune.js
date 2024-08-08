let tunes = {};

fetch("tunes.json")
  .then((response) => response.json())
  .then((data) => {
    tunes = data;
    loadTuneFromUrl();
  });

function loadTuneFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const tuneId = urlParams.get("id");
  if (tuneId) {
    loadTune(tuneId);
  }
}

function loadTune(tuneId) {
  const tune = tunes[tuneId];
  if (!tune) return;

  document.title = `Sheet Music - ${tune.title}`;
  document.getElementById("tune-title").textContent = tune.title;
  document.getElementById("tune-description").textContent = tune.description;
  document.getElementById(
    "sheet-music"
  ).src = `musicFiles/${tune.sheetMusicFile}`;

  const musicPlayer = document.getElementById("music-player");
  if (tune.spotifyTrackId) {
    musicPlayer.innerHTML = `
    <iframe
    src="https://open.spotify.com/embed/track/${tune.spotifyTrackId}?utm_source=generator"
    width="100%" height="352" frameborder="0"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy">
</iframe>
        `;
  } else {
    musicPlayer.innerHTML = "";
  }
}
