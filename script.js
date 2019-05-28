function constructor(name, secondname, age) {
	this.name = name
	this.secondname = secondname
	this.age = age
	
	this.method = () => {
		console.log(`hi, my name is ${this.name} and me ${this.age}`)
	}
}
let hi = new constructor("Sasha", "Utkin", "28");
hi.method()

//es6

class User {
	constructor(name, secondname, age) {
	this.name = name
	this.secondname = secondname
	this.age = age
	}
	method(){
		console.log(`hi, my name is ${this.name} and me ${this.age}`)
	}
}
let hi2 = new User("Sasha", "Utkin", "28");
hi2.method()