// Displaying selection.
const openSelection = {
  playList: (place) => {
    document.getElementById(`selection1`).innerHTML = `  
        <div class="selection1 bg-1 mb-0">
            <div class="align-items-center bg-1 shadow-sm text-p m-1 h-2">Daftar Putar</div>
            
            <div id="selection1-content" class="selection1-content border-bottom overflow" style="height: 150px">
             
            </div>
            <div class="d-flex align-items-center text-p">
              <button type="button" class="btn btn-outline-p ms-auto" onclick="document.getElementById('selection1').innerHTML = '';">Tutup</button>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-gear-fill ml-1 cursor-pointer" viewBox="0 0 16 16" onclick="openSelection.setting()">
              <title>setting</title>
              <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus cursor-pointer" viewBox="0 0 16 16" onclick="openSelection.addOption()">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </div>
            <div class="bg-1 d-flex align-items-end p-small fixed-b justify-content-between w-full small">
            <p style="font-family: monospace">© 2022 @Reazon Gd</p>
            <div class="d-flex">
             <a href="https://github.com/ReazonGd" style="font-family: monospace">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-github mr-sm" viewBox="0 0 16 16">
           <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </a>
        <a href="https://twitter.com/ChReazon" style="font-family: monospace">
             <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-twitter mr-1" viewBox="0 0 16 16">
             <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
           </svg>
              </a>
            </div>
           </div>
          </div>
      `;
    document.getElementById(`selection1-content`).innerHTML = "";
    for (let i = 0; i < playList.length; i++) {
      if (playList[i].name === null) return;
      document.getElementById("selection1-content").innerHTML += htmlTemplate.PlaylistDisplay(i);
      // document.getElementById(`buttonPlaylisttSong${i}`).innerHTML = htmlTemplate.editPlaylistButton(i);
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
      document.getElementById(inDiv).innerHTML = "";
      for (let i = 0; i < dataMusic.length; i++) {
        document.getElementById(inDiv).innerHTML += htmlTemplate.inplch(i);
        let template = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus al-loaded" viewBox="0 0 16 16" onclick="author.onedit.push(dataMusic[${i}].name)"> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" /> </svg>`;
        if (author.onedit.includes(dataMusic[i].name))
          template = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x al-loaded" viewBox="0 0 16 16" onclick="author.onedit = author.onedit.filter(name => name !== dataMusic[${i}].name)"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" /></svg>`;
        document.getElementById(`buttonSelectSong${i}`).innerHTML = template;
      }
    },
    cancel: () => {
      document.getElementById("edplt").style.display = "none";
      author.onedit = [];
    },
    ok: (i) => {
      playList[i].song = author.onedit;
      loadPlaylist();
    },
  },
  addOption: () => {
    document.getElementById("selection1").innerHTML = `
          <div class="selection1 bg-1 mb-0">
            <div class="align-items-center bg-1 shadow-sm text-p m-1 h-2"> Tambah </div>
            <div id="selection1-content" class="selection1-content border-bottom">
              <div class="d-flex align-items-center mb-1 w-full cursor-pointer " onclick="openSelection.addSong()">
                 Tambahkan Musik 
              </div>
              <div class="d-flex align-items-center mb-1 w-full cursor-pointer " onclick="playlistEdit.new()">
                 Buat daftar putar baru 
              </div>
            </div>
            <div class="d-flex pl2btn">
              <button type="button" class="btn btn-outline-p ms-auto" onclick="openSelection.playList()">Kembali</button>
            </div>
            <div class="bg-1 d-flex align-items-end p-small fixed-b justify-content-between w-full small">
            <p style="font-family: monospace">© 2022 @Reazon Gd</p>
            <div class="d-flex">
             <a href="https://github.com/ReazonGd" style="font-family: monospace">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-github mr-sm" viewBox="0 0 16 16">
           <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </a>
        <a href="https://twitter.com/ChReazon" style="font-family: monospace">
             <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-twitter mr-1" viewBox="0 0 16 16">
             <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
           </svg>
              </a>
            </div>
           </div>
         </div>
      `;
    document.getElementById(`selection1`).style.display = `content`;
  },
  setting: () => {
    document.getElementById("selection1").innerHTML = `
          <div class="selection1 bg-1 mb-0">
            <div class="align-items-center bg-1 shadow-sm text-p m-1 h-2 "> Setting </div>
            <div id="selection1-content" class="selection1-content border-bottom">
              <div class="d-flex align-items-center justify-content-between mb-1 w-full" onclick="swichMode()">
                 <p>Tema</p>
                 <p id="setting-darkmode" class="btn text-purple">${author.darkmode === true ? htmlTemplate.darkmode : htmlTemplate.lightmode}</p>
              </div>
              <div class="d-flex align-items-center justify-content-between mb-1 w-full" onclick="">
                 <p>Tidak Tersedia</p>
                 
              </div>
            </div>
            <div class="align-items-center bg-1 shadow-sm text-p m-1 h-2 bt-2"> Credit </div>
            <div class="align-items-center border-bottom selection1-content pb-1"> 
            Project ini dibuat oleh Reazon. sumber lagu yang ada disini diambil dari orang lain(open source).<br>
            svg icon, image, diambil dari bootstrap, sparkk, dan sumber lain yang dapat diambil secara gratis.<br>
            anda dapat mengambil sumber lagu dan mengunduhnya. namun setidaknya tidak mencopy style, script, dan halaman lalu mengunggahnya.<br>
            <br>
            created by Reazon <br>
            Github: <a href="https://github.com/ReazonGd"> https://github.com/ReazonGd </a> <br>

            </div>
            
            <div class="d-flex pl2btn">
              <button type="button" class="btn btn-outline-p ms-auto" onclick="openSelection.playList()">Kembali</button>
            </div>
            <div class="bg-1 d-flex align-items-end p-small fixed-b justify-content-between w-full small">
             <p style="font-family: monospace">© 2022 @Reazon Gd</p>
             <div class="d-flex">
             <a href="https://github.com/ReazonGd" style="font-family: monospace">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-github mr-sm" viewBox="0 0 16 16">
           <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </a>
             <a href="https://twitter.com/ChReazon" style="font-family: monospace">
             <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-twitter mr-1" viewBox="0 0 16 16">
             <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
           </svg>
              </a>
             </div>
            </div>
          </div>
      `;
    document.getElementById(`selection1`).style.display = `content`;
  },
  songInfo: (i) => {
    document.getElementById("selection1").innerHTML = `
    
          <div class="selection1 bg-1 mb-0">
            <div class="align-items-center bg-1 shadow-sm text-p m-1 h-2"> Info </div>
            <div class="d-flex border-bottom selection1-content pb-1 "> 
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
            </div>
            
            <div class="d-flex pl2btn">
              <button type="button" class="btn btn-outline-p" onclick="document.getElementById('selection1').innerHTML = '';">Tutup</button>
              <button type="button" class="btn btn-outline-p ml-1" onclick="openSelection.addSong(${i})">Edit</button>
              </div>
              <div class="bg-1 d-flex align-items-end p-small fixed-b justify-content-between w-full small">
              <p style="font-family: monospace">© 2022 @Reazon Gd</p>
              <div class="d-flex">
              <a href="https://github.com/ReazonGd" style="font-family: monospace">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-github mr-sm" viewBox="0 0 16 16">
           <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </a>
        <a href="https://twitter.com/ChReazon" style="font-family: monospace">
             <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-twitter mr-1" viewBox="0 0 16 16">
             <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
           </svg>
              </a>
              </div>
             </div>
          </div>
      `;
    document.getElementById(`selection1`).style.display = `content`;
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
      T.backOPtion = `document.getElementById('selection1').innerHTML = '';`;
      if (!search.poster) T.cover = "";
    }
    document.getElementById("selection1").innerHTML = `
      <div class="selection1 bg-1 mb-0">
      <div class="align-items-center bg-1 shadow-sm text-p m-1 h-2">Tambahkan/Edit Musik</div>
      <div id="selection1-content" class="selection1-content border-bottom text-p">
        <div class="d-flex align-items-center ">
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
        </div>
      </div>
      <div class="d-flex pl2btn">
        <button type="button" class="btn btn-outline-p mr-1" onclick="${T.backOPtion}">kembali</button>
        <button type="button" class="btn btn-outline-p" onclick="${T.okOption}">Oke</button>
        </div>
        <div class="bg-1 d-flex align-items-end p-small fixed-b justify-content-between w-full small">
        <p style="font-family: monospace">© 2022 @Reazon Gd</p>
        <div class="d-grid">
        <a href="https://github.com/ReazonGd" style="font-family: monospace">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-github mr-sm" viewBox="0 0 16 16">
           <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </a>
        <a href="https://twitter.com/ChReazon" style="font-family: monospace">
             <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-twitter mr-1" viewBox="0 0 16 16">
             <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
           </svg>
              </a>
        </div>
       </div>
        </div>
      `;
    document.getElementById(`selection1`).style.display = `content`;
  },
};
