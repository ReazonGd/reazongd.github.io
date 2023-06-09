// if music has ended
audio.addEventListener("ended", () => {
  if (author.playingMode === 2) music.main();
  else music.next();
});

// audio.addEventListener("pause", (docId("btnplay").innerHTML = htmlTemplate.btnPlay));
// audio.addEventListener("playing", (docId("btnplay").innerHTML = htmlTemplate.btnPause));

audio.addEventListener("error", (err) => {
  console.log("error Detected!", err);
  alertMessage(`Error when playing ${queue[author.inSong].name} try to playing next `);
  music.next();
});

let dtimenow = 0;
// when music has playing...
setInterval(() => {
  if (audio.currentSrc && !audio.played) return;

  let musicDuration = audio.duration;
  if (loading && author.inSong == author.lastSong) musicDuration = author.lasCurrent;
  let allCurrentTime = timeConverter(audio.currentTime);
  if (audio.paused || !audio.currentSrc) allCurrentTime = timeConverter(author.lasCurrent);

  let allDurationTime = timeConverter(audio.duration);

  if (dtimenow !== allDurationTime) {
    dtimenow = allDurationTime;
    docId("dtime").innerHTML = `${allDurationTime.minute}:${allDurationTime.second}`;
  }
  docId("ctime").innerHTML = `${allCurrentTime.minute}:${allCurrentTime.second}`;

  const currentTime = allCurrentTime.amount;
  let duration = allDurationTime.amount;
  if (isNaN(duration) || duration == 0) duration = 1000;

  docId("rgtime").style.backgroundSize = (currentTime / duration) * 100 + 1 + "% 100%";
  docId("rgtime").value = (currentTime / duration) * 1000;

  if (window.navigator.onLine) {
    if (!author.offline) return;
    author.offline = false;
    alertMessage(`Koneksi internet telah aktif!`);
  } else {
    if (author.offline) return;
    author.offline = true;
    alertMessage(`Tak ada internet! beberapa lagu tak bisa diputar!`);
  }
});

/**
 * Change number to minute and second. retutn 00 : 00 if amount not valid
 * @param {Number} amount
 */
function timeConverter(amount) {
  //  renturn 00 if invalid amount
  if (isNaN(amount)) return { minute: `00`, second: `00`, amount: 0 };

  // converter
  amount = Math.floor(amount);
  let minute = Math.floor(amount / 60);
  let second = Math.floor(amount - minute * 60);
  if (minute < 10) minute = `0${minute}`;
  if (second < 10) second = `0${second}`;
  return { minute: `${minute}`, second: `${second}`, amount };
}
