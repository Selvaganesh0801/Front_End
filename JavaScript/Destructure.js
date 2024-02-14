 // destructure
let array=[10,'selva','sg08012001@gmail.com'];
console.log(array);

console.log(array[0])
console.log(array[1])
console.log(array[2])

console.log('-------------------')

// usecase-1
id=array[0];
name=array[1];
mail=array[2];

console.log(id)
console.log(name)
console.log(mail)
console.log('---------------------------')


// usecase-2
const p=[10,20,30];
const[f,m,l]=p;
console.log(f);
console.log(m);
console.log(l);
// console.log(id);
// console.log(r);

// usecase-3
let fname='Ganesh';
let lname='Selva';

let temp=fname;   //var-ganesh
fname=lname;      //ganesh=selva
lname=temp;       //ganesh
 
console.log(fname,lname);

let firstname='Selva';
let lastname='Ganesh';

[firstname.lastname]=[lastname.firstname]
console.log(firstname)
console.log(lastname)

// usecase-4

let product=[10,'iphone',20,30]

let[x,,y]=product;
console.log(x)
console.log(y)
console.log('------------------------')

let product1=[10,'iphone',[10,20,30,40,50]]

let [r,,[,,i,j,]]=product1
console.log(r)
console.log(i)
console.log(j)
   
 console.log('-------Rest--Spread-----')
  let ay=[10,20,30,40]
 let [...arg]=ay
 console.log(z)
 console.log(q)
 console.log(arg)
 
 function add(...arg){
	 console.log(z) 
	 console.log(q) 
	 console.log(ay)
	 console.log(arg)
 	 
 }
 add([...ay])
 
 // object
 // usecase-1
 let obj1={key:10,test:20,sample:30}
 let {key,...second}=obj1
 
 console.log(key)
 console.log(second)
 
 // usecase-2
 let obj2={
	 firstnm:'selva',
	 lastnm:'ganesh',
	 email:'sg@gmail.com',
 }
 
 let {firstnm:fn,lastnm:ln,email:em}=obj2
 console.log(fn)
 console.log(ln)
 console.log(em)
 
 let firstnam,lastnam,gmail;
 ({firstnam,lastnam,gmail}={
	 firstnam:'fm',
	 lastnam:'lm',
	 gmail:'gm',
 })
 console.log(firstnam)
 
 // usecase---const
 
 const w={firname:'selvag'}
 const {firname:ame}=w
 console.log(ame)
	 
// anonoums function

let qs=function(a,b){
	return a+b
}
console.log(qs(5,5))

console.log('---------arrow-----')
 // arrow function

let ad=(a,b) =>{
	return a+b
}
console.log(ad(10,20))

// default function

// function a(){
	// return a-b
// }
// let df=a()
// console.log(df)

function any(a=2,b=4){
	console.log(a*b)
}
any()
any(5)
 	
 
 
