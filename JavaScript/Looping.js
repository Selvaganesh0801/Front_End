// Looping
// To do some set of action again and again bassed on condition
// for,Nested for,while,do while,for in,for of,foreach

// for
// for (initialize;condition;inc/dec){sts}
// ++ i=i+1; -- i=i-1
for(let i=0;i<5;i++){
	console.log(i)
}

// loop statement
// i=0  i<5  i  i++
//  0   0<5  0  0+1=1

console.log('______________________________')
for(let j=1;j<10;j+=2){
	console.log(j)
}

console.log('______________________________')

let array=[10,11,22,33,44,55,66,77]
for(var i=0;i<array.length;i++){
	console.log(array[i])
}
console.warn("Pothum!!"); 
 
// Nested loop
for(i=0;i<3;i++){
	for(j=0;j<4;j++){
		console.log(j)
	}
	console.log(i)
	console.log(" ")
}

for(var i=0;i<8;i++){
	var p='';
	for(var j=0;j<i+1;j++){
		p +='$ ';
	}
	console.log(p)
}

let aray=[10,20,30,40,50]
temp=0;
for(var i=0;i<aray.length;i++){
	temp=temp+aray[i]
}
console.log(temp)

// While loop----------entry level checking
// while(condition){ stm +2;}
var a=10
while(a<15){
	console.log(a)
	a+=2;
}

// do while--------exit level checking
// do{sts}while(cond)
var a=20
do{
	console.log(a);
	a++;
}while(a<15)

// Jumping Statement
// break,continue
for(let i=0;i<5;i++){
	if(i==3){
		break; //continue
	}
	console.log(i)
}
console.error('_______________________________')
// for in--use for array
// for(type variableName in storedvaluename){sts}
var a=[10,20,30,40,50]
for(var x in a){
	console.log(a[x])	
}

var obj={
	name:'Selva',
	age:21,
	city:'Chennai',
}
for(var y in obj){
	console.log(y,':',obj[y])
}
console.log('_________________________')
// for of ----use for object
// for(type variablename of storedavaluename){sts}
for(var b of a){
	console.log(b)
} 
console.log("For each")
// forEach()
let marks=[10,20,30,40,50];
let forEachReturnValue=marks.forEach((el,i,arr)=>{
	console.log(el,":",i,":",arr);
});
// filter-------it will be filter the values % or <
let filterArrayValues=marks.filter((el)=>{
	// return el %2== 0;
	return el>=25;
	// return el == 30;
});
console.log(filterArrayValues);

// map-------it will be add an given values
let mapArrayValues=marks.map((x)=>{
	return x+5;
});
console.log(mapArrayValues);
console.log('every');

// reduce-------it will be add all array value in single value
let red=marks.reduce((val,ind)=>{
	return (val+ind)
})
console.log(red)

// every-----it will be return the bool values 
let everyReturnvalue=marks.every((el)=>{
	return el=10 
	// return el=10
});
console.log(everyReturnvalue);

// some()-----it can be decl are only given values to return t or f
let someReturnValue=marks.some((el)=>{
	// return el ==10;
	return el ==60;
});
console.log(someReturnValue);

// find()--------it will be declare given values only 
let findReturnValue=marks.find((x)=>{
	return x=30
});
console.log(findReturnValue);


// Largest number BigInnt

var a=123456789098765432123456789n
console.log(a)
console.log(typeof a)
var a=BigInt(20)
console.log(a)
var a=BigInt(Number.MAX_SAFE_INTEGER) +1n;
var b=BigInt(Number.MAX_SAFE_INTEGER) +2n;
console.log(a)
console.log(b)
console.log(a==b)


var a="avles"
var b=a.split('')
var c=b.reverse()
console.log(c.join(''))



