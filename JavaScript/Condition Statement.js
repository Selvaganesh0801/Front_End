console.time()
console.error("!Dont Believe")
// condition statement
// if ,if else-Nested if,else if,switch
console.log("_______________________________")
// if
// if(condition){sta}
var mark=28
if(mark>=35){
		console.log("True")
}
if(mark<35){
console.log("False")
}
console.log("Outside if")
console.log("_____________________")
// if else
// if (condition){sta}
// else{sts}
var mark=28
if(mark>=25){
	console.log("Pass")
}
else{
console.log("Fail")
}
console.log("_____________________")
// Nested if
// if()
	// if()
		// else
	// else
var age=25,weight=43
if(age>=28){
	if(weight>=40){
		console.log("Go and donate blood")
	}
	else{
		console.log("Due to low weight")
	}
}
else{
	console.log("Next Person")
}
// And condition___&&
var age=21,weight=60
if(age>=18 && weight>=60){
	console.log("Donate Blood")
}
else{
	console.log("Next Person")
}

// Or condition____||
var age=7,heigth=100

if(age<=6 || heigth<=99){
	console.log("Half Ticket")
}
else{
	console.log("Full Ticket")
}
console.log('_______________________')
// else if are if ladder
// if()
// else if()
// else if()
// else()

var a=10,b=20,c=30
if(a<b && a<c){
	console.log("A is Bigger")
}
else if(b<a && b<c){
	console.log("B is Bigger")
}
else{
	console.log("C is Bigger")
}                                                    

// ternary operator
// type variablename=(condition) ? 'true':'false'

var age=18;
var a=(age>=15)? 'Able to vote' : 'Not able to vote'
console.log(a)
	
console.log("_____________________________")

// switch case
// switch(key)case...___sta____break;
var day=parseInt(prompt());
// var day=(4)
switch(day){
	case 1:
	console.log("Sunday");
	break;
	case 2:
	console.log("Monday");
	break;
	case 3:
	console.log("Tuesday");
	break;
	case 4:
	console.log("Wednesday");
	break;
	case 5:
	console.log("Thursday");
	break;
	case 6:
	console.log("Friday");
	break;
	case 7:
	console.log("Saturday");
	break;
	default:
	console.log("Invalid day");
	break;
}
console.timeEnd() 