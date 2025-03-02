const button = document.getElementById('changeColorButton');
const body = document.body;
    button.addEventListener('click', function() {
    body.style.backgroundColor = getRandomColor();

function getRandomColor() {
const letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let color = '#';
for (let i = 0; i < 6; i++) {
color += letters[Math.floor(Math.random() * 16)];
}
return color;
}


});