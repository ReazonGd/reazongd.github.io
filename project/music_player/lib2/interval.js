// Displaying selection.
function createSelection(title = "error", fill = "") {
  sclt++;
  const header = `<div class="align-items-center bg-1 shadow-sm text-p m-1 h-2">${title}</div>`;
  const content = `<div id="selection-content" class="selection1-content border-bottom">${fill}</div>`;
  const backButton = `<div id="backButton-${sclt}" class="d-flex  align-items-center text-purple">
                        <button type="button" class="btn btn-outline-p ms-auto mr-1" onclick="backSel()">Kembali</button>
                      </div>`;
  const footer = `<div class="bg-1 d-flex align-items-end p-small fixed-b justify-content-between w-full small">
                    <p style="font-family: monospace">© 2022 @Reazon Gd</p>
                    <div class="d-flex">
                      <a href="https://github.com/ReazonGd" style="font-family: monospace"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-github mr-sm" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg></a>
                      <a href="https://twitter.com/ChReazon" style="font-family: monospace"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-twitter mr-1" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/> </svg></a>
                    </div>
                  </div>`;

  docId("selection-parent").innerHTML += `<div id="selection${sclt}" class="selection1 bg-1 mb-0">${header}${content}${backButton}${footer}</div>`;
  return sclt;
}

let sclt = 0;
function backSel() {
  try {
    docId("selection" + sclt).remove();
    sclt--;
  } catch (e) {
    console.log(e);
    alertMessage("Ada suatu masalah ketika menutup");
  }
}

