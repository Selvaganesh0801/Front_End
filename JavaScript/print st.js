// print statement in js
// alert("Hello Selva");
// document.write("Hello");
console.log("Do it");
// console.time()
// console.table(obj)
// console.timeEnd()
// console.warn("Hello")
// console.error("Hello")
// console.clear()

// prompt("Enter Name:");

// variable types var,let,const
// it will be replace and reassign the values
var a="selva"
console.log(a);
a="Ganesh"
console.log(a);
var a="SelvaGanesh"
console.log(a);
// it will be replace the values but did not reassign the value
let b="Selva" 
console.log(b);
b="ganesh"
console.log(b);
// it will be did not replace and reassign
const c="Constant"
console.log(c);
// c="ganesh"
// console.log(c)
console.log("--------------");
// Datatypes
// primitve and non-primitive
// number,string,null,undefined,boolean

let age=23
let name="Selva"
let city=null;
city="Chennai"
let address=undefined;
address="Tambaram 2/14"
let isMale=true;
console.log(name);
console.log(age);
console.log(city);
console.log(address);
console.log(isMale);

// view type of datas 
console.log(typeof age);
console.log(typeof name);
console.log(typeof city);
console.log(typeof address);
console.log(typeof isMale);

// non-primitive
// object,array,regular expression
// obj-work in keys & values
let obj={
	name:"SelvaG",
	age:22,
	city:null,
	address:undefined,
	isMale:true,
};
console.log(obj);
// get particular value
console.log(obj.name);
console.log(obj.age);
// replace
obj.name="Appu";
console.log(obj);
obj.city="Chennai";
console.log(obj);
// delete
delete obj.address;
console.log(obj);
  
let obj1={
 	name:"Tokyo",
	age:22,
	city:null,
	address:undefined,
	isMale:true,
	// name="Denver",
}; 
console.log(obj1);

let obj2={
	name:"Denver",
	age:22,
	city:null,
	address:undefined,
	isMale:true,
};
console.log(obj2);

// Array
// type variable name=[]
// index

let array=['Rio',21,null,undefined,true];
console.log(array);
// get particular values
console.log(array[0]);
console.log(array[4]);
console.log(array[6]); //undefined

// replace
array[3]="Spain"
console.log(array);

// delete
delete array[2];
console.log(array);

var sg=[10,20,30,40,50];
console.log(sg);

// tostring
let s=sg.toString();
console.log(s);

// join in last 
let jn=sg.join("-$");
console.log(jn)

// concat to add values
var a1=[10,20,30,40,50];
var a2=[60,70,80];
var a3=[90];
console.log(a1.concat(a2,a3));

// pop remove last values 
var a=[10,20,30,40,50];
let p=a.pop();
console.log(a);
// console.log(p);

// push values add in last
var a=[10,20,30];
let h=a.push(40,50);
console.log(a);
console.log(h);

 // length
console.log(a.length);

// shift detlete first values
let sh=a.shift()
console.log(a);
console.log(sh);

// unshift values add in first
let us=a.unshift(0,10);
console.log(a);
console.log(us);

// splice
var a=[10,20,30,40,50,60,70,10]
let sp=a.splice(1,3,2,3,4)
console.log(a)
console.log(sp)
console.log(a.length)

console.log('______Slice__work based in index__')
// slice
var a=[10,20,30,40,50]
let sl=a.slice(1,5)
console.log(a)
console.log(sl)

// sort
var a=['a',' ','$','SG']
var srt=[10,30,20,40,50]
console.log(srt.sort())
console.log(a.sort())
console.log(srt.reverse())

var a=[1000,1,99,999,34,89]
console.log(a.sort())
console.log(a.sort(function(a,b){return a-b}))
console.log(a.sort(function(a,b){return b-a}))



let person={
	address:{street:'Chennai',city:'tambaram',pincode:600028},
	Clgdetail:{Clgname:'annai',course:'mca',year:'2023'},
}
console.log(person.address.street)
person.address.pincode=612203
console.log(person)

let ray=[{
	address:{street:'Chennai',city:'tambaram',pincode:600028},
	Clgdetail:{Clgname:'annai',course:'mca',year:'2023'},
}];
console.log(ray)
console.log(typeof ray)

console.log('--------------')



