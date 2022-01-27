/*function palindromeWel(str){
	var str;
	str=string(document.getElementsByTagId("palindromeWel").value);
	wel=str;
	const wel=string.split("");
	const welrev=wel.reverse();
	const name=welrev.join("");
	console.log(name);
}
*/
/*function palindrome(str){
    const len = sting.length;
     for(let i=0;i<len/2;i++){
        if(string[i]!==string[len -1 -i]){
            alert('its not a palidrome');
        }else{
            alert('its a palidrome')
        }

     }
}

const string = prompt('Enter a string;');

const value = palindrome(string);
console.log(value);*/
  /*function palindrome()  
        {  
        var a= document.getElementById("p2").value;  
        var b = "";  
        for (i = a-1; i >= 0; i--)  
        {  
        bb = b + a[i]  
        } 
        if(a!=b) 
        document.getElementById("p2").value=b;
   }     */
   const reverse=(sentence)=>{
   const words = sentence.split("")
   	const rev=words.reverse()
   	console.log(rev)
   	return rev.join("")
   }
   console.log(reverse ("WELCOME"))