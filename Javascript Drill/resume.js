var name = 'Theo Hughes'
console.log('name:' + name.toUpperCase() );

var mySelf = [
    'career: Digital Sales Manager',
    'Description: Very eager to become an software developer'
]
// Review code below for better understanding...
for (var i = 0; i < mySelf.length; i++){
    console.log('' + mySelf[i]);
}
console.log('\n' + 'Interest: ')

 var interest = ['Fishing', 'Golfing', 'Coaching', 'Traveling'];

 for (var x = 0; x < interest.length; x++) {
     console.log(' * ' + interest [x]);
 }

 var exp = [
    { 
      place: 'ATT',
      role: 'Regional Internet Sales Manager',
      jobDesc: 'Assist 200 sales reps to develop internet marketing programs, SEO and SEM for small/medium businesses',
          },
          {
              place: 'Bellsouth',
              role: 'Area Internet Sales Manager',
              jobDesc: 'Assist 200 sales reps to develop internet marketing programs, SEO and SEM for small/medium businesses',
          },
          {
            place: 'LM Berry',
            role: ' Sales Representative',
            jobDesc: 'Develop internet marketing programs, SEO and SEM for small/medium businesses',
          }
 ];

console.log('\n' + 'My Previous Experience: ');
// need better understanding
function displaySkill (bam, skill) {
    if (bam == 1) {
        console.log ('* ' + 'BAM: ' + skill );
    } else {
        console.log (' * ' + skill);
    }
};

displaySkill(0, 'Management');
displaySkill(0, 'Training');
displaySkill(0, 'Mentoring');
displaySkill(0, 'coaching');
displaySkill(0, 'Data Analysis');
displaySkill(0, 'Problem Solving');


    //check code for accuracy