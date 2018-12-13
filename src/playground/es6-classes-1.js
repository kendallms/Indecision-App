// Setup constructor to take name and age (default to 0) 
// Setup new method called getDescription - Kendall MS is 24 years old. 
// default is anonymous is 0 years old


class Person  {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi. I am ${this.name}.`
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`;
    }
}

class Traveler extends Person {
    constructor(name, age, location){
        super(name, age);
        this.location = location;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if(this.location()){
            greeting += ` My home location is ${this.location}.`
        }
        return greeting;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();

        if (this.hasMajor()){
            description += ` Their major is ${this.major}.`
        }
        return description;
    }
}

// create new subclass of person "Traveler" 
// new info is homeLocation (argument for traveler)
// override getGreeting   by using super and say hi I am Kendall and I'm visiting from ${home location}

const me = new Traveler('Kendall Moffett-Sklaroff', 25, 'Math', 'Washington DC');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getDescription());

