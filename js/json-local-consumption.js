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
        <article> 
            <p><strong>${album.title}</strong> (${album.artist}, ${album.year})</p>
       
        `;
    html += "<section>";
    album.musicians.forEach((musician) => {
      html += `
            <article class="musician">
            <p>${musician.name}</p>
         
            `;
      musician.instruments.forEach((instrument) => {
        html += `
                <li>${instrument}</li>
                `;
      });
      html += `</ul></article>`;
    });
    html += `
        </section>
    </article>`;
  });
  document.querySelector("main").innerHTML = html;
};
