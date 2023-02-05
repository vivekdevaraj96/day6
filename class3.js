// Write a “person” class to hold all the details.

class Person{
    constructor(fname,lname,age,email) {
        this.firstName = fname;
        this.lastName = lname;
        this.age=age;
        this.email=email;
    }
    get details(){
        return `Email_id of ${this.firstName+" "+this.lastName} is ${this.email} and his age is ${this.age}`;
    }
    
}

let output=new Person("Ravi","Kumar","24","ravi@gmail.com");

console.log(output.details);
