// alertMessage function
let msgQueue = [];
let waitingQueue = false;
let tImeWaiting = 2000;

/*
 * AlertMessage [ set a new allert ]
 * @param {String} message Message Value
 */
function alertMessage(message) {
  // add msg to quque
  if (message) msgQueue.push(message);
  if (waitingQueue) return;

  // displaying message
  waitingQueue = true;
  document.getElementById("alt").style.right = 0;
  document.getElementById("altmsg").innerHTML = msgQueue[0];

  if (msgQueue.length >= 5) tImeWaiting = 1000;
  else tImeWaiting = 2000;

  setTimeout(() => {
    console.log(`Deleting Message... [${msgQueue[0]}]`);

    document.getElementById("alt").style.right = "-1000px";

    msgQueue = msgQueue.filter((val, index) => index !== 0); /* queueMsg; */
    if (msgQueue.length == 1) msgQueue = [];
    waitingQueue = false;

    // next
    if (msgQueue[0]) alertMessage();
  }, tImeWaiting);
}

let Ptemplate = {
  pormt: (title, content) => {
    return `
<div id="promtHeader" class="d-flex justify-content-center mt-1">${title}</div>
  <div id="promtContent" class="w-full border-x p-1 d-grid">
    ${content}
  </div>
</div>`;
  },
  title: `Option`,
  contentOption: (content) => {
    return ``;
  },
};
const nPromt = {
  songOption: (index) => {
    let pornDiv = document.getElementById("promt");
    let bg2 = document.getElementById("bg-2");

    let result = `
    <div id="promtHeader" class="d-flex justify-content-center mt-1">${queue[index].name}</div>
    <div id="promtContent" class="w-full border-x p-1">
    <p class="cursor-pointer my-1" onclick="openSelection.songInfo(${index})">info lagu</p>
    <p class="cursor-pointer my-1" onclick="">Edit Lagu</p>
    <p class="cursor-pointer my-1" onclick="nPromt.deleteSong">Keluarkan dari daftar lagu</p>
    </div>
    </div>
    `;
    if (author.inPlaylist == 0) {
      result = `
      <div id="promtHeader" class="d-flex justify-content-center mt-1">${queue[index].name}</div>
      <div id="promtContent" class="w-full border-x p-1">
      <p class="cursor-pointer my-1" onclick="openSelection.songInfo(${index})">info lagu</p>
      <p class="cursor-pointer my-1" onclick="openSelection.addSong(${index})">Edit Lagu</p>
      <p class="cursor-pointer my-1" onclick="nPromt.deleteSong">Hapus Lagu</p>
      </div>
      </div>
      `;
    }
    bg2.style.display = "block";
    pornDiv.innerHTML = result;
    pornDiv.style.display = "grid";
  },
};
