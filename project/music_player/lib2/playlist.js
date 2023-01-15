const playlistEdit = {
  open: (index) => {
    if (index == 0 || playList[index].song.length <= 2) return alertMessage(`Cant edit this playlist`);
    document.getElementById(`selection1`).style.display = `contents`;
    document.getElementById(`selection1`).innerHTML = htmlTemplate.editpl(index);
    alertMessage(`Entering edit mode.<br>now, Editing (${playList[index].name})`);
  },
  changeName: (index) => {
    let title = document.getElementById("changeTitle").value;

    if (title == "") return alertMessage(`Please enter some key!`);
    else if (title === playList[author.inPlaylist].name) {
      document.getElementById("editPlaylistName").style.display = "none";
      return alertMessage("Thats same name.");
    }
    playList[index].name = title;
    document.getElementById("editPlaylistName").style.display = "none";
    return alertMessage(`succes! name has change to ${title}`);
  },
  new: () => {
    document.getElementById(`selection1`).style.display = `contents`;
    document.getElementById(`selection1`).innerHTML = htmlTemplate.addplsc;
    document.getElementById(`selection1-content`).innerHTML = "";
    openSelection.selectSong.new("selection1-content");
  },
  created: () => {
    let title = document.getElementById(`inpltitle`).value;

    if (title.length > 20) return alertMessage("title to long...");
    if (!title) return alertMessage("Please enter the title first");
    if (author.onedit.length == 0) return alertMessage("Choose at least two song!");

    document.getElementById(`selection1`).innerHTML = ``;
    playList.forEach((data) => {
      if (data.name == null) {
        data.name = title;
        data.song = author.onedit;
        author.onedit = [];
      }
    });
    alertMessage(`playlist ${title} has created!`);
  },
  changePlaylist: (i) => {
    if (!playList[i].name || i > playList.length || i == author.inPlaylist || playList[i].song.length == 0) return;
    if (author.inSong && queue[author.inSong].isPlay) {
      if (audio.currentTime < 0 && audio.paused && audio.ended && audio.readyState < 2) return;
      lastCurent = audio.currentTime;
      audio.pause();
      document.getElementById("btnplay").innerHTML = htmlTemplate.btnPlay;
    }
    author.inPlaylist = i;
    lastCurent = null;
    author.inSong = 0;
    document.getElementById("namemusic").innerHTML = queue[0].name;
    document.getElementById("artistmusic").innerHTML = queue[0].artist;
    // document.getElementById(`listPlaylist`).style.display = `none`;
    alertMessage("Playlist has changed to " + playList[author.inPlaylist].name);
    loadPlaylist();
  },
};
