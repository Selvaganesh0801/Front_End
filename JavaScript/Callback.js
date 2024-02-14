// Normal callback Function

function dummyCallback(callback){
	setTimeout(()=>{
		console.log("Hello World")
		callback()
	},2000)
}
dummyCallback(()=>{
	console.log("Call in Two Seconds")
});

console.error("____________________________")
// callback

function demoCallback(callback){
	setTimeout(()=>{
		console.log("Display this msg after 2sec");
		callback();
	},3000);
}
function demoCallback1(callback){
	setTimeout(()=>{
		console.log("Display this msg after 3sec");
		callback();
	},5000);
}
function demoCallback2(callback){
	setTimeout(()=>{
		console.log("Display After 5sec")
		callback();
	},6000);
}

demoCallback(()=>{
	console.log("Callback");
	demoCallback1(()=>{
		console.log("Callback1")
		demoCallback2(()=>{
			console.log("Callback2")
		});
	});
});

// Promise

let p=new Promise(resolve,reject)=>{
	setTimeout(()=>{
		reject(new Error("Whoops !! throws an Error"));
	},1000)
	setTimeout(()=>{
		resolve("Done!");
	},1000);
});
console.log(p)
p.finally(()=>{
	console.log("Promise Starts")
}).then(()=>{
	console.log(p);
}).catch(()=>{
	console.log(p);
});
		
/*
Initial=>Pending----stms
Resolve=>Fullfill----.then()
Reject=>Reject-------.catch()
.finally()
*/