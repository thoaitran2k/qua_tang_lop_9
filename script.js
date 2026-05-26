document.getElementById("gift-box").addEventListener("click", function () {
  this.style.display = "none";
  document.getElementById("message").classList.remove("hidden");
  let videoContainer = document.getElementById("video-container");
  let video = document.getElementById("myVideo");
  videoContainer.classList.remove("hidden");
  video.play(); // Tự động phát video
  createRain();
});

function createRain() {
  for (let i = 0; i < 40; i++) {
    let el = document.createElement("div");
    el.innerHTML = Math.random() > 0.5 ? "10 ĐIỂM" : "❤️";
    el.className = "emoji";
    el.style.left = Math.random() * 100 + "vw";
    el.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 5000);
  }
}
