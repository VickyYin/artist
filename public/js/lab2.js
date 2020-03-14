
const addArtistButton = document.getElementById("addArtistButton");
const addBtn = document.getElementById("addButton");
const artistForm = document.getElementById("artistForm");
const artistList = document.querySelector(".unorderlist");
const search = document.getElementById("search")
const searchBtn = document.getElementById("searchButton")
//const ArtistKey = "Artist";
//let artists;
const artistUrl = '/artists';


addArtistButton.addEventListener("click", () => {
     toggleForm(artistForm);
});
function clearList(list){
     while(list.firstChild) list.removeChild(list.firstChild);
}

function clearForm(form) {
     const inputForm = form.getElementsByTagName("input");
     for (let i = 0; i < inputForm.length; i++) {
          inputForm[i].value = '';
     }
};

function toggleForm(form) {
     clearForm(form);
     artistForm.classList.toggle("hider");
}

function clearForm(form) {
     const inputForm = form.getElementsByTagName("input");
     for (let i = 0; i < inputForm.length; i++) {
          inputForm[i].value = '';
     }
};

function toggleForm(form) {
     clearForm(form);
     artistForm.classList.toggle("hider");
}

// Storage.prototype.setObj = function (key, obj) {
//      return this.setItem(key, JSON.stringify(obj));
// };

// Storage.prototype.getObj = function (key) {
//      return JSON.parse(this.getItem(key));
// };

// addBtn.addEventListener("click", async e => {
//      e.preventDefault();
//      const artist = {
//           artistName = document.getElementById("artistName").value,
//           aboutArtist = document.getElementById("aboutArtist").value,
//           artistImg = document.getElementById("artistImg").value
//      };
//      try{
//           await addArtist(artist);
//           addArtistCard(artist);
//           artistList.classList.remove('hider');
//           toggleForm(artistForm);
//      }catch(err){
//           console.log(err);
//      }
// });


// document.addEventListener("DOMContentLoaded", async () => {
//   try{
//      let artists = await getArtistsList();

//      if (artists.length === 0) {
//           artistList.classList.add('hide');
//      }
//      else displayArtists(artists);
//    }catch(err){
//         console.log(err);
//         artists = [];
//    }
// });

// function addArtistCard(artist) {
//      const artCard = createArtistCard(artist.name, artist.about, artist.imgUrl);
//      artistList.appendChild(artCard);
// }


// function deleteArtist(i) {
//      artists.splice(i, 1);
//      SaveArtistsList();
// }

// function findIndex(el) {
//      let i = 0;
//      while ((el = el.previousElementSibling) != null) {
//           i++;
//      }
//      return i;
// }



// function createArtistCard(artistName, aboutArtist, artistImg) {
//      const h2 = document.createElement("h2");
//      const p = document.createElement("p");
//      const li = document.createElement("li");
//      const img = document.createElement("img");
//      const div = document.createElement("div");
//      const button = document.createElement("button");
//      button.style.backgroundColor = "red";
//      button.addEventListener('click',async() => {
//         try{
//           await deleteArtist(name);
//           li.remove();
//           if(artistList,getElementsByTagName('li').length < 1)
//             artistList.classList.add('hider');
//         }catch(err){
//              console.log(err);
//         }
    
//      });
//      //add classes
//      li.classList.add("list");
//      img.classList.add("image");
//      div.classList.add("divider");
//      h2.classList.add("name");
//      p.classList.add("text");
//      button.classList.add("deleteButton");
//      //set attributes
//      img.setAttribute("src", artistImg);
//      //set text content
//      h2.textContent = artistName;
//      p.textContent = aboutArtist;
//      button.textContent = "Delete";
//      //apend
//      li.appendChild(img);
//      li.appendChild(div);
//      li.appendChild(button);
//      div.appendChild(h2);
//      div.appendChild(p);

//      return li;
// }

// function displayArtists(artists){
//      clearList(artistList);
//      if(artists.length < 1){
//           artistList.classList.add('hider');
//      }else{
//           artistList.classList.remove('hider');
//           for(let a of artists) addArtistCard(a);
//      }
// }
// searchBtn.addEventListener("click", (event) => {
//      const searchValue = search.value;
//      //const pattern = new RegExp(searchValue, "i");
//      try{
//           let artists = await getArtistsList(searchValue);
//           displayArtists(artists);
//      }catch(err){
//           console.log(err);
//      }

// });


//Lab5 CRUD methods
// async function getArtistsList(searchBtn){
//      return new Promise(async (resolve,reject) =>{
//           try{
//                let url = artistUrl;
//                if(searchValue!==undefined)
//                   url += `/${searchValue}`;
//                const response = await fetch(url,{
//                     method: 'GET',
//                     headers:{
//                          'Content-Type':'application/json'
//                     }
//                });
//                if(!response.ok) throw response;
//                let data = await response.json();
//                resolve(data);
     
//      } catch(err){
//         reject(err);
//      }
// });
// }
// async function addArtist(artist) {
//      return new Promise(async(resolve,reject) =>{
//           try{
//                const response = await fetch(artistUrl,{
//                     method:'POST',
//                     headers:{
//                          'Constent-Type':'application/json'
//                     },
//                     body:JSON.stringify(artist)
//                });
//                if(!response.ok) throw response;
//                resolve(response);
//           } catch(err){
//                reject(err);
//           }
//      });
// }


// async function deleteArtistsList(name){
//      return new Promise(async(resove,reject)=>{
//           try{
//                const response = await fetch(`${artistUrl}/${name}`,{
//                 method:'DELETE',
//                 headers:{
//                      'Content-Type':'application/json'
//                 }
//            });
//            if(!response.ok) throw response;
//            resolve(response);
//      }catch(err){
//          reject(err);
//      }
//    });
// }
