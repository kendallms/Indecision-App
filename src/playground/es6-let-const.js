var nameVar = 'Kendall';
var nameVar = 'Mike';
console.log('nameVar', nameVar);
// var is function scoped

let nameLet = 'Sam';
nameLet = 'Kennie'
console.log('nameLet', nameLet);

// cannot reassign const either! 
const nameConst = 'Frank';
// nameConst = 'Frankie'; doesn't work
console.log('nameConst', nameConst);

function getPetName(){
    const petName = 'Huxen';
    return petName;
}
const petName = getPetName();
console.log(petName);

// Block scoping for const and let but not var 

var fullName = 'Kendall Moffett';

if (fullName){
    const firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);