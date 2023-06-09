const playlistEdit = {
  open: (i) => {
    if (i == 0 || playList[i].song.length <= 2) return alertMessage(`Cant edit this playlist`);
    openSelection.openEdit(i);
    alertMessage(`Entering edit mode.<br>now, Editing (${playList[i].name})`);
  },
  changeName: (index) => {
    let title = docId("changeTitle").value;

    if (title == "") return alertMessage(`Please enter some key!`);
    else if (title === playList[author.inPlaylist].name) {
      docId("editPlaylistName").style.display = "none";
      return alertMessage("Thats same name.");
    }
    playList[index].name = title;
    docId("editPlaylistName").style.display = "none";
    return alertMessage(`succes! name has change to ${title}`);
  },
  new: () => {
    createSelection(
      "Buat Daftar Putar Baru",
      `<div class="d-flex align-items-center justify-content-between mb-1 w-full"><span class="mr-1">Nama</span><input id="inpltitle" class="input-purple mr-1" placeholder="My Playlist" /></div>
      <div id="selection1-content" class="selection1-content form-check overflow border-top border-bottom" style="height: 200px" onclick='openSelection.selectSong.new("selection1-content")'></div>`
    );
    docId(`backButton-${sclt}`).innerHTML = `<button type="button" class="btn btn-outline-p mr-1" onclick="backSel();author.onedit=[];playList = playList.filter(list => list.name !== null)">Batal</button>
    <button type="submit" class="btn btn-outline-p" onclick="playlistEdit.created()">Buat</button>`;

    openSelection.selectSong.new("selection1-content");
  },
  created: () => {
    let title = docId(`inpltitle`).value;

    if (title.length > 20) return alertMessage("title to long...");
    if (!title) return alertMessage("Please enter the title first");
    if (author.onedit.length == 0) return alertMessage("Choose at least two song!");

    playList.forEach((data) => {
      if (data.name == null) {
        data.name = title;
        data.song = author.onedit;
        author.onedit = [];
      }
    });
    alertMessage(`playlist ${title} has created!`);
    backSel();
  },
  changePlaylist: (i) => {
    if (!playList[i].name || i > playList.length || i == author.inPlaylist || playList[i].song.length == 0) return;
    if (author.inSong && queue[author.inSong].isPlay) {
      if (audio.currentTime < 0 && audio.paused && audio.ended && audio.readyState < 2) return;
      lastCurent = audio.currentTime;
      audio.pause();
      docId("btnplay").innerHTML = htmlTemplate.btnPlay;
    }
    author.inPlaylist = i;
    lastCurent = null;
    author.inSong = 0;
    docId("namemusic").innerHTML = queue[0].name;
    docId("artistmusic").innerHTML = queue[0].artist;
    // docId(`listPlaylist`).style.display = `none`;
    alertMessage("Playlist has changed to " + playList[author.inPlaylist].name);
    loadPlaylist();
  },
};
