// arguments- no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;

}
console.log(add(55,1, 1002));
// this keyword - no longer bound 

const user = {
    name: 'Kendall',
    cities: ['Huntington Beach', 'Frederick', 'DC'],
    printPlacesLived() {
     return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

// challenge area 
// make an object with data and method and use map 

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy);
    }

    // array of numbers we want to multiply 
    // second value is multiplyBy is a single number 
    // method is called multiply that will return new array where numbers have been multiplied 
}
console.log(multiplier.multiply());