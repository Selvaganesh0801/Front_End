// DOM--------

// Call id in object

function getIdData(){
	let studentInfo={
		firstname:document.getElementById('name').value,
		lastname:document.getElementById('pass').value,
		chec:document.getElementById('check').checked
	}
	console.log("Firstname :"+studentInfo.firstname,"Lastname :"
	+studentInfo.lastname,"CheckBox :"+studentInfo.chec);
}

// Get Name value---------

function getNameData(){
	let genderList=document.getElementsByName('gender');
	for( let gender of genderList){
		if(gender.checked){
			var x=gender .value;
		}
	}
	console.log(x)
}

// Get innerText in para using Tag Name

function getTagData(){
	let paraList=document.getElementsByTagName('p');
	for(let para of paraList){
		console.log(para.innerText)
	} 
}

// Get class name to have value

function getClassData(){
	let
	evenParaList=document.getElementsByClassName('odd');
	for(let para of evenParaList){
		console.log(para.innerText)
	}
}

// Query selector use given value of firstTag

function getQueryData(){
	let queryData=document.querySelector('p,label,input');
	console.log(queryData);
	
	let queryAllData=document.querySelectorAll('p,label,input');
	console.log(queryAllData);
}

// DOM Manipulation-----
// Element creation----------

function getCreateData(){
	let div=document.createElement('div');
	div.id="SG_"+new Date().getUTCMilliseconds();
	div.innerText="Ganesh";
	console.log(div);
	document.body.appendChild(div);
	// let crt=document.createElement('p');---add elements in div tag
	// createEle.appendChild(crt)
}

// TextContent diff----
function getTextData(){
	let para=document.getElementById('para1');
	console.log(para.innerText);
	console.log(para.innerHTML);
	console.log(para.textContent);
}

// Remove Element------
function getRemoveData(){
	let para=document.getElementById('notes');
	let span=document.getElementById('span');
	if(span != null){
	para.removeChild(span);
	}
}

// CloneNode-------
function getCloneData(){
	let para=document.getElementById('para4');
	let cloneParaElement=para.cloneNode(true);
	console.log(cloneParaElement);
	document.body.appendChild(cloneParaElement);
}

// Attribute&Styles------
function handleAttribute(){
	let span=document.getElementById('span');
	let attrValue=span.getAttribute('id');
	console.log(attrValue);
	if(span != null && span.hasAttribute('name')){
	span.setAttribute('id','Highlight');
	span.setAttribute('class','itheyVela');
	}
}

function handleStyle(){
	let span=document.getElementById('span');
	span.style.backgroundColor="purple";
	span.style.color="white";
	span.style.fontSize="30px";
	span.style.fontFamily="sans-serif";
	span.style.cssText="background-color:teal;color:white;font-size:30px;";
}

// Event Handling-----------
// Mouseover-------using changing color
<!doctype html>
<html> 
<head> 
<title>EVENT HANDLING</title>
</head> 
<body> 
<h3 onmouseover="this.style.backgroundColor = 'red'" onmouseleave="this.style.backgroundColor = 'blue'">EVENT HANDLING</h3> 
<fieldset>
<label>First Name : </label> 
<input type="text" id="fname" onfocus="this.style.backgroundColor = 'yellow'" onblur="this.style.backgroundColor = 'white'"><br><br>
<label>Last Name</label> 
<input type="text" id="lname"><br><br> 
<label>Age :</label> 
<input type="text" id="age" onfocus="this.style.backgroundColor='teal'" onblur="this.style.backgroundColor='tomato'"><br><br>
<button id="btn">CLICK!!</button> 
</fieldset> 
<script> 
let lname = document.getElementById('lname'); 
lname.onfocus = () => { 
lname.style.backgroundColor = "aqua"; 
} 
lname.onblur = () => { 
lname.style.backgroundColor = "white"; 
} 
let btn = document.getElementById('btn'); 
document.getElementById('btn').addEventListener('click',displayAlert); 
function displayAlert(){ 
alert("ADD EVENT LISTENER WORKS"); 
} 
</script> 
</body> 
</html> 


