class Person {
  // объявление закрытого (private) свойства (поля)
  #name
  #age
  constructor(name, age) {
    // инициализация закрытого свойства (поля)
    this.setName(name)
    this.setAge(age)
    // объявление и инициализация открытого (public) свойства
    //this.age = age
    // метод, вызвав который можно получить строку,
    // представляющую текущий объект Person
    this.toString = function () {
      return `name: ${this.#name}, age: ${this.#age}`
    }
  }
  // объявление открытого метода установки значения в закрытое свойство
  setName (name) {
    if (!/^[A-ZА-Я][a-zа-я]{0,255}$/.test(name)) {
      throw new Error('Wrong "name" argument')
    }
    this.#name = name
  }

  setAge (age) {
    if (!(typeof age === 'number' && age >= 1 && age < 130)) {
      throw new Error('Wrong "age" argument')
    }
    this.#age = age
  }

  // объявление открытого метода получения значения из закрытого свойства
  getName() {
    return this.#name
  }
  getAge() {
    return this.#age 
  }
}
// Задание:
// доработать класс Person так, чтобы возраст нельзя было менять произвольно,
// а можно было устанавливать его вызовом нового метода setAge(age),
// не допускающего значения меньше 1 и больше 130,
// а также добавить метод получения значения возраста getAge()
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
      return `Person {name: ${this.getName()}, age: ${this.getAge()}, avgScore: ${avgScore}}`
    }
  }
}

// Наследовать в новом классе Teacher класс Person,
// расширить свойством "ставка зарплаты" - this.salary
// Наследовать в новом классе Teacher класс Person,
// расширить свойством "ставка зарплаты" - this.salary
class Teacher extends Person {
  constructor(name, age, salary) {
      super(name, age)
      this.salary = salary
      this.toString = function () {
          return `Person {name: ${this.getName()}, age: ${this.getAge()}, salary: ${this.salary}}`
      }
  }
  // статический метод (то есть метод класса, а не его объектов),
  // возвращающий экземпляр (объект) типа Teacher
  static createInstance (name, age, salary) {
    // создание обычного экземпляра
    const instance = new Teacher(name, age, salary)
    // настройка экземпляра: запрет на добавление новых свойств
    Object.preventExtensions(instance)
    // возврат настроенного экземпляра
    return instance
  }
 }
 
 /* const st1 = new Student('St1', 18, 10.5)
 console.log(st1.toString())*/
 // const tch1 = new Teacher('Tch1', 30, 20000)
  const tch1 = Teacher.createInstance('Noname', 0, 20000)
  console.log(tch1.toString())
  //tch1.#age = 20
  //tch1.#name = ''
 // tch1.setName('')
 // tch1.setName('ABC')
 // tch1.setName(123)
 // tch1.setName('Ю')
 // tch1.setName('Юрий')
 // tch1.setName('Andrei')
 // tch1.name = '123'
 // tch1.setName('Йвапкуреоеглдшжщ')
 // console.log(tch1.toString())
 // console.log(tch1)

 /* const names = new Set() // множество
 names.add('John')
 names.add('Bill')
 names.add('John')
 console.log(names) */

 /* const names = []
 names.push('John')
 names.push('Bill')
 names.push('John')
 console.log(names) */

 const people2 = new Map() // словарь
 people2.set('John', 30)
 people2.set('Bill', 20)
 people2.set('Bill', 40)
 console.log(people2)
 console.log(people2.has('Bill'))
 console.log(people2.has('Mary'))
 console.log(people2.get('Bill'))
