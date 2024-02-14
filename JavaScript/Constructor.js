// Constructor
// Syntax:
// function CunstructorName(){
	// stms
// }

function StudentInfo(name,course){
	this.name=name;
	this.course=course;
	// this.institute=institute;----it will be assign in Backend(prototype)
}
StudentInfo.prototype.institute="GreenS"

let stdSelva=new StudentInfo('Selva','js')
console.log(stdSelva)
console.log(stdSelva.name)
console.log(stdSelva.institute)

let stdGanesh=new StudentInfo('Ganesh','React')
console.log(stdGanesh)
console.log(stdGanesh.name)

let stdSelvag=new StudentInfo('Selvaganesh','Python')
console.log(stdSelvag)
console.log(stdSelvag.name)

let stdSiva=new StudentInfo('Siva','Java')
console.log(stdSiva)
console.log(stdSiva.course)
stdSiva.institute="Besant";
console.log(stdSiva.institute)


// Constructor with class------

class Calculation{
	constructor(num1,num2){
		this.num1=num1;
		this.num2=num2;
	}
	add(){
		return this.num1+this.num2;
	}
	sub(){
		return this.num1-this.num2
	}
	mul(){
		return this.num1*this.num2
	}
}
let calc=new Calculation(11,13)
console.log(calc)
console.log(calc.mul())

