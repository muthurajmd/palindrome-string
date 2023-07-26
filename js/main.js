let a = prompt('Enter the word ');


let sum="";

document.write(`Given word ${a} <br>`)

 for(i=a.length-1; i>=0; i--){
	 sum +=a[i];
 }
if (a==sum){
	document.write(`Given word ${a} is palindrome <br>`)
	
}
else{
document.write(`Given word ${a} is not  palindrome <br>`)
 
}
    