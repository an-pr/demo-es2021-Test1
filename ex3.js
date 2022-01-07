// OOP - 2

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    // метод, вызвав который можно получить строку,
    // представляющую текущий объект Person
    this.toString = function () {
      return `Person {name: ${this.name}, age: ${this.age}}`
    }
  }
}
// inheritance sample
class Student extends Person {
  // описание конструктора дочернего класса Student
  constructor(name, age, avgScore) {
    // вызов конструктора родительского класса Person
    super(name, age)
    // расширение набора свойств, полученных по наследству,
    // новым свойством "средний балл успеваемости"
    this.avgScore = avgScore
    // переопределение метода toString
    this.toString = function () {
      return `Person {name: ${this.name}, age: ${this.age}, avgScore: ${avgScore}}`
    }
  }
}

// Наследовать в новом классе Teacher класс Person,
// расширить свойством "ставка зарплаты" - this.salary
class Teacher extends Person {
 constructor(name, age, salary) {
     super(name, age)
     this.salary = salary
     this.toString = function () {
         return `Person {name: ${this.name}, age: ${this.age}, salary: ${salary}}`
     }
 }   
}

const st1 = new Student('St1', 18, 10.5)
console.log(st1.toString())
const tch1 = new Teacher('Tch1', 30, 20000)
console.log(tch1.toString());
// console.log(st1)