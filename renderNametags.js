
function renderNametags(nametags) {
    var name = "";

    nametags.forEach(element => {
        name += `<div style="display: flex; flex-direction: column; align-items: center;">
                    <div style="background-color: blue; width: 150px; height: 40px; line-height: 40px">Hello, my name is:</div>
                    <div style="background-color: gray; margin-bottom: 20px; width: 150px; height: 60px; line-height: 60px">${element}</div>
                </div>`;
    });

    return `<div class="text-center mt-5">
            ${name}
        </div>`
    
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}