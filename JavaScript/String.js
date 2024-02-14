var a="welcome"
console.log(a)
console.log(typeof a)
console.log("____________________")

// charAt-----get index value
var s="welcome"
console.log(s.charAt(2))

// chartCodeAt-------ascii table value
console.log(s.charCodeAt(2))

// indexOf()--------value to get index
console.log(s.indexOf('e'))
console.log(s.indexOf('l'))
console.log(s.indexOf('c'))
console.log("____________________")

// lastindexOf()
console.log(s.lastIndexOf('e'))
console.log(s.lastIndexOf('o'))
console.log("____________________")

// concat
var s1="java"
var s2="script"
console.log(s1.concat(s2))
console.log("____________________")

// search--------find the index value
var s="welcome to js class"
console.log(s.search('to'))
console.log(s.search('js'))
console.log(s.search(/Class/i))
console.log("____________________")

// match
var s="welcome to js class"
console.log(s.match("js"))
console.log("____________________")

// replaceAll
var s="welcome to js class to js class js class"
console.log(s.replaceAll('js','react'))
console.log(s.replaceAll(/js/g,'react'))
console.log("____________________")

// substr--------to print a given index value
var s='welcome to js class'
console.log(s.substr(1,5))
console.log("____________________")

// subString--------to get index number only
console.log(s.substring(2,4))
console.log("________@___@________")

// silce---to print given index value only
console.log(s.slice(1,5))
console.log("_______*____*________")

// toUpperCase____@___@___toLowerCase
var s='welCoMe'
console.log(s.toUpperCase())
console.log(s.toLowerCase())
console.log("____________________")

// type variableName=new classname();
let st=new String('welcome');
console.log(st)
console.log(typeof st)
console.log("____________________")

// valueOf
g=("selva")
console.log(g.valueOf())
console.log(typeof g)
console.log("____________________")

// toString
console.log(st.toString())
console.log("____________________")

// split---------remove given data
var s="welcome to"
console.log(s.split())
var a=s.split('e')
for (var x of a){
	console.log(x)
}
console.log("____________________")

// trim
var s="              Welcome                "
console.log(s.trim())
console.log("____________________")


// Date
// type variablename=new Date--classname();
let date=new Date();
console.log(date);

console.log(date.getDay());
console.log(date.getDay(), date.getMonth()+1,date.getFullYear());
