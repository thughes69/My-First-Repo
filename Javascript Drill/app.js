var name = 'Theo';
const states = 50;
var sum = 4 + 5;

// Check whether name starts with letter after 'L'
if (name.charCodeAt(0)> 76) {
    alert('Back of Line!')
} else {
    alert('Next!')
};

//Alerts 'Hello World'
function sayHello () {
    alert('Hello World');
};
// Check if age is greater than 21 to view page
function checkAge (name, age) {
    if (age < 21) {
        alert ('Sorry' + name + ', you aren\'t old enough to view page!')
    }
};

checkAge ('Charles' , 21);
checkAge ('Abby' , 27);
checkAge ('James' , 18);
checkAge ('John' , 17);

// Array of my favorite vegetables
var myFavVegs= ['asparagus', 'tomatoes', 'peppers', 'squash'];

//Uses loop to display my favorite vegeables to console
for (var i = 0; i < myFavVegs.length; i++) {
    console.log(myFavVegs[i]);
};
//Create array of 5 objects
var nameAge = [
 {name: 'Mike' , age: 31},
 {name: 'Nate' , age: 25},
 {name: 'Neicy' , age: 19},
 {name: 'Calvin', age: 18},
 {name: 'Telly' , age: 26},
];
//loops through array to call checkAge function
for (var i = 0; i < nameAge.length; i++) {
    checkAge(nameAge [i].name, nameAge [i].age);
};
// Create function that checks length of the string
function getLength(word){
    return word.length;
}
let wordlength = getLength ('Hello World');
if (wordlength % 2 == 0) {
    console.log ('This world is nice and even!');
} else {
    console.log('This world is an odd place');
}
let friends = ['Mike', 'James', 'Tom', 'Lemon', 'Ced'];
for (f = 0; f < friends.length; f++){
    let friend = friends[f]; {
        for (s = 100; s > 0; s--) {
            let minusOne = s - 1;
            if (s > 1) {
                console.log(s + "lines of code in the file, " + s + " lines ofcode; " + friend + 'strikes one out,' + minusOne + 'lines of code in the file');
                    } else {
                        console.log('1 line of code in the file, 1 line of code; ' + friend + 'strikes one out, clears it all out, no more lines of code in the file');
                    }
        }
    }
};