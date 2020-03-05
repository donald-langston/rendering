
function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 
    var divCircle;
    var divCircleSum = "";

    for (var i = 0; i < circles.length; i++) {
        divCircle = `<div style= "border-radius: 50%; background-color: ${circles[i].color}; height: ${circles[i].radius}px; width: ${circles[i].radius}px; margin: 2px 0 2px 0"></div>`
        divCircleSum += divCircle;
        console.log(divCircleSum);
    }

    return `
    <div class="text-center mt-5">
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center">
        ${divCircleSum}
        </div>
    </div>
    ` 
    
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}