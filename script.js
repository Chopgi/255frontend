//we are going to make an event listner, and it will trigger when the DOM loads
addEventListener("DOMContentLoaded", async function () {
  const response = await fetch("https://two55backend.onrender.com/api/songs");
  const songs = await response.json();
  let html = "";
  for (let song of songs) {
    html += `<li>${song.title} - ${song.artist}</li>`;
  }
  document.querySelector("#addedSong").innerHTML = html;
});
