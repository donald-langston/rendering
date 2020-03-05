
function renderRestaurants(restaurants) {
    // HINT: You can use <img /> tags that point to these playing card images: 
    // https://commons.wikimedia.org/wiki/Category:SVG_playing_cards
    var resterauntContent = "";

    restaurants.forEach(element => {
        resterauntContent += `<div style="background-color: gray; width: 175px; height: 100px">
        <p style="margin-bottom: 0">${element.name}</p> 
        <p style="margin-bottom: 0">${element.type}</p>
        <p style="margin-bottom: 0">${createDollarSigns(element.priceRating)}</p>
        </div>`});
    return `
        <div class="text-center mt-5" style="display: flex; justify-content: space-around; align-items: center; background-color: black; width: 600px; height: 200px">
                ${resterauntContent}
        </div>
    `
}


function createDollarSigns(amount) {
    var dollarSigns = "";
    for(var i = 0; i < amount; i++) {
        dollarSigns += "$";
    }
    
    return dollarSigns;
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}