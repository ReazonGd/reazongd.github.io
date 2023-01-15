function loadDisplay(i) {
  if (!audio.paused) document.getElementById("btnplay").innerHTML = htmlTemplate.btnPause;
  document.title = `${queue[author.inSong].name} | ${queue[author.inSong].artist}`;
  document.getElementById("namemusic").innerHTML = queue[author.inSong].name;
  document.getElementById("artistmusic").innerHTML = queue[author.inSong].artist;
  document.getElementById("albummusic").innerHTML = queue[author.inSong].album;
  document.getElementById(`covermusic`).style = `background-image: url('${queue[i].poster}');`;
  document.getElementById(`rollmusic`).style = `background-image: url('${queue[i].poster}');`;
  loadPlaylist();
}
loadDisplay(0);
function swichMode() {
  let mode = author.darkmode;
  let domBody = document.body;
  let modeButton = document.getElementById("setting-darkmode");
  if (mode) {
    domBody.removeAttribute("dark");
    author.darkmode = false;
    modeButton.innerHTML = htmlTemplate.lightmode;
    return;
  }
  domBody.setAttribute("dark", "");
  author.darkmode = true;
  modeButton.innerHTML = htmlTemplate.darkmode;
}