const openSelection = {
  playList: (place) => {
    let othBtn = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-gear-fill cursor-pointer" viewBox="0 0 16 16" onclick="openSelection.setting()"><title>setting</title>
    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus cursor-pointer" viewBox="0 0 16 16" onclick="openSelection.addOption()">
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" /></svg>`;

    createSelection("Daftar Putar", `<div id="listPlaylist"></div>`);
    docId(`backButton-${sclt}`).innerHTML += othBtn;
    for (let i = 0; i < playList.length; i++) {
      if (playList[i].name === null) return;
      docId("listPlaylist").innerHTML += htmlTemplate.PlaylistDisplay(i);
    }
  },
  selectSong: {
    new: (inDiv, index) => {
      if (!index) {
        if (playList[playList.length - 1].name !== null) playList.push({ name: null, song: [] });
        index = playList.length - 1;
      } else {
        if (author.onedit.length <= 0) author.onedit = playList[index].song;
      }
      docId(inDiv).innerHTML = "";
      for (let i = 0; i < dataMusic.length; i++) {
        docId(inDiv).innerHTML += htmlTemplate.inplch(i);
      }
    },
    cancel: () => {
      docId("edplt").style.display = "none";
      author.onedit = [];
    },
    ok: (i) => {
      playList[i].song = author.onedit;
      author.onedit = [];
      loadPlaylist();
    },
  },
  addOption: () => {
    createSelection(
      "Opsi",
      `<div class="d-flex align-items-center mb-1 w-full cursor-pointer " onclick="openSelection.addSong()">Tambahkan Musik </div><div class="d-flex align-items-center mb-1 w-full cursor-pointer " onclick="playlistEdit.new()">Buat daftar putar baru </div>`
    );
  },
  setting: () => {
    createSelection(
      "Setelan",
      `<div class="d-flex align-items-center justify-content-between mb-1 w-full" onclick="swichMode()"><p>Tema</p><p id="setting-darkmode" class="btn text-purple">
      ${author.darkmode === true ? htmlTemplate.darkmode : htmlTemplate.lightmode}
      </p></div>
      <div class="d-flex align-items-center justify-content-between mb-1 w-full cursor-pointer" onclick="openSelection.credit()"><p>Credit</p></div>`
    );
  },
  credit: () => {
    createSelection(
      "Credit",
      `<div class="align-items-center border-bottom selection1-content pb-1"> 
      Project ini dibuat oleh Reazon. sumber lagu yang ada disini diambil dari orang lain(open source).<br>
      svg icon, image, diambil dari bootstrap, sparkk, dan sumber lain yang dapat diambil secara gratis.<br>
      anda dapat mengambil sumber lagu dan mengunduhnya. namun setidaknya tidak mencopy style, script, dan halaman lalu mengunggahnya.<br>
      <br>
      created by Reazon <br>
      Github: <a href="https://github.com/ReazonGd"> https://github.com/ReazonGd </a> <br>
      </div>`
    );
  },
  songInfo: (i) => {
    createSelection(
      "Info",
      `<div class="d-flex border-bottom selection1-content pb-1 "> 
      <div class="w-1-3">
        Judul <br>
        Artis<br>
        Album <br>
        Sumber
      </div>
      <div class="ml-1 d-grid ">
        <p class="overflow">: ${queue[i].name} </p>
        <p class="overflow">: ${queue[i].artist}</p>
        <p class="overflow">: Unknow</p>
        <p class="overflow">: ${queue[i].link}</p>
      </div>
    </div>`
    );
  },
  addSong: (i) => {
    let T = {
      title: ``,
      artist: ``,
      cover: ``,
      src: ``,
      okOption: `music.add()`,
      backOPtion: `openSelection.addOption()`,
    };
    if (i) {
      let search = dataMusic.filter((music) => music.name == queue[i].name)[0];
      T.title = search.name;
      T.artist = search.artist;
      T.cover = search.poster;
      T.src = search.link;
      T.okOption = `music.edit(${search.name})`;
      if (!search.poster) T.cover = "";
    }

    createSelection(
      `Tambahkan / Edit Musik`,
      `<div class="d-flex align-items-center ">
      <div class="mb-3">
        <span class="pb-1" id="basic-addon2">Judul</span>
        <input id="intitle" class="input-purple" placeholder="Title" value="${T.title}"/>
      </div>
    </div>
    <div class="d-flex align-items-center " onclick="">
      <div class="mb-3">
        <span class="pb-1" id="basic-addon2">Artis</span>
        <input id="inartist" class="input-purple" placeholder="Artist" value="${T.artist}"/>
      </div>
    </div>
    <div class="d-flex align-items-center " onclick="">
      <div class="mb-3">
        <span class="pb-1" id="basic-addon2">Cover (Belum Tersedia)</span>
        <input id="incover" class="input-purple text-muted" placeholder="URL" value="${T.cover}"/>
      </div>
    </div>
    <div class="d-flex align-items-center " onclick="">
      <div class=" mb-3">
        <span class="pb-1" id="basic-addon2">Sumber *pastikan berisi file yang dapat diunduh</span>
        <input id="url" class="input-purple" placeholder="Sumber / file lokal" value="${T.src}"/>
      </div>
    </div>`
    );
    docId(`backButton-${sclt}`).innerHTML += `<button type="button" class="btn btn-outline-p" onclick="${T.okOption}">Oke</button>`;
  },
  openEdit: (i) => {
    createSelection(
      `edit - ${playList[i].name}`,
      ` <!-- op1 -->
        <div class="d-flex align-items-center mb-1 w-full cursor-pointer" onclick="docId('editPlaylistName').style.display = 'flex';">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil mr-1" viewBox="0 0 16 16" id="pencil"><path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"></path></svg>
          <label class="cursor-pointer" for="Check0"> Ubah nama</label>
        </div>

        <!-- input1 -->
        <div id="editPlaylistName" class="input-group mb-3 align-items-center gap-1 p-2" style="display: none">
          <input id="changeTitle" class="input-purple" placeholder="Nama" value="${playList[i].name}" />
          <span class="btn btn-outline-p btn-border-1 " id="basic-addon2" onclick="playlistEdit.changeName(${i}); playlistEdit.open()">Done</span>
        </div>

        <!-- op2 -->
        <div class="d-flex align-items-center mb-1 w-full cursor-pointer " onclick="docId('edplt').style.display = 'block';openSelection.selectSong.new('selectPlaylistSong',${i})">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-files mr-1" viewBox="0 0 16 16" id="pencil"><path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"></path></svg>
          <label class="cursor-pointer" for="Check0"> Edit Playlist </label>
        </div>

        <!-- input2 -->
        <div id="edplt" class="selection1-content overflow" style="display: none; max-height: 200px">
          <div id="selectPlaylistSong" onclick="openSelection.selectSong.new('selectPlaylistSong',${i})"></div>

          <!-- button1 -->
          <div class="d-flex m-3 stiky-bottom r-0 bg-1" >
            <button type="button" class="btn btn-outline-p mr-1" onclick="docId('edplt').style.display = 'none';openSelection.selectSong.cancel('selectPlaylistSong')">CANCEL</button>
            <button type="button" class="btn btn-outline-p" onclick="docId('edplt').style.display = 'none';openSelection.selectSong.ok(${i});loadPlaylist()">OK</button>
          </div>
        </div>

        <!-- op3 -->
        <div class="d-flex align-items-center mb-1 w-full h-2 border-bottom" onclick="playList = playList.filter(data => data.name !== playList[${i}].name); playlistEdit.changePlaylist(0);">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill mr-1" viewBox="0 0 16 16" id="trash-fill"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5zM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11zm1.958 1l-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47zM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"></path></svg>  
          <label class="cursor-pointer"> Delete </label>
        </div>`
    );
  },
};
