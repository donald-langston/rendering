
function renderAlbums(albums) {
    var renderedAlbum = "";
    albums.forEach(function(album) {
        renderedAlbum += getArtist(album);
        renderedAlbum += getAlbumTitileAndCover(album);
    });

    return `
        <div class="text-center mt-5">
            
        </div>
    `
}

function getArtist(album) {
    return `<h1>${album.artist}</h1>`;
}

function getAlbumTitileAndCover(album) {
    var titleAndCover = "";
    album.albums.forEach(function(element) {
        titleAndCover += `<img src="${element.albumCover}" <h2>${element.title}</h2>>`
        titleAndCover += getSongTitleAndLength(element.songs);
    })
}

function getSongTitleAndLength(songs) {
    var songTitleAndLength = `<ul>`;
    songs.forEach(function(song) {
        songTitleAndLength += `<li>${song.title} ${song.length}</li>`
    });
    return songTitleAndLength += `</ul>`
}

function albums() {
    var content = document.getElementById('content');

    var albumsAbstraction = [
        {
            artist: "Creed",
            albums: [
                {
                    title: "My Own Prison",
                    albumCover: "https://images-na.ssl-images-amazon.com/images/I/51Y5ZCMV2QL.jpg",
                    songs: [
                        {
                            title: "Torn",
                            length: "6:25"
                        },
                        {
                            title: "Ode",
                            length: "4:58"
                        },
                        {
                            title: "My Own Prison",
                            length: "5:00"
                        },
                        {
                            title: "Pity for a Dime",
                            length: "4:37"
                        },
                        {
                            title: "In America",
                            length: "3:38"
                        },
                        {
                            title: "Illusion",
                            length: "5:29"
                        }
                    ]

                },
                {
                    title: "Weathered",
                    albumCover: "https://is5-ssl.mzstatic.com/image/thumb/Music22/v4/b1/a4/a9/b1a4a9dd-ecda-6233-07da-f53848d37bdf/mzm.qakvcpwo.jpg/1200x630bb.jpg",
                    songs: [
                        {
                            title: "Bullets",
                            length: "6:25"
                        },
                        {
                            title: "Freedom Fighter",
                            length: "4:58"
                        },
                        {
                            title: "Who's Got My Back?",
                            length: "5:00"
                        },
                        {
                            title: "Signs",
                            length: "4:37"
                        },
                        {
                            title: "One Last Breath",
                            length: "3:38"
                        },
                        {
                            title: "My Sacrifice",
                            length: "5:29"
                        }
                    ]
                }
            ]
        }
    ]

    content.innerHTML = renderAlbums(albumsAbstraction);

}