"use strict";

fetch("data/info.json", {
  method: "GET",
  "content-type": "application/json", // MIME Type
})
  .then((response) => response.json())
  .then((data) => {
    showAlbums(data);
  });

const showAlbums = (data) => {
  let html = "";
  data.albums.forEach((album) => {
    html += `
        <tr> 
            <td>${album.artist}</td>
            <td>${album.title}</td>
            <td>${album.year}</td>
        </tr>
        `;
  });
  document.querySelector("tbody").innerHTML = html;

  document.querySelector("table").classList.remove("hide");
  document.querySelector("table").classList.add("show");
};
