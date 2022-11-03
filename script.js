let boxWidth = 600;
let boxHeight = 600;
let p = 10;

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

function drawBoard(){
    for (var x = 0; x <= boxWidth; x += 40) {
        context.moveTo(0.5 + x + p, p);
        context.lineTo(0.5 + x + p, boxHeight + p);
    }

    for (var x = 0; x <= boxHeight; x += 40) {
        context.moveTo(p, 0.5 + x + p);
        context.lineTo(boxWidth + p, 0.5 + x + p);
    }
    context.strokeStyle = "black";
    context.stroke();
}

drawBoard();