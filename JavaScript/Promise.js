// Promise

// let p=new Promise(resolve,reject)=>{
	// setTimeout(()=>{
		// reject(new Error("Whoops !! throws an Error"));
	// },1000)
	// setTimeout(()=>{
		// resolve("Done!");
	// },1000);
// });
// console.log(p)
// p.finally(()=>{
	// console.log("Promise Starts")
// }).then(()=>{
	// console.log(p);
// }).catch(()=>{
	// console.log(p);
// }).finally(()=>{
	// consol.log("ENd!")
// })
	
// let promise=new Promise(function(resolve,reject){
	// reject("Error")
// })
// console.log(promise)



	
/*
Initial=>Pending----stms
Resolve=>Fullfill----.then()
Reject=>Reject-------.catch()
.finally()
*/