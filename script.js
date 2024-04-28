// const pianoKeys = document.querySelectorAll(".keys .key");

// let audio = new Audio("tunes/a.wav");

// const playTune = (key) => {
//   audio.play();
// };
// pianoKeys.forEach((key) => {
//   key.addEventListener("click", () => playTune(key.dataset.key));
// });

document.addEventListener("DOMContentLoaded", function () {
  const keys = document.querySelectorAll(".key");
  const volumeControl = document.querySelector('.volume input[type="range"]');
  const keysShowCheckbox = document.querySelector(
    '.keys-show input[type="checkbox"]'
  );

  const audioElements = [];

  keys.forEach((key) => {
    const note = key.querySelector("span").innerText;
    const audio = new Audio(`tunes/${note}.wav`);
    audioElements.push(audio);

    key.addEventListener("click", () => {
      audio.currentTime = 0; // Reset audio to start if already playing
      audio.volume = volumeControl.value / 100; // Set volume according to range value
      audio.play();
    });
  });

  // Volume control
  volumeControl.addEventListener("input", function () {
    const volume = this.value / 100; // Convert range value to volume value (0 to 1)
    audioElements.forEach((audio) => {
      audio.volume = volume;
    });
  });

  // Hide/show keys
  keysShowCheckbox.addEventListener("change", function () {
    const keys = document.querySelectorAll(".key");
    keys.forEach((key) => {
      key.style.display = this.checked ? "block" : "none";
    });
  });
});
