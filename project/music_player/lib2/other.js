function loadDisplay(i) {
  if (!audio.paused) docId("btnplay").innerHTML = htmlTemplate.btnPause;
  document.title = `${queue[author.inSong].name} | ${queue[author.inSong].artist}`;
  docId("namemusic").innerHTML = queue[author.inSong].name;
  docId("artistmusic").innerHTML = queue[author.inSong].artist;
  docId("albummusic").innerHTML = queue[author.inSong].album;
  docId(`covermusic`).style = `background-image: url('${queue[i].poster === null ? "" : queue[i].poster}');`;
  docId(`rollmusic`).style = `background-image: url('${queue[i].poster === null ? "" : queue[i].poster}');`;
  docId("likeBtn").innerHTML = playList[1].song.includes(queue[author.inSong].name) === true ? htmlTemplate.liked : htmlTemplate.like;
  docId("btnplay").innerHTML = audio.paused === false ? htmlTemplate.btnPause : htmlTemplate.btnPlay;
  loadPlaylist();
}
loadDisplay(0);
function swichMode() {
  let mode = author.darkmode;
  let domBody = document.body;
  let modeButton = docId("setting-darkmode");
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

window.addEventListener("loadeddata", console.log("done"));
