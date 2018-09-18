document.addEventListener("DOMContentLoaded", function () {
    //In the scripts.js file, using DOM manipulation, create a div with a class named "header-container".
    
    //create the div container
    let div = document.createElement("div");
    div.className = "header-container";
   
//Create the h1, create it's text, append the text to header and append the header to div 
    let h1 = document.createElement("h1");
    let h1Text = document.createTextNode("This is an h1");
    h1.appendChild(h1Text)
    div.appendChild(h1)
    document.body.appendChild(div);
    h1.className = 'h1';
    
 //Create the h2, create it's text, append the text to header and append the header to div 
    let h2 = document.createElement("h2");
    let h2Text = document.createTextNode("This is an h2");
    h2.appendChild(h2Text)
    div.appendChild(h2)
    h2.className = 'h2';
//Create the h3, create it's text, append the text to header and append the header to div
    let h3 = document.createElement("h3");
    let h3Text = document.createTextNode("This is an h3");
    h3.appendChild(h3Text);
    div.appendChild(h3)
    h3.className = 'h3';
//Create the h4, create it's text, append the text to header and append the header to div
    let h4 = document.createElement("h4");
    let h4Text = document.createTextNode("This is an h4");
    h4.appendChild(h4Text);
    div.appendChild(h4);
    h4.className = 'h4';
//Create the h5, create it's text, append the text to header and append the header to div
    let h5 = document.createElement("h5");
    let h5text = document.createTextNode("This is an h5");
    h5.appendChild(h5text);
    div.appendChild(h5);
    h5.className = 'h5';
//Create the h6, create it's text, append the text to header and append the header to div
    let h6 = document.createElement("h6");
    let h6text = document.createTextNode("This is an h6");
    h6.appendChild(h6text);
    div.appendChild(h6);
    h6.className = 'h6';
//Create an array of colors
    let color = ['green', 'blue', 'yellow', 'orange', 'darkgreen', 'cyan', 'coral', 'cadetblue'];
//Change color of h1 randomly when double clicked
    
        h1.addEventListener('dblclick', function() {
let num = Math.floor(Math.random () * colors.length);
h1.style.color = colors[num];
        });

        let currentNumber = 1;
        function addListItem() {
//Can we create a list item without creating an unordered list? YES!!
let li = document.createElement('li');
let liText = document.createTextNode('This is list item' + currentNumber);
li.appendChild(liText);
li.addEventListener('click', function() {
let num = Math.floor(Math.random() * colors.length);
li.style.color = colors[num];
});
li.addEventListener('dblclick', function () {
    document.body.removeChild (li);
}); 
document.body.appendChild(li);
currentNumber++;

        }
    
        let button = document.getElementById('addItemButton');
        button.addEventListener('click', addListItem);
   
     });







           














