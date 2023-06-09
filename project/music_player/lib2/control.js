try {
  audio.src = queue[author.inSong].link;
  // audio.play().then(audio.pause());
} catch (e) {
  console.log(e);
}

let loading = false;
window.onload(
  setTimeout(() => {
    docId("loading").style.display = "none";
  }, 2000)
);

// Load queue.
function loadPlaylist() {
  // search string
  let search = docId("search-input").value.toLowerCase();
  if (!search) search = "";

  // curentElement and Set musicList to defauld
  const musicList = docId("MusicList");
  musicList.innerHTML = "";
  if (search) docId("MusicList").innerHTML += htmlTemplate.musicListResult(search);

  // filtering dataMusic to queue
  queue = dataMusic.filter((music) => playList[author.inPlaylist].song.includes(music.name));
  if (author.inPlaylist == 0) queue = dataMusic;

  // Searching..
  queue = queue.filter((music) => music.name.includes(search));

  //looping
  for (let i = 0; i < queue.length; i++) {
    // Print
    musicList.innerHTML += htmlTemplate.musicListContent(i);

    // Set isPlay
    if (queue[i].link == audio.currentSrc) {
      queue[i].isPlay = true;
      docId(`inplay${i}`).innerHTML += htmlTemplate.hasPlaying;
    } else {
      queue[i].isPlay = false;
    }
    docId(`inplay${i}`).innerHTML += htmlTemplate.optionBtn(i);
    docId(`cover${i}`).style = `background-image: url('${queue[i].poster === null ? "" : queue[i].poster}');`;
  }
}

// Main Music
const music = {
  main: () => {
    // set queue to 0
    console.log(`imput : ${author.inSong}`);
    if (!author.inSong || author.inSong === queue.length) author.inSong = 0;

    // pause song
    if (!audio.paused && audio.currentSrc == queue[author.inSong].link) {
      if (audio.currentTime < 0 && audio.paused && audio.ended && audio.readyState < 2) return;

      // pausing music
      author.lasCurrent = audio.currentTime;
      author.lastSong = author.inSong;
      audio.pause();

      loadPlaylist();
    } else {
      // playing song
      audio.pause();
      audio.src = queue[author.inSong].link;
      audio.play();

      // change title & artist , other...
      // docId("btnplay").innerHTML = htmlTemplate.loading;
      loadPlaylist();
      loadDisplay(author.inSong);

      loading = true;
      // loading
      audio.addEventListener("loadeddata", () => {
        // change currentTime if music hes played before
        if (author.lasCurrent && author.inSong == author.lastSong) audio.currentTime = author.lasCurrent;
        loading = false;
        loadPlaylist();
      });
    }
  },
  next: () => {
    // playing next music
    if (author.playingMode === 3) {
      const res = Math.floor(Math.random() * queue.length - 1);
      author.inSong = res;
    } else {
      if (author.inSong === queue.length) return (author.inSong = 0);
      author.inSong += 1;
      // if (!audio.paused)
      music.main();
      author.lasCurrent = audio.currentTime;
      loadDisplay(author.inSong);
      console.log("playing next");
    }
  },
  prev: () => {
    // playing prev music
    if (author.inSong <= 0) return;
    else author.inSong -= 1;
    if (!audio.paused) music.main();
    author.lasCurrent = audio.currentTime;
    loadDisplay(author.inSong);
  },
  changeTime: (time) => {
    // change currentTime
    let reTime = (audio.duration * time) / 1000;
    if (audio.paused) author.lasCurrent = reTime;
    else audio.currentTime = reTime;
    console.log(time, reTime);
  },
  swich: (index) => {
    // Switch a music to index
    author.inSong = index;
    music.main();
    loadPlaylist();
    loadDisplay(author.inSong);
  },
  mute: () => {
    // mute / unmute
    if (audio.volume === 0) {
      audio.volume = 1;
      docId("volume").innerHTML = htmlTemplate.mute;
      return;
    }
    audio.volume = 0;
    docId("volume").innerHTML = htmlTemplate.volumeDown;
  },
  repeat: () => {
    // turn repeat to on/off
    if (author.playingMode == 3) {
      docId("repeat").innerHTML = htmlTemplate.repeatAll;
      author.playingMode = 1;
    } else if (author.playingMode == 1) {
      docId("repeat").innerHTML = htmlTemplate.repeat;
      author.playingMode = 2;
    } else if (author.playingMode == 2) {
      docId("repeat").innerHTML = htmlTemplate.random;
      author.playingMode = 3;
    }
  },
  add: () => {
    // adding song

    // get data from input
    let name = docId("intitle").value;
    let artist = docId("inartist").value;
    let poster = docId("incover").value;
    let link = docId("url").value;

    // validation
    if (!name || !link || !link.match(/.|:/g)) return alertMessage("Judul atau URL tidak valid!");
    if (name.length > 20 || artist.length > 20) return alertMessage("Judul atau Nama Artist terlalu panjang!");
    if (!artist) artist = "unknow";
    if (!poster) poster = null;

    // cheking same name
    dataMusic.forEach((data) => {
      if (data.name.includes(name)) {
        return alertMessage(`${name}, Sudah Ditambahkan sebelumnya`);
      }
    });

    // create data and push to dataMusic
    let data = { name, artist, link, poster, isPlay: false };
    dataMusic.push(data);

    // closing
    docId("selection1").innerHTML = "";
    loadPlaylist();
    alertMessage(name + " sukses ditambahkan!");
  },
  edit: (name1) => {
    // adding song

    // get data from input
    let name = docId("intitle").value;
    let artist = docId("inartist").value;
    let poster = docId("incover").value;
    let link = docId("url").value;

    // validation
    if (!name || !link || !link.match(/.|:/g)) return alertMessage("Judul atau URL tidak valid!");
    if (name.length > 20 || artist.length > 20) return alertMessage("Judul atau Nama Artist terlalu panjang!");
    if (!artist) artist = "unknow";
    if (!poster) poster = null;

    // cheking same name
    dataMusic.forEach((data, index) => {
      if (data.name.includes(name) && name !== name1) {
        return alertMessage(`${name}, Sudah Ditambahkan sebelumnya`);
      } else {
        music.data;
      }
    });

    // // create data and push to dataMusic
    // let data = { name, artist, link, poster, isPlay: false };
    // dataMusic.push(data);

    // closing
    backSel();
    loadPlaylist();
    alertMessage(name + " sukses ditambahkan!");
  },

  like: (i) => {
    let no = author.inSong;
    if (i) no = i;
    let button = docId("likeBtn");
    if (playList[1].song.includes(queue[no].name)) {
      playList[1].song = playList[1].song.filter((song) => song !== queue[no].name);
      button.innerHTML = htmlTemplate.like;
      button.setAttribute("fill", "gray");
    } else {
      playList[1].song.push(queue[no].name);
      button.innerHTML = htmlTemplate.liked;
      button.setAttribute("fill", "var(--text-color-purple)");
    }
  },
};
