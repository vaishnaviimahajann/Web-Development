class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`My name is ${this.name}`);
        console.log(`My age is ${this.age}`);
    }
}

class Student extends Person {

    constructor(name, age, rollno) {
        super(name, age);
        this.rollno = rollno;
    }

    introduce() {
        super.introduce();
        console.log(`My roll number is ${this.rollno}`);
    }

}

let student1 = new Student("Rahul", 20, 101);

student1.introduce();


//Inheritance allows a child class to reuse the properties and methods of a parent class.gi