document.addEventListener("DOMContentLoaded", function() {
//In the scripts.js file, using DOM manipulation, create a div with a class named "header-container".
    let div = document.createElement("div");
    div.className = "header-container";
    let hd1 = document.createElement("h1");
    let text = document.createTextNode("This is an h1");
    h1.className = h1;

    document.body.appendChild(div);
    div.appendChild(hd1);
    hd1.appendChild(text);
   
//Create a h1 element, then create a text node with the text "This is an h1". Append the text to the h1 then append the h1 to the div, then append the div to the body. Does it show up? If you put the script tag in the head of your html, then no, it did not show up. Thats what I wanted. Lets hop to google and search hint: "DOM content Loaded

let hd2 = document.createElement("h2");
    let hdtext = document.createTextNode("This is an h2");
    h2.classname = h2;

    document.body.appendChild(div);
    div.appendChild(hd2);
    hd2.appendChild(hdtext);

    let hd3 = document.createElement("h3");
    let hdtext3 = document.createTextNode("This is an h3");
    h3.className = h3;

    document.body.appendChild(div);
    div.appendChild(hd3);
    hd3.appendChild(hdtext3);

    let hd4 = document.createElement("h4");
    let hdtext4 = document.createTextNode("This is an h4");
    h4.className = h4;

    document.body.appendChild(div);
    div.appendChild(hd4);
    hd4.appendChild(hdtext4);

    let hd5 = document.createElement("h5");
    let hdtext5 = document.createTextNode("This is an h5");
    h5.className = h5; 

    document.body.appendChild(div);
    div.appendChild(hd5);
    hd5.appendChild(hdtext5);

    let hd6 = document.createElement("h6");
    let hdtext6 = document.createTextNode("This is an h6");
    h6.className = h6;

    document.body.appendChild(div);
    div.appendChild(hd6);
    hd6.appendChild(hdtext6);












});















