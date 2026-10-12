class student{
    constructor(name, age, rollno){
        this.name = name;
        this.age = age;
        this.rollno = rollno;

        console.log(this.name);   // Rahul
        console.log(this.age);    // 20
        console.log(this.rollno); // 101
}
}
let student1 = new student("Rahul", 20, 101);
let student2 = new student("Mahul", 21, 102);
//A class is a blueprint/template used to create objects. It defines the properties and methods that objects will have.