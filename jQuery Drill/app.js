document.addEventListener("DOMContentLoaded", function () {
let $btn = $ ('#btn-submit');
let $input = $ ('input');
//$btn.click(function () {
   // alert($input.val ());
//});

$input.keypress(function () {
   $btn.removeAttr('disabled');
});

$('<div class="outputText">').appendTo('body');
$('<h2>').appendTo ('div');

// function output () {
 //    let $inputVal = $ ('#inputText').val ();
  //   let h2 = $('<h2>' + $inputVal + '</h2>');
   //  h2.appendTo ('.outputText');

   //  h2.mouseover (function () {
//h2.css( {
    //'background-color': 'purple',
    //'border-style': 'solid',
    //'border-radius': '5em',
//});
     //});
    //h2.mouseleave(function () {
       // h2.css( {
        //    'background-color': '',
       // 'border-style': '',
       // 'border-radius': '',
       // })
        
   // });
    
//};
//Why you must use ""
$('<ul class="list"></ul>').appendTo('body');
let colors = ['blue', 'green', 'red', 'purple', 'pink'];

function output () {
    let ranNum = Math.floor(Math.random () * color.length);
    let inputVal = $('#inputText').val ();
    let li = $('<li>' + inputVal + '</li>');
    li.appendTo('ul');

    li.click(function () {
li.css('color', colors[ranNum]);
    });

    li.dblclick(function () {
   li.remove();
    });

}//;
















});