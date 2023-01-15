try {
  audio.src = queue[author.inSong].link;
  // audio.play().then(audio.pause());
} catch (e) {
  console.log(e);
}

// Load queue.
function loadPlaylist() {
  // search string
  let search = document.getElementById("searchin").value.toLowerCase();
  if (!search) search = "";

  // curentElement and Set musicList to defauld
  const musicList = document.getElementById("MusicList");
  musicList.innerHTML = "";
  if (search) document.getElementById("MusicList").innerHTML += htmlTemplate.musicListResult(search);

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
      document.getElementById(`inplay${i}`).innerHTML += htmlTemplate.hasPlaying;
    } else {
      queue[i].isPlay = false;
    }
    document.getElementById(`inplay${i}`).innerHTML += htmlTemplate.optionBtn(i);
    document.getElementById(`cover${i}`).style = `background-image: url('${queue[i].poster}');`;
  }
}

// Main Music
const music = {
  main: () => {
    // set queue to 0
    if (!author.inSong || author.inSong === queue.length) author.inSong = 0;

    // pause song
    if (!audio.paused && audio.currentSrc == queue[author.inSong].link) {
      if (audio.currentTime < 0 && audio.paused && audio.ended && audio.readyState < 2) return;

      // pausing music
      author.lasCurrent = audio.currentTime;
      author.lastSong = author.inSong;
      audio.pause();

      document.getElementById("btnplay").innerHTML = htmlTemplate.btnPlay;
      loadPlaylist();
    } else {
      // playing song
      audio.pause();
      audio.src = queue[author.inSong].link;
      audio.play();

      // change title & artist , other...
      // document.getElementById("btnplay").innerHTML = htmlTemplate.loading;
      loadPlaylist();
      loadDisplay(author.inSong);
      let button = document.getElementById("likeBtn");
      if (playList[1].song.includes(queue[author.inSong].name)) {
        button.innerHTML = htmlTemplate.liked;
      } else {
        button.innerHTML = htmlTemplate.like;
      }
      // loading
      audio.addEventListener("loadeddata", () => {
        // change currentTime if music hes played before
        if (author.lasCurrent && author.inSong == author.lastSong) audio.currentTime = author.lasCurrent;

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
      if (author.inSong == queue.length) author.inSong = 0;
      else author.inSong += 1;
    }
    if (!audio.paused) music.main();
    loadDisplay(author.inSong);
  },
  prev: () => {
    // playing prev music
    if (author.inSong <= 0) return;
    else author.inSong -= 1;
    if (!audio.paused) music.main();
    loadDisplay(author.inSong);
  },
  changeTime: (time) => {
    // change currentTime
    let reTime = (audio.duration * time) / 100;
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
      document.getElementById("volume").innerHTML = htmlTemplate.mute;
      return;
    }
    audio.volume = 0;
    document.getElementById("volume").innerHTML = htmlTemplate.volumeDown;
  },
  repeat: () => {
    // turn repeat to on/off
    if (author.playingMode == 3) {
      document.getElementById("repeat").innerHTML = htmlTemplate.repeatAll;
      author.playingMode = 1;
    } else if (author.playingMode == 1) {
      document.getElementById("repeat").innerHTML = htmlTemplate.repeat;
      author.playingMode = 2;
    } else if (author.playingMode == 2) {
      document.getElementById("repeat").innerHTML = htmlTemplate.random;
      author.playingMode = 3;
    }
  },
  add: () => {
    // adding song

    // get data from input
    let name = document.getElementById("intitle").value;
    let artist = document.getElementById("inartist").value;
    let poster = document.getElementById("incover").value;
    let link = document.getElementById("url").value;

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
    document.getElementById("selection1").innerHTML = "";
    loadPlaylist();
    alertMessage(name + " sukses ditambahkan!");
  },
  edit: (name1) => {
    // adding song

    // get data from input
    let name = document.getElementById("intitle").value;
    let artist = document.getElementById("inartist").value;
    let poster = document.getElementById("incover").value;
    let link = document.getElementById("url").value;

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
    document.getElementById("selection1").innerHTML = "";
    loadPlaylist();
    alertMessage(name + " sukses ditambahkan!");
  },

  like: (i) => {
    let no = author.inSong;
    if (i) no = i;
    let button = document.getElementById("likeBtn");
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
