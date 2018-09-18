document.addEventListener("DOMContentLoaded", function ()  {
let button = document.createElement('button');
let btntext = document.createTextNode('Add Square');
let containerDiv = document.createElement('div');
button.appendChild(btntext);
document.body.appendChild(button);
document.body.appendChild(containerDiv);

let id = '0'
button.addEventListener('click', function () {
    console.log('here');
let div = document.createElement ('div');
containerDiv.appendChild(div);
div.style.backgroundColor = 'purple';
div.style.width = '200px';
div.style.height = '200px';
div.style.cssFloat = 'left';
div.classname = 'boxDivs';
div.setAttribute ('id',id);
id++;

div.addEventListener('mouseover', function () {
console.log(this.id);
let divText = document.createTextNode(this.id);
div.appendChild(divText);

div.addEventListener('mouseout', function () {
div.innerText = '';

div.addEventListener('click', function() {
let randomColor = getRandomColor();
div.style.backgroundColor = randomColor;

div.addEventListener('dblclick', remove);

let color = ['blue', 'red', 'purple', 'yellow', 'green', 'white', 'black'];

function getRandomColor () {
let randomColor = color[Math.floor(Math.random()*color.length)];
return randomColor;
}
 function remove () {

    if (this.id % 2 === 0) {
        if (this.nextSibling) {
            this.nextSibling.remove ();
        } else {
alert('The next sibling does not exist');
        }
    } else {
        if (this.previousSibling) {
            this.previousSibling.remove ();
        } else {
            alert('The next sibling does not exist');
        }
                }
 }   
});

});
});


});

});