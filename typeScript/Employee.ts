// Class - ES6 (Ecma Script 2015)
// Syntax:

// export - import

// let i = 10
// private 
// static
// readonly

/*

export class ClassName {

    // Properties - variable

    key1 :datatype
    private key2 : datatype
    readonly key4 : datatype
    static key3: datatype = "ÄBC"

    // this - object of the current class 

    constructor(key1:datatype, key2, key4){
       this.key1 = key1
       this.key2 = key2
       this.key4 = key4
    }

    // Methods - function

    info(): returnType{
       console.log(this.key1)
    }

    static display(){
      console.log(ClassName.key3)
    }
}

const obj = new ClassName(arg1, arg2, arg4) - Object
obj.key1
obj.info()
ClassName.key3
ClassName.display()

const obj1 = new ClassName(arg1, arg2, arg4) - Object
obj1.key1


1. constructor - special method - used to initialize the proerties of the class. It should be created with a keyword as "constructor" only.
2. this keyword - It is a reference variable that referes the current class object.
3. static keyword - It belongs to the class rather than object of a class. That means to access the static proerties and method we have to access using the ClassName. Ex: - ClassName.key3, ClassName.display()
4. non-static - It belongs to the object of a class. To access the non-static proerties and methods we have to create the object of a class. Ex: - obj.key1, obj.info()
5. private keyword - It is an access modifier. It is used to restrictthe access of avariable and method within the class only. It can not be accessible outside of the class.
6. readonly keyword - It is used to declare a variable as read-only. It can be initialized only once either at the time of declaration or in the constructor of the class. After that it can not be modified.
7. Properties declaration inside the class in mandatory in TS but not mandatory in JS.

*/
import data from "../TestData/login.json"
class Employee{

     empId: number 
     empName: string
     empAge: number
     private empSalary
     readonly offer = 3000
     static company = "ABC"


     constructor(id: number, name: string, age: number, empSalary: number){
      this.empId = id // this.empId = 101
      this.empName = name // this.empName = "shiva"
      this.empAge = age // this.empAge = 25
      this.empSalary = empSalary // this.empSalary = 1000000 
     }

     employeeInformation() :void{
      console.log(`Employee Id: ${this.empId}, Employee Name: ${this.empName}, Employee Age: ${this.empAge},
          Employee Salary: ${this.empSalary}, Offer: ${this.offer}`)
       }

     static displayCompanyName(){
      console.log(Employee.company)
     } 
}

const emp1 = new Employee(101, "shiva", 25, 100000)
console.log(emp1.empId)
// console.log(emp1.empSalary)
console.log(Employee.company)
emp1.employeeInformation()
Employee.displayCompanyName()
// emp1.displayCompanyName()


const emp2 = new Employee(201, "jatling", 28,3100000)
console.log(emp2.empId)
// console.log(emp2.empSalary)
console.log(Employee.company)
emp2.employeeInformation()
Employee.displayCompanyName()


console.log(emp2)

const Human = 
{
     name: "Rahul",
     age: 32,
     isEmployee: true,
     address: {
      city: "Indore",
      state: "MP",
      country: "India"
     },
     skills : ["Java", "Python", "JS"],
     skill : [
      {one: "TS"},
      {two: "GO"}
     ],
     isMarried : true
}

console.log(Human.name)
console.log(Human.isEmployee)
console.log(Human.address)

console.log(Human.address.state)

console.log(Human.skills[1])
console.log(Human.skill[1].two)
// 

console.log(data)

/*
{
   name: "John",
   age: 30,
   isEmployee: true,
   address:{
      streeNo: 3,
      city: "Hyd",
      state: "TS"
   },
   skill: [{one:"Java"}, {two: "JS"}, {three: "Python"}],

   humanInfo: function(){
      console.log(Human.name, Human.age, Human.address)
   }
}

console.log(Human.name)
console.log(Human.address.city)
*/
