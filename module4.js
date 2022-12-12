//Step 1 + 2

const baseUrl = 'https://api.tvmaze.com';
let searchApi = baseUrl + '/shows';
// let searchApi = baseUrl + '/singlesearch/shows?q=pokemon';

let list = document.getElementById("listMovie");

/*fetch(searchApi)
    .then((response) => response.json())
    .then((data) => {
        let movieDiv = document.getElementById("movie");
        let h1 = document.createElement("h1");
        h1.innerHTML = data.name;
        let detailLink = document.createElement("a");
        detailLink.href = data.url;
        detailLink.target = '_blank';
        detailLink.innerHTML = data.url;
        let img = document.createElement("img");
        img.src = data.image.medium;
        let summary = document.createElement("span");
        summary.innerHTML = data.summary;
        movieDiv.appendChild(h1);
        movieDiv.appendChild(detailLink);
        movieDiv.appendChild(img);
        movieDiv.appendChild(summary);

    });*/

fetch(searchApi)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        let list = document.getElementById("listMovie");
        data.forEach((item) => {
            let div = document.createElement("div");
            let imageDiv = document.createElement("div");
            imageDiv.classList.add('image-div');
            let infoDiv = document.createElement("div");
            infoDiv.classList.add('info-div');
            div.classList.add('movie-container');
            infoDiv.classList.add('info-div');
            let h2 = document.createElement("h2");
            let img = document.createElement("img");
            img.src = (item.image != null) ? item.image.medium : "https://via.placeholder.com/100x200?text=no+image";
            let url = document.createElement("a");
            url.href = url.innerHTML = item.url;
            url.target = '_blank';
            h2.innerText = item.name;
            let summary = document.createElement("span");
            summary.innerHTML = item.summary;
            summary.classList.add('summary-style');

            let genres = document.createElement('p');
            item.genres.forEach((genre, key, arr) => {
                if (Object.is(arr.length - 1, key)) {
                    genres.innerHTML += genre;
                }
                else genres.innerHTML += genre + ' | ';
            })

            imageDiv.appendChild(img);
            infoDiv.appendChild(h2);
            infoDiv.appendChild(genres);
            infoDiv.appendChild(url);
            infoDiv.appendChild(summary);
            div.appendChild(imageDiv);
            div.appendChild(infoDiv);
            list.appendChild(div);
        })
    })



