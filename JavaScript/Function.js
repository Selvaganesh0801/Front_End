// function
// function declaration
// fuction functionName(){
	// statement
// }

// function without argument
// function add(){
	// var a=10;
	// var b=20;
	// c=a+b;
	// console.log(c)
// }
// add()

// function with argument
// function add(a,b){
	// c=a+b;
	// console.log(c)
// }
// add(10,20)	

// function witout return type
// function add(a,b){
	// c=a+b;
	// console.log(c)
// }
// let rt=add(10,20)
// console.log(rt)

// function with return argument
// function add(a,b){
	// c=a+b;
	// console.log(c)
	// return 100
// }
// let re=add(10,20)
// console.log(re)

// anonoums function

// let qs=function(a,b){
	// return a+b
// } 
// console.log(qs(5,5))

console.log('---------arrow-----')
 // arrow function

// let ad=(a,b) =>{
	// return a+b
// }
// console.log(ad(10,20))

// default function

// function a(){
	// return a-b
// }
// let df=a()
// console.log(df)

// function any(a=2,b=4){
	// console.log(a*b)
// }
// any()
// any(5)
 	
// Higher order function------use logics in one function to call the fname
function add(a,b){
return a+b
}

function sum(a,b){
	return a-b
}

function fun(a,b,add){
	return add(a,b)
}
console.log(fun(10,20,add))
 
// Clouser function
function outterFunction(param1){
	// console.log("Fun")
	return function innerFunction(param2){
		console.log("Inner Function")
	}
}
let y=outterFunction(10)
y(20)

// Rest Param
function sum(...arg){
	let t=0;
	for(let a of arg){
		t+=a;
	}
	return t;
}
let num=[1,2,3,4,5]
console.log(sum(...num))





// function add(a,b){
    // let ad=a+b
    // return{
        // sub:function (c){
            // let su=ad-c
            // return{
                // mul:function (d){
                    // let mu=su*d
                    // return{
                        // div:function(e){
                            // let di=mu/e
                            // return{
                                // result:di
                            // }
                          // }
                    // }
                // }
            // }
        // }
    // }
// }

// Result=add(10,20).sub(5).mul(3).div(5)
// console.log(Result)
// console.log(typeof Result)




































