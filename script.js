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

  keys.forEach((key) => {
    const note = key.querySelector("span").innerText;
    const audio = new Audio(`tunes/${note}.wav`);

    key.addEventListener("click", () => {
      audio.currentTime = 0; // Reset audio to start if already playing
      audio.play();
    });
  });
});
