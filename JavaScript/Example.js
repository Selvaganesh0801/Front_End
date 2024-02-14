name="hello world"
let rev='';
for(i=name.length-1;i>=0;i--){
	j=(name[i]+" "+i)
}
console.log("-----------------")

let revn='';
let revn1='';
for(z=name.length-1;z>=5;z--){
	revn+=name[z]
}
for(z=name.length-7;z>=0;z--){
	revn1+=name[z]
}
// console.log(revn)
// console.log(revn1)
console.warn(revn1,"",revn)
	
	
let tot='';
for(q=name.length-1;q>=0;q--){
	tot+=name[q]
}

nu1="hello world"
nod="";
nod1="";
for(i=0;i<nu1.length;i++){
	if(i>=6){
		nod+=nu1[i]
	}
}

for(i=0;i<nu1.length-4;i++){
	if(i<5){
		nod1+=nu1[i]
	}
}
console.error(nod,'',nod1)

let ray="";
function strReverse(word){
	for(i=word.length-1;i>=0;i--){
		ray+=word[i]
	}
	return ray
}
console.log(strReverse("ramar"))


n=0;
n1=1;
let temp;

for(i=0;i<10;i++){
	console.log(n)
	temp=n+n1;
	n=n1;
	n1=temp;
}


mark=[1,2,3,4,5]
tem=0;
let arr=mark.forEach((el,ind,ar)=>{
	console.log(el,":",ind)
})

for(i=0;i<mark.length;i++){
	tem+=mark[i]
}
console.log(tem)

let a=mark.reduce((acc,cv)=>{
	return acc+cv
})
console.log(a)
mar='string'
val='';
for (h of mar){
	console.log(h)
	val+=h
}
console.log(val)



console.log('------------------------------')

word="greens"
let rev1='';
function strRev(){
	for(i=word.length-1;i>=0;i--){
		rev1+=word[i]
	}
	return rev1;
}
console.log(strRev("greens"))

function fact(num){
	if(num<2){
		return 1
	}
	else{
		return num*fact(num-1)
	}
}
console.log(fact(5))

new1=0;
new2=1;
let temp1;
function fibo(){
	for(i=0;i<6;i++){
		console.log(new1)
		temp1=new1+new2;
		new1=new2;
		new2=temp1;
	}
}
fibo()
are=[1,2,3,4,5]
function value(are){
	return (...are)
}
let max=are.max()
console.log(value([max]))