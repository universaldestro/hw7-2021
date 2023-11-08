var video = document.querySelector("#player1");
/*Page load
Play Button
Pause Button
Slow Down
Speed Up
Skip Ahead
Mute
Volume Slider




Styled
Original


*/
window.addEventListener("load", function () {
  video.autoplay = false;
  video.pause();
  video.loop = false;
});

document.querySelector("#play").addEventListener("click", function () {
  video.play();
  video.volume = 0.5;
  document.querySelector("#volume").textContent = video.volume * 100;
  document.querySelector("#volume").value = 50;
});

document.querySelector("#pause").addEventListener("click", function () {
  video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
  video.playbackRate = video.playbackRate - 0.1;
  console.log(video.playbackRate);
});
document.querySelector("#faster").addEventListener("click", function () {
  video.playbackRate = video.playbackRate + 0.1;
  console.log(video.playbackRate);
});
document.querySelector("#skip").addEventListener("click", function () {
  video.currentTime = video.currentTime + 10;
  if (video.currentTime >= video.duration) {
    video.currentTime = 0;
  }
  console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function () {
  video.muted = !video.muted;
  if (video.muted) {
    document.querySelector("#mute").textContent = "Unmute";
  } else {
    document.querySelector("#mute").textContent = "Mute";
  }
});

document.querySelector("#slider").addEventListener("input", function () {
  video.volume = this.value / 100;
  document.querySelector("#volume").textContent = video.volume * 100;
});

document.querySelector("#vintage").addEventListener("click", function () {
  document.getElementById("player1").classList.add("oldSchool");
});
document.querySelector("#orig").addEventListener("click", function () {
  document.getElementById("player1").classList.remove("oldSchool");
});
